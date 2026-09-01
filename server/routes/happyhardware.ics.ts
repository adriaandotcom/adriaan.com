import { defineEventHandler } from "h3";
import { format } from "date-fns";
import { createEvents } from "ics";
import { generateDate } from "~/utils/dates";

const happyHardwareEvents = [
  { edition: 1, date: "2026-03-29", endTime: "18:00:00" },
  { edition: 2, date: "2026-04-26", endTime: "18:00:00" },
  { edition: 3, date: "2026-06-28", endTime: "17:00:00" },
  { edition: 4, date: "2026-09-20", endTime: "17:00:00" },
];

const ordinal = (number: number) => {
  const remainder = number % 100;
  if (remainder >= 11 && remainder <= 13) return `${number}th`;

  return `${number}${["th", "st", "nd", "rd"][number % 10] || "th"}`;
};

export default defineEventHandler(async (event) => {
  const productId = "-//adriaan.com//Happy Hardware Events//EN";
  const calName = "Happy Hardware";
  const location = "Jacob van Lennepstraat 78 H, 1053 HM Amsterdam";

  const eventObjects = happyHardwareEvents.map(({ edition, date, endTime }) => ({
    start: generateDate(`${date} 12:00:00`),
    end: generateDate(`${date} ${endTime}`),
    title: `Happy Hardware #${edition}`,
    uid: `happy-hardware-${edition}-2026@adriaan.com`,
    description: `Already the ${ordinal(edition)} Happy Hardware event! A few hardware nerds joining for some fun. Starts at noon!`,
    location,
    productId,
    calName,
  }));

  const { error, value } = createEvents(eventObjects);

  if (error) {
    console.error(error);
    throw new Error("Failed to create iCal events");
  }

  const date = format(new Date(), "yyyy-MM-dd");

  event.node.res.setHeader("Content-Type", "text/calendar");
  event.node.res.setHeader(
    "Content-Disposition",
    `attachment; filename="${date}-happyhardware.ics"`
  );

  return value;
});
