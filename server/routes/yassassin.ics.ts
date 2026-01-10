import { defineEventHandler } from "h3";
import { format } from "date-fns";
import { Alarm, createEvents } from "ics";
import { generateDate } from "~/utils/dates";
import {
  importEventsFromIcsUrl,
  isReunistenEvent,
  cleanupReunistenSummary,
} from "~/utils/ics";

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
  const calName = "Yassassin Ouwe Pullen";

  // Import Reunistenborrel events from the Leden agenda
  const icsUrl =
    "https://calendar.google.com/calendar/ical/bestuur%40yassassin.nl/public/basic.ics";
  const importedEvents = await importEventsFromIcsUrl(icsUrl);

  for (const event of importedEvents) {
    if (!isReunistenEvent(event.title)) continue;

    const appendText = `Dit event is automatisch geïmporteerd van de Yassassin Google Calendar die door de leden wordt gebruikt. Dit kan natuurlijk fouten bevatten.\n\nXusje.`;
    const description = event.description
      ? `${event.description}\n\n---\n\n${appendText}`
      : appendText;

    eventObjects.push({
      start: generateDate(event.start),
      end: generateDate(event.end),
      title: cleanupReunistenSummary(event.title),
      description,
    });
  }

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

  // Specific event: Yassassin Kerstdiner 2025
  eventObjects.push({
    start: generateDate("2025-12-19 19:00:00"),
    end: generateDate("2025-12-19 23:59:00"),
    title: "Yassassin Kerstdiner @ NENI",
    description:
      "Jaarlijks kerstdiner op de vrijdag voor kerst.\n\nLocatie: NENI Amsterdam\nAdres: Stadionplein 8, 1076 CM Amsterdam, Netherlands\n\nXusje.",
    location: "NENI Amsterdam, Stadionplein 8, 1076 CM Amsterdam, Netherlands",
    geo: {
      latitude: 52.34434759,
      longitude: 4.85615377,
    },
    url: "https://neni-amsterdam.nl/",
  });

  // Recurring event: Friday before Christmas every year
  eventObjects.push({
    start: generateDate("2024-12-20 18:00:00"),
    end: generateDate("2024-12-20 23:00:00"),
    title: "Yassassin Kerstdiner",
    description: "Jaarlijks kerstdiner op de vrijdag voor kerst.\n\nXusje.",
    recurrenceRule:
      "FREQ=YEARLY;BYMONTH=12;BYDAY=FR;BYMONTHDAY=18,19,20,21,22,23,24",
    exclusionDates: [generateDate("2025-12-19 18:00:00")],
  });

  // Specific event: Plusminus weekend 2026
  eventObjects.push({
    start: generateDate("2026-04-17 15:00:00"),
    end: generateDate("2026-04-19 16:00:00"),
    title: "Plusminus weekend",
    description: "Plusminus weekend in april 2026.\n\nXusje.",
  });

  // Specific event: Vrijdagmiddagborrel 2026
  eventObjects.push({
    start: generateDate("2026-03-06 17:00:00"),
    end: generateDate("2026-03-06 23:59:00"),
    title: "Vrijdagmiddagborrel",
    description: "Vrijdagmiddagborrel op 6 maart 2026.\n\nXusje.",
  });

  // Recurring event: Yassassin jubileum (19 september 1987)
  eventObjects.push({
    start: generateDate("1987-09-19", true),
    end: generateDate("1987-09-19", true),
    title: "Yassassin jubileum",
    description:
      "Jaarlijks jubileum van Yassassin, opgericht op 19 september 1987.\n\nXusje.",
    recurrenceRule: "FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=19",
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
