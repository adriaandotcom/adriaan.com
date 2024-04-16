import { defineEventHandler } from "h3";
import { format } from "date-fns";
import { Alarm, createEvents } from "ics";

const alarms: Alarm[] = [
  {
    action: "display",
    description: "Over 2 maanden is het Ouwe Pullen weekend",
    trigger: { weeks: 8, days: 5, before: true },
  },
  {
    action: "display",
    description: "Nog 1 maand tot het Ouwe Pullen weekend",
    trigger: { weeks: 4, days: 5, before: true },
  },
  {
    action: "display",
    description: "Nog 1 week tot het Ouwe Pullen weekend",
    trigger: { days: 5, before: true },
  },
];

export default defineEventHandler(async (event) => {
  const eventObjects = [];
  const productId = "//Yassassin//Yassassin Ouwe Pullen events//EN";

  // Specific event for this year
  eventObjects.push({
    calName: "Yassassin Ouwe Pullen events",
    productId,
    start: [2024, 8, 30, 15, 0] as [number, number, number, number, number],
    end: [2024, 9, 1, 12, 0] as [number, number, number, number, number],
    title: "Yassassin Ouwe Pullen weekend 2024",
    description:
      "Dit is het Ouwe pullen weekend wat eindelijk geplant staat. Om te voorkomen dat we elk jaar onduidelijkheid hebben over de datum, vanaf volgend jaar is het op de 4e vrijdag van mei. En het is okay, je mag een jaartje mislopen. En de verjaardag van je moeder is niet elk jaar even belangrijk.\n\nXusje.",
    alarms,
  });

  // Recurring event details
  eventObjects.push({
    calName: "Yassassin Ouwe Pullen events",
    productId,
    start: [2025, 5, 23, 15, 0] as [number, number, number, number, number],
    end: [2025, 5, 25, 12, 0] as [number, number, number, number, number],
    title: "Yassassin Ouwe Pullen weekend",
    description:
      "Dit is het Ouwe pullen weekend wat elk jaar op de 4e vrijdag van de maand mei staat gepland. Om te voorkomen dat we elk jaar onduidelijkheid hebben over de datum. En het is okay, je mag een jaartje mislopen. En de verjaardag van je moeder is niet elk jaar even belangrijk.\n\nXusje.",
    recurrenceRule: "FREQ=MONTHLY;INTERVAL=12;BYMONTH=5;BYDAY=4FR",
    alarms,
  });

  const { error, value } = createEvents(eventObjects);

  if (error) {
    console.error(error);
    throw new Error("Failed to create iCal events");
  }

  const date = format(new Date(), "yyyy-MM-dd");

  event.node.res.setHeader("Content-Type", "text/calendar");
  event.node.res.setHeader(
    "Content-Disposition",
    `attachment; filename="${date}-yassassin-ouwe-pullen.ics"`
  );

  return value;
});