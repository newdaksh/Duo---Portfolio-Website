import React from 'react';
const placeholder =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="100%" height="100%" fill="#e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#6b7280" font-family="sans-serif" font-size="12">Photo Placeholder</text></svg>`
  );

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-xl">
        <h2 className="text-2xl sm:text-3xl font-bold">About Us</h2>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
          We're a focused two-person team specializing in the MERN stack. We design, build, and scale full-stack products end-to-end — from concept to deployment.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <img src={placeholder} alt="Team member 1" className="h-24 w-24 rounded-full object-cover border border-slate-300 dark:border-slate-700" />
            <div>
              <h3 className="text-xl font-semibold">⟪Member One⟫</h3>
              <p className="text-sm opacity-80">MERN Developer — APIs, auth, databases, and backends.</p>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">Skills: Node.js, Express, MongoDB, REST/GraphQL, auth, payments, integrations, testing, CI/CD.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={placeholder} alt="Team member 2" className="h-24 w-24 rounded-full object-cover border border-slate-300 dark:border-slate-700" />
            <div>
              <h3 className="text-xl font-semibold">⟪Member Two⟫</h3>
              <p className="text-sm opacity-80">MERN Developer — frontends, UX, and performance.</p>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">Skills: React, Tailwind, React Router, state management, accessibility, animations, SEO.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {['MERN stack', 'API development', 'E-commerce', 'Dashboards', 'Real-time chat', 'Maintenance & Support'].map((skill) => (
            <div key={skill} className="rounded-lg border border-slate-200 dark:border-slate-800 p-4 hover:shadow-sm transition">
              <span className="text-sm">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
