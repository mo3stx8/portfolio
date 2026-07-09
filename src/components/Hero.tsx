"use client";

import { useI18n } from "@/lib/I18nContext";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const floatingShapes = [
  { size: "w-16 h-16", color: "bg-primary-400/20", x: "10%", y: "20%", delay: 0 },
  { size: "w-24 h-24", color: "bg-purple-400/20", x: "80%", y: "15%", delay: 0.5 },
  { size: "w-12 h-12", color: "bg-cyan-400/20", x: "70%", y: "60%", delay: 1 },
  { size: "w-20 h-20", color: "bg-pink-400/20", x: "15%", y: "65%", delay: 1.5 },
  { size: "w-10 h-10", color: "bg-amber-400/20", x: "50%", y: "80%", delay: 2 },
];

export default function Hero() {
  const { t, dir } = useI18n();

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${shape.size} ${shape.color} blur-xl`}
          style={{ left: shape.x, top: shape.y }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--foreground)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--foreground)/0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium"
        >
          {t("hero.greeting")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mt-2 leading-tight"
        >
          <span className="text-gradient">{t("hero.role")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`mt-10 flex items-center justify-center gap-4 ${
            dir === "rtl" ? "flex-row-reverse" : ""
          }`}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 dark:bg-primary-500 text-white font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
          >
            <Mail size={18} />
            {t("hero.cta")}
          </a>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300">
            {t("hero.resume")}
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
}
