export function dateLocaleStringMonthYear(date: Date) {
  return date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
}
export function dateLocaleStringDayMonthYear(date: Date) {
  return date.toLocaleString("default", {
    day: 'numeric',
    month: "long",
    year: "numeric",
  });
}