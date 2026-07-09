"use client";

import { useI18n } from "@/lib/I18nContext";
import AnimatedSection from "./AnimatedSection";
import { Code2, Sparkles, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, key: "highlight1", text: "Clean Architecture" },
  { icon: Zap, key: "highlight2", text: "High Performance" },
  { icon: Sparkles, key: "highlight3", text: "Great UX" },
];

export default function About() {
  const { t, dir } = useI18n();

  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <AnimatedSection>
        <span className="section-label">{t("about.subtitle")}</span>
        <h2 className="section-title">{t("about.title")}</h2>
      </AnimatedSection>

      <div className="mt-12 grid md:grid-cols-5 gap-8 md:gap-12 items-start">
        <AnimatedSection
          delay={0.1}
          className="md:col-span-3 space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          <p className="text-lg">{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="md:col-span-2">
          <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">
              Highlights
            </h3>
            {highlights.map(({ icon: Icon, key, text }) => (
              <div
                key={key}
                className={`flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 ${
                  dir === "rtl" ? "flex-row-reverse" : ""
                }`}
              >
                <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <Icon size={18} />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
