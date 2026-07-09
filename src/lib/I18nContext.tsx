"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { Locale } from "./i18n";
import { t, getDir } from "./i18n";

interface I18nContextType {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: (key: string) => any;
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  dir: "ltr",
  t: (key: string) => key,
});

export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const value = useMemo(
    () => ({
      locale,
      dir: getDir(locale),
      t: (key: string) => t(locale, key),
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
