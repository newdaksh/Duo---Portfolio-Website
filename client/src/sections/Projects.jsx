import React from 'react';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-xl">
        <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
          Selected work. Hover cards for tech stack and links.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700" />
              <div className="p-5">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-1 text-sm opacity-90">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs rounded-full border border-slate-300 dark:border-slate-700 px-2 py-1 opacity-90">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <a className="text-sm font-semibold text-brand-600 hover:underline" href={p.live} target="_blank" rel="noreferrer">Live Demo</a>
                  <a className="text-sm font-semibold text-brand-600 hover:underline" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
