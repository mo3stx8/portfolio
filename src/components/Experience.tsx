"use client";

import { useI18n } from "@/lib/I18nContext";
import AnimatedSection from "./AnimatedSection";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { t } = useI18n();
  const items = t("experience.items") as unknown as {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];

  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto">
      <AnimatedSection>
        <span className="section-label">{t("experience.subtitle")}</span>
        <h2 className="section-title">{t("experience.title")}</h2>
      </AnimatedSection>

      <div className="relative mt-12">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />

        <div className="space-y-8">
          {items.map((item, i) => (
            <AnimatedSection key={i} delay={0.1 * i}>
              <div className="relative md:pl-20">
                <div className="absolute left-6 top-1 hidden md:flex items-center justify-center w-5 h-5 rounded-full bg-white dark:bg-slate-950 border-2 border-primary-500 dark:border-primary-400">
                  <div className="w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400" />
                </div>

                <div className="glass rounded-2xl p-6 glow-card">
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">
                    <Briefcase size={14} />
                    {item.period}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-primary-500 dark:text-primary-400 mt-1">
                    {item.company}
                  </p>
                  <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
