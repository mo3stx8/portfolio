import en from "../../messages/en.json";
import ar from "../../messages/ar.json";

export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];

export const defaultLocale: Locale = "en";

const messages: Record<Locale, Record<string, any>> = { en, ar };

function getNestedValue(obj: Record<string, any>, path: string): any {
  return path.split(".").reduce((acc: any, key) => acc?.[key], obj);
}

export function t(locale: Locale, key: string): any {
  return getNestedValue(messages[locale], key);
}

export function getDir(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}
