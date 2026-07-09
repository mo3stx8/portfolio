"use client";

import { useEffect } from "react";

export default function RootRedirect() {
  useEffect(() => {
    const base = window.location.pathname.replace(/\/$/, "");
    const lang = navigator.language?.startsWith("ar") ? "ar" : "en";
    window.location.replace(`${base}/${lang}/`);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
      <p className="text-slate-500 dark:text-slate-500">Redirecting...</p>
    </div>
  );
}
