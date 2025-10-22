import { fromZonedTime } from "date-fns-tz";

export const generateDate = (
  text: string | [number, number, number, number, number],
  isAllDay: boolean = false
) => {
  let date;
  if (text instanceof Array) {
    date = fromZonedTime(new Date(...text).toISOString(), "Europe/Amsterdam");
  } else {
    date = fromZonedTime(text, "Europe/Amsterdam");
  }

  if (isAllDay) {
    return [
      date.getFullYear(), // Year
      date.getMonth() + 1, // Month (getMonth returns 0-11, so add 1 to make it 1-12)
      date.getDate(), // Day
    ] as [number, number, number];
  }

  return [
    date.getFullYear(), // Year
    date.getMonth() + 1, // Month (getMonth returns 0-11, so add 1 to make it 1-12)
    date.getDate(), // Day
    date.getHours(), // Hour
    date.getMinutes(), // Minute
  ] as [number, number, number, number, number];
};
