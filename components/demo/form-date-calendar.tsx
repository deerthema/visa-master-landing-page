"use client";

import { useId, useState } from "react";
import { local, type Locale } from "@/lib/demo/intake";
import { formatFormDate } from "@/lib/demo/form-date";

export function FormDateCalendar({ value, onChange, onSubmit, locale, error, label, disabled }: {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  locale: Locale;
  error: string;
  label: string;
  disabled: boolean;
}) {
  const id = useId();
  const c = (en: string, cn: string, es: string) => local(locale, en, cn, es);
  const now = new Date();
  const [year, setYear] = useState(Number(value.split("-")[0]) || now.getFullYear());
  const [month, setMonth] = useState(Number(value.split("-")[1]) || now.getMonth() + 1);
  const language = locale === "cn" ? "zh-CN" : locale === "es" ? "es-ES" : "en-GB";
  const minYear = Math.min(1900, year);
  const maxYear = Math.max(now.getFullYear() + 30, year);
  const offset = new Date(year, month - 1, 1).getDay();
  const days = new Date(year, month, 0).getDate();

  function moveMonth(delta: number) {
    const date = new Date(year, month - 1 + delta, 1);
    setYear(date.getFullYear());
    setMonth(date.getMonth() + 1);
  }

  return <fieldset className="form-date-calendar" disabled={disabled} aria-describedby={error ? `${id}-error` : undefined}>
    <legend className="demo-sr-only">{label}</legend>
    <div className="form-date-calendar-selects">
      <button type="button" aria-label={c("Previous month", "上个月", "Mes anterior")} onClick={() => moveMonth(-1)}>←</button>
      <select aria-label={c("Year", "年", "Año")} value={year} onChange={event => setYear(Number(event.target.value))}>
        {Array.from({ length: maxYear - minYear + 1 }, (_, index) => minYear + index).map(y => <option key={y}>{y}</option>)}
      </select>
      <select aria-label={c("Month", "月", "Mes")} value={month} onChange={event => setMonth(Number(event.target.value))}>
        {Array.from({ length: 12 }, (_, index) => <option key={index} value={index + 1}>
          {new Intl.DateTimeFormat(language, { month: "long" }).format(new Date(2024, index, 1))}
        </option>)}
      </select>
      <button type="button" aria-label={c("Next month", "下个月", "Mes siguiente")} onClick={() => moveMonth(1)}>→</button>
    </div>
    <span className="demo-sr-only" aria-live="polite">{new Intl.DateTimeFormat(language, { year: "numeric", month: "long" }).format(new Date(year, month - 1, 1))}</span>
    <div className="form-date-calendar-grid">
      {Array.from({ length: 7 }, (_, index) => <span key={`weekday-${index}`} aria-hidden="true">
        {new Intl.DateTimeFormat(language, { weekday: "narrow" }).format(new Date(2024, 0, 7 + index))}
      </span>)}
      {Array.from({ length: offset }, (_, index) => <span key={`blank-${index}`} />)}
      {Array.from({ length: days }, (_, index) => {
        const date = `${year}-${String(month).padStart(2, "0")}-${String(index + 1).padStart(2, "0")}`;
        return <button type="button" key={date} aria-label={formatFormDate(date, locale)} aria-pressed={date === value} onClick={() => onChange(date)}>{index + 1}</button>;
      })}
    </div>
    <div className="form-date-calendar-confirm">
      <span aria-live="polite">{value ? formatFormDate(value, locale) : c("Select a date", "选择日期", "Selecciona una fecha")}</span>
      <button type="button" disabled={!value} onClick={() => onSubmit(value)}>{c("Confirm", "确认", "Confirmar")} <span aria-hidden="true">→</span></button>
    </div>
    {error && <p id={`${id}-error`} role="alert" className="demo-error">{error}</p>}
  </fieldset>;
}
