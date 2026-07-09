"use client";

import { useI18n } from "@/lib/I18nContext";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const { t, dir } = useI18n();
  const projects = t("projects.items") as unknown as {
    title: string;
    description: string;
    tech: string[];
  }[];

  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <AnimatedSection>
        <span className="section-label">{t("projects.subtitle")}</span>
        <h2 className="section-title">{t("projects.title")}</h2>
      </AnimatedSection>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <AnimatedSection key={i} delay={0.1 * i}>
            <div className="glass rounded-2xl p-6 glow-card h-full flex flex-col">
              <div className="w-full h-40 rounded-xl bg-gradient-to-br from-primary-400/20 to-purple-400/20 dark:from-primary-500/10 dark:to-purple-500/10 mb-5 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-300 dark:text-primary-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 flex-1">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className={`mt-5 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center gap-3 ${
                  dir === "rtl" ? "flex-row-reverse" : ""
                }`}
              >
                <button className="flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                  <ExternalLink size={14} />
                  {t("projects.viewProject")}
                </button>
                <button className="flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
                  <Github size={14} />
                  {t("projects.viewCode")}
                </button>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
