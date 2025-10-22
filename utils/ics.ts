import { formatInTimeZone } from "date-fns-tz";

export type ParsedIcsEvent = {
  summary: string;
  description?: string;
  dtstart: string;
  dtend?: string;
  isAllDay: boolean;
  tzid?: string;
};

export const unfoldIcs = (icsText: string) => {
  const lines = icsText.split(/\r?\n/);
  const unfolded: string[] = [];
  for (const line of lines) {
    if (
      (line.startsWith(" ") || line.startsWith("\t")) &&
      unfolded.length > 0
    ) {
      unfolded[unfolded.length - 1] += line.slice(1);
    } else {
      unfolded.push(line);
    }
  }
  return unfolded.join("\n");
};

export const extractVEvents = (icsText: string) => {
  const events: string[] = [];
  const begin = "BEGIN:VEVENT";
  const end = "END:VEVENT";
  let i = 0;
  const lines = icsText.split(/\n/);
  while (i < lines.length) {
    if (lines[i].startsWith(begin)) {
      const startIdx = i;
      while (i < lines.length && !lines[i].startsWith(end)) i++;
      if (i < lines.length) {
        events.push(lines.slice(startIdx, i + 1).join("\n"));
      }
    }
    i++;
  }
  return events;
};

export const removeAccents = (str: string) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const normalizeSummary = (summary: string) =>
  removeAccents(summary).toLowerCase();

export const isReunistenEvent = (summary: string) => {
  const s = normalizeSummary(summary);
  return s.includes("reunist");
};

export const isReunistenBorrel = (summary: string): boolean => {
  const normalizedSummary = normalizeSummary(summary);
  return /reunist(.*)borrel/i.test(normalizedSummary);
};

export const cleanupReunistenSummary = (summary: string): string => {
  return isReunistenBorrel(summary)
    ? "Reünistenborrel"
    : `${summary.charAt(0).toUpperCase()}${summary.slice(1)}`.replace(
        /eunist/g,
        "eünist"
      );
};

const getProp = (lines: string[], prop: string) => {
  const line = lines.find((l) => l.startsWith(prop));
  return line;
};

export const parseVEvent = (vevent: string): ParsedIcsEvent | null => {
  const lines = vevent.split(/\n/);
  const summaryLine = getProp(lines, "SUMMARY:") || getProp(lines, "SUMMARY;");
  if (!summaryLine) return null;
  const summary = summaryLine.split(":").slice(1).join(":").trim();

  const descLine =
    getProp(lines, "DESCRIPTION:") || getProp(lines, "DESCRIPTION;");
  const description = descLine
    ? descLine.split(":").slice(1).join(":").trim()
    : undefined;

  const dtstartLine = getProp(lines, "DTSTART:") || getProp(lines, "DTSTART;");
  const dtendLine = getProp(lines, "DTEND:") || getProp(lines, "DTEND;");
  if (!dtstartLine) return null;

  const isAllDay = dtstartLine.includes("VALUE=DATE");
  let tzid: string | undefined;
  const tzMatch = dtstartLine.match(/TZID=([^:;]+)/);
  if (tzMatch) tzid = tzMatch[1];

  const dtstart = dtstartLine.split(":").pop() as string;
  const dtend = dtendLine ? (dtendLine.split(":").pop() as string) : undefined;

  return { summary, description, dtstart, dtend, isAllDay, tzid };
};

export const toAmsterdamDateTimeStrings = (
  ev: ParsedIcsEvent
): { startText: string; endText: string } | null => {
  if (ev.isAllDay) {
    const startDate = formatInTimeZone(
      ev.dtstart,
      "Europe/Amsterdam",
      "yyyy-MM-dd"
    );
    const endDate = formatInTimeZone(
      ev.dtend ?? ev.dtstart,
      "Europe/Amsterdam",
      "yyyy-MM-dd"
    );
    return {
      startText: `${startDate} 19:30`,
      endText: `${endDate} ${
        ev.dtend && ev.dtend !== ev.dtstart ? `03:00` : `23:59`
      }`,
    };
  }

  const startText = formatInTimeZone(
    ev.dtstart,
    "Europe/Amsterdam",
    "yyyy-MM-dd HH:mm"
  );
  const endText = ev.dtend
    ? formatInTimeZone(ev.dtend, "Europe/Amsterdam", "yyyy-MM-dd HH:mm")
    : "";
  return { startText, endText };
};

export const importEventsFromIcsUrl = async (icsUrl: string) => {
  const events: Array<{
    start: string;
    end: string;
    title: string;
    description: string;
  }> = [];

  try {
    const res = await fetch(icsUrl);
    if (!res.ok) {
      console.error(`Failed to fetch ICS: ${res.status} ${res.statusText}`);
      return events;
    }

    const raw = await res.text();
    const unfolded = unfoldIcs(raw);
    const vevents = extractVEvents(unfolded);

    for (const ve of vevents) {
      const parsed = parseVEvent(ve);
      if (!parsed) continue;

      const times = toAmsterdamDateTimeStrings(parsed);
      if (!times) continue;

      events.push({
        start: times.startText,
        end: times.endText,
        title: parsed.summary,
        description: parsed.description || "",
      });
    }
  } catch (err) {
    console.error("ICS import error", err);
  }

  return events;
};
