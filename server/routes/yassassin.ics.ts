import { defineEventHandler } from "h3";
import { format } from "date-fns";
import { fromZonedTime } from "date-fns-tz";
import { Alarm, createEvents } from "ics";

const generateDate = (text: string) => {
  const date = fromZonedTime(text, "Europe/Amsterdam");
  return [
    date.getFullYear(), // Year
    date.getMonth(), // Month (getMonth returns 0-11, so add 1 to make it 1-12)
    date.getDate(), // Day
    date.getHours(), // Hour
    date.getMinutes(), // Minute
  ] as [number, number, number, number, number];
};

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
];

export default defineEventHandler(async (event) => {
  const eventObjects = [];
  const productId = "//Yassassin//Yassassin Ouwe Pullen events//EN";
  const calName = "Yassassin Ouwe Pullen events";

  // Add event "Yassassin Reünistenborrel" on 14 june 2024
  eventObjects.push({
    start: generateDate("2024-06-14 18:00:00"),
    end: generateDate("2024-06-15 03:00:00"),
    title: "Yassassin Reünistenborrel",
    description:
      "Op 14 juni 2024 is het weer tijd voor de jaarlijkse reünistenborrel van Yassassin.\n\nXusje.",
  });

  // Specific event for this year
  eventObjects.push({
    start: generateDate("2024-08-30 15:00:00"),
    end: generateDate("2024-09-01 12:00:00"),
    title: "Yassassin Ouwe Pullen weekend 2024",
    description:
      "Dit is het Ouwe pullen weekend wat eindelijk geplant staat.\n\nOm te voorkomen dat we elk jaar onduidelijkheid hebben over de datum, vanaf volgend jaar is het op de 4e vrijdag van mei.\n\nEn het is okay, je mag een jaartje mislopen. En de verjaardag van je moeder is niet elk jaar even belangrijk.\n\nXusje.",
    alarms,
  });

  // Recurring event details
  eventObjects.push({
    start: generateDate("2025-05-23 15:00:00"),
    end: generateDate("2025-05-25 12:00:00"),
    title: "Yassassin Ouwe Pullen weekend",
    description:
      "Dit is het Ouwe pullen weekend wat elk jaar op de 4e vrijdag van de maand mei staat gepland.\n\nOm te voorkomen dat we elk jaar onduidelijkheid hebben over de datum.\n\nEn het is okay, je mag een jaartje mislopen. En de verjaardag van je moeder is niet elk jaar even belangrijk.\n\nXusje.",
    recurrenceRule: "FREQ=YEARLY;BYSETPOS=4;BYDAY=FR;BYMONTH=5",
    alarms,
  });

  const { error, value } = createEvents(
    eventObjects.map((event) => {
      return {
        calName,
        productId,
        ...event,
      };
    })
  );

  if (error) {
    console.error(error);
    throw new Error("Failed to create iCal events");
  }

  const date = format(new Date(), "yyyy-MM-dd");

  event.node.res.setHeader("Content-Type", "text/calendar");
  event.node.res.setHeader(
    "Content-Disposition",
    `attachment; filename="${date}-yassassin.ics"`
  );

  return value;
});
