"use client";

import { useI18n } from "@/lib/I18nContext";
import AnimatedSection from "./AnimatedSection";
import {
  Code,
  Server,
  Database,
  GitBranch,
  Terminal,
  Globe,
  Layers,
  Cpu,
} from "lucide-react";

const skillCategories = [
  {
    key: "frontend",
    icon: Code,
    skills: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML / CSS",
      "Redux / Zustand",
    ],
  },
  {
    key: "backend",
    icon: Server,
    skills: [
      "Node.js / Express",
      "Python / Django",
      "REST / GraphQL",
      "WebSockets",
    ],
  },
  {
    key: "database",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma / TypeORM",
    ],
  },
  {
    key: "tools",
    icon: Terminal,
    skills: [
      "Git / GitHub",
      "Docker",
      "CI/CD",
      "AWS / Vercel",
      "Linux",
    ],
  },
];

export default function Skills() {
  const { t, dir } = useI18n();

  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <AnimatedSection>
        <span className="section-label">{t("skills.subtitle")}</span>
        <h2 className="section-title">{t("skills.title")}</h2>
      </AnimatedSection>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, i) => (
          <AnimatedSection key={cat.key} delay={0.1 * i}>
            <div className="glass rounded-2xl p-6 h-full glow-card">
              <div
                className={`flex items-center gap-3 mb-5 ${
                  dir === "rtl" ? "flex-row-reverse" : ""
                }`}
              >
                <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <cat.icon size={20} />
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                  {t(`skills.categories.${cat.key}`)}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className={`flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 ${
                      dir === "rtl" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 dark:bg-primary-500 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
