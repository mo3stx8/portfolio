"use client";

import { useI18n } from "@/lib/I18nContext";
import AnimatedSection from "./AnimatedSection";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const { t, dir } = useI18n();

  const socials = [
    { icon: Github, href: "https://github.com/mostafa-ameen", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/mostafa-ameen",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/mostafa_ameen",
      label: "Twitter",
    },
  ];

  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto">
      <AnimatedSection>
        <span className="section-label">{t("contact.subtitle")}</span>
        <h2 className="section-title">{t("contact.title")}</h2>
        <p className="section-subtitle">{t("contact.description")}</p>
      </AnimatedSection>

      <div className="mt-12 max-w-3xl mx-auto">
        <AnimatedSection delay={0.1}>
          <div className="glass rounded-2xl p-8 md:p-10">
            <div
              className={`grid sm:grid-cols-2 gap-8 ${
                dir === "rtl" ? "sm:direction-rtl" : ""
              }`}
            >
              <div className="space-y-6">
                <div
                  className={`flex items-start gap-4 ${
                    dir === "rtl" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-500">
                      {t("contact.email")}
                    </p>
                    <a
                      href="mailto:mostafa@example.com"
                      className="text-slate-800 dark:text-slate-200 font-semibold hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      mostafa@example.com
                    </a>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-4 ${
                    dir === "rtl" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-500">
                      {t("contact.location")}
                    </p>
                    <p className="text-slate-800 dark:text-slate-200 font-semibold">
                      Egypt
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-500 mb-4">
                  {t("contact.social")}
                </p>
                <div
                  className={`flex flex-wrap gap-3 ${
                    dir === "rtl" ? "flex-row-reverse" : ""
                  }`}
                >
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                    >
                      <Icon size={18} />
                      {label}
                    </a>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href="mailto:mostafa@example.com"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 dark:bg-primary-500 text-white font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300 shadow-lg shadow-primary-500/25"
                  >
                    <Mail size={18} />
                    {t("contact.emailMe")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
