"use client";

import { useI18n } from "@/lib/I18nContext";
import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/lib/i18n";

export default function LanguageToggle() {
  const { locale } = useI18n();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    const current = locales.indexOf(locale);
    const next = locales[(current + 1) % locales.length];
    const newPath = pathname.replace(`/${locale}`, `/${next}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      aria-label="Toggle language"
    >
      <Languages size={16} />
      <span>{locale === "en" ? "EN" : "AR"}</span>
    </button>
  );
}
