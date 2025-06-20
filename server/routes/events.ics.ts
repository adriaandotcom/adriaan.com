import { defineEventHandler } from "h3";
import { format, addDays } from "date-fns";
import { createEvents } from "ics";
import { generateDate } from "~/utils/dates";

export default defineEventHandler(async (event) => {
  const getNextSaturday = (date: Date) => {
    return addDays(date, (6 + 7 - date.getDay()) % 7);
  };

  const startDate = new Date(2025, 0, 1); // Starting from the current year
  const birthday = new Date(startDate.getFullYear(), 5, 19); // June 19th
  const yearsToGenerate = 10;
  const eventObjects = [];

  const productId = "-//adriaan.com//Calender Events";

  for (let i = 0; i < yearsToGenerate; i++) {
    const year = startDate.getFullYear() + i;
    let eventDate = new Date(year, birthday.getMonth(), birthday.getDate());
    if (eventDate.getDay() !== 6) eventDate = getNextSaturday(eventDate);

    const isBirthday =
      eventDate.getDate() === birthday.getDate() &&
      eventDate.getMonth() === birthday.getMonth();

    const is2025 = year === startDate.getFullYear();

    const description = is2025
      ? "Dit jaar is de BBQ geannuleerd. Hopelijk tot volgend jaar!\n\nThis year's BBQ is canceled. Hopefully see you next year!"
      : (isBirthday
          ? "Vandaag, 19 juni, is mijn verjaardag."
          : "19 juni was mijn verjaardag.") +
        " Dat wil ik graag met jou vieren. Het concept is simpel:\nIk gooi de BBQ aan, koop wat spullen voor op de BBQ (vega) en er naast. Bier en sapjes zijn ook aanwezig. Wil je wat anders (zoals vlees, speciaal bier, cocktails)? Neem het dan mee!\n\nHet liefst krijg ik geen cadeautjes omdat ik niet wil dat mensen headspace moeten inleveren. En als je per se iets wil geven, omdat je het niet aan kan (en je dat extra headspace kost), geef dan een ervaring of iets wat je zelf kan nuttigen tijdens de BBQ.\n\nEen dubbele afspraak? Neem die persoon lekker mee.\n\n" +
        (isBirthday
          ? "Today, June 19th, is my birthday. "
          : "June 19th was my birthday.") +
        "I would like to celebrate this with you. The concept is simple: I will start the BBQ, buy some stuff for the BBQ (vegetarian) and some extras. Beer and juices are also available. If you want something else (like meat, special beers, cocktails), feel free to bring it!\n\nI prefer not to receive gifts because I don't want people to sacrifice their headspace. But if you really want to give something because you can't handle it (and it costs you extra headspace), then please give an experience or something that you can consume during the BBQ. Have a double booking? Feel free to bring that person along.\n\nLiefs,\nAdriaan";

    const location =
      year === 2024
        ? "Kostverlorenkade 123 H, 1053 SC, Amsterdam"
        : "Curaçaostraat 35 H, 1058 BL, Amsterdam";

    eventObjects.push({
      start: generateDate([
        eventDate.getFullYear(),
        eventDate.getMonth(),
        eventDate.getDate(),
        16,
        0,
      ]),
      end: generateDate([
        eventDate.getFullYear(),
        eventDate.getMonth(),
        eventDate.getDate(),
        23,
        59,
      ]),
      title: `Adriaan's BBQ ${year}${is2025 ? " (canceled)" : ""}`,
      uid: `adriaan-bbq-${year}`,
      description: description,
      location,
      productId,
      url: "https://www.adriaan.com",
      calName: "Adriaan's Events",
    });
  }

  // Add a recurring event for my birthday on 19 june
  eventObjects.push({
    start: [1989, 6, 19] as [number, number, number],
    end: [1989, 6, 19] as [number, number, number],
    title: "Adriaan's verjaardag",
    uid: "adriaan-birthday",
    description: "Vandaag is Adriaan jarig.",
    productId,
    recurrenceRule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=19",
  });

  const { error, value } = createEvents(eventObjects);

  if (error) {
    console.error(error);
    throw new Error("Failed to create iCal events");
  }

  const date = format(new Date(), "yyyy-MM-dd");

  // Set Content-Type to text/calendar
  event.node.res.setHeader("Content-Type", "text/calendar");
  event.node.res.setHeader(
    "Content-Disposition",
    `attachment; filename="${date}-adriaan-events.ics"`
  );

  return value;
});
