import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import ICAL from "ical.js";

const host = "127.0.0.1";
const port = process.env.ICS_VALIDATION_PORT || "3107";
const baseUrl = `http://${host}:${port}`;
const feeds = [
  { name: "Adriaan", path: "/events.ics" },
  { name: "Yassassin", path: "/yassassin.ics" },
  {
    name: "Happy Hardware",
    path: "/happyhardware.ics",
    expectedEventCount: 4,
    disallowRecurrence: true,
  },
];

const server = spawn(process.execPath, [".output/server/index.mjs"], {
  env: { ...process.env, HOST: host, PORT: port },
  stdio: ["ignore", "pipe", "pipe"],
});

let serverOutput = "";
for (const stream of [server.stdout, server.stderr]) {
  stream.on("data", (chunk) => {
    serverOutput += chunk.toString();
  });
}

const waitForServer = async () => {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (server.exitCode !== null) {
      throw new Error(`Server exited before validation:\n${serverOutput}`);
    }

    try {
      const response = await fetch(baseUrl, {
        signal: AbortSignal.timeout(1_000),
      });
      if (response.ok) return;
    } catch {
      // The server can take a moment to accept connections after spawning.
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`Server did not start in time:\n${serverOutput}`);
};

const validateFeed = async ({
  name,
  path,
  expectedEventCount,
  disallowRecurrence,
}) => {
  const response = await fetch(`${baseUrl}${path}`, {
    signal: AbortSignal.timeout(30_000),
  });

  assert.equal(response.status, 200, `${name} feed should return HTTP 200`);
  assert.match(
    response.headers.get("content-type") || "",
    /^text\/calendar\b/i,
    `${name} feed should have a text/calendar content type`
  );

  const body = await response.text();
  assert.ok(body.includes("\r\n"), `${name} feed should use CRLF line endings`);

  const calendar = new ICAL.Component(ICAL.parse(body));
  assert.equal(calendar.name, "vcalendar", `${name} feed needs a VCALENDAR`);
  assert.equal(
    calendar.getFirstPropertyValue("version"),
    "2.0",
    `${name} feed should use iCalendar 2.0`
  );
  assert.ok(
    calendar.getFirstPropertyValue("prodid"),
    `${name} feed should include PRODID`
  );

  const components = calendar.getAllSubcomponents("vevent");
  assert.ok(components.length > 0, `${name} feed should contain events`);
  if (expectedEventCount !== undefined) {
    assert.equal(
      components.length,
      expectedEventCount,
      `${name} feed should contain ${expectedEventCount} events`
    );
  }

  const uids = new Set();
  for (const component of components) {
    const summary = component.getFirstPropertyValue("summary") || "Untitled";
    const prefix = `${name} event \"${summary}\"`;
    const uid = component.getFirstPropertyValue("uid");

    assert.ok(uid, `${prefix} should include UID`);
    assert.ok(!uids.has(uid), `${prefix} should have a unique UID`);
    uids.add(uid);

    assert.ok(component.getFirstProperty("dtstamp"), `${prefix} needs DTSTAMP`);
    assert.ok(component.getFirstProperty("dtstart"), `${prefix} needs DTSTART`);
    if (disallowRecurrence) {
      assert.equal(
        component.getFirstProperty("rrule"),
        null,
        `${prefix} should not repeat`
      );
    }

    const event = new ICAL.Event(component);
    assert.ok(event.startDate, `${prefix} should have a valid start date`);
    assert.ok(event.endDate, `${prefix} should have a valid end date`);
    assert.ok(
      event.endDate.compare(event.startDate) >= 0,
      `${prefix} should not end before it starts`
    );
  }

  console.log(`Validated ${name} feed (${components.length} events)`);
};

try {
  await waitForServer();
  for (const feed of feeds) await validateFeed(feed);
} catch (error) {
  if (serverOutput) console.error(serverOutput);
  throw error;
} finally {
  if (server.exitCode === null) {
    server.kill("SIGTERM");
    await Promise.race([
      once(server, "exit"),
      new Promise((resolve) => setTimeout(resolve, 2_000)),
    ]);
    if (server.exitCode === null) server.kill("SIGKILL");
  }
}
