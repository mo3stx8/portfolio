"use client";

import { useI18n } from "@/lib/I18nContext";
import { Heart } from "lucide-react";

export default function Footer() {
  const { t, dir } = useI18n();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          className={`flex items-center justify-between ${
            dir === "rtl" ? "flex-row-reverse" : ""
          }`}
        >
          <p className="text-sm text-slate-500 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Mostafa Ameen.{" "}
            {t("footer.copyright")}
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-600 flex items-center gap-1.5">
            {t("footer.madeWith")}
            <Heart size={14} className="text-red-400 fill-red-400" />
            Next.js + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
