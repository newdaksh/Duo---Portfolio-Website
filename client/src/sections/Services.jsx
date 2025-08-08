import React from 'react';
import { FiGlobe, FiDatabase, FiShoppingCart, FiBarChart2, FiMessageSquare, FiRepeat } from 'react-icons/fi';

const services = [
  { icon: <FiGlobe />, title: 'Full‑stack Web Apps', desc: 'MERN apps with auth, payments, dashboards, and integrations.' },
  { icon: <FiDatabase />, title: 'API Design', desc: 'REST/GraphQL APIs with validation, auth, and rate limiting.' },
  { icon: <FiShoppingCart />, title: 'E‑commerce', desc: 'Stores, carts, checkout, and admin panels with analytics.' },
  { icon: <FiBarChart2 />, title: 'Dashboards', desc: 'Data viz, KPIs, and custom admin tools that scale.' },
  { icon: <FiMessageSquare />, title: 'Real‑time Chat', desc: 'WebSockets/Socket.IO messaging, notifications, presence.' },
  { icon: <FiRepeat />, title: 'Maintenance & Support', desc: 'Bug fixes, upgrades, migrations, and performance.' },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-xl">
        <h2 className="text-2xl sm:text-3xl font-bold">Services</h2>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
          Clear, outcome-driven deliverables. We embed best practices for security and performance in every build.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-lg transition relative overflow-hidden">
              <div className="text-brand-600 text-2xl">{s.icon}</div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm opacity-90">{s.desc}</p>
              <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-brand-100/60 dark:bg-brand-700/20 blur-2xl group-hover:bottom-0 group-hover:right-0 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
