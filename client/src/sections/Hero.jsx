import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50 via-white to-white dark:from-slate-800 dark:via-slate-900 dark:to-slate-900" />
      <div className="container-xl grid md:grid-cols-2 items-center gap-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1 text-xs mb-4">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-600" />
            Duo MERN Freelancers
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            We build modern MERN applications that grow your business
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Full-stack web apps, APIs, e-commerce, dashboards, and real-time chat experiences — delivered fast with quality.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-brand-600 text-white px-5 py-3 font-semibold shadow hover:bg-brand-700">Hire Us</a>
            <a href="#projects" className="inline-flex items-center rounded-md border px-5 py-3 font-semibold border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">View Our Work</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-brand-100 to-white dark:from-slate-800 dark:to-slate-800 border border-slate-200 dark:border-slate-800 shadow-inner flex items-center justify-center">
            <span className="text-sm opacity-70">⟪ Team Logo / Illustration Placeholder ⟫</span>
          </div>
        </div>
      </div>
    </section>
  );
}
