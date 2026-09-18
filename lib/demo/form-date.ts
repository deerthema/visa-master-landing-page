import type { Locale } from "./intake.ts";

export function formatFormDate(value: string, locale: Locale): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(0);
  date.setUTCFullYear(year, month - 1, day);
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return value;
  if (locale === "cn") return `${year}年${month}月${day}日`;
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", {day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(date);
}
