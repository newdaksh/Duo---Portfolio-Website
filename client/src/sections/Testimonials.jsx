import React from 'react';

const testimonials = [
  {
    quote: 'Duo MERN delivered our MVP in record time with exceptional quality.',
    name: '⟪Client Name⟫',
    role: 'Founder, ⟪Startup⟫',
  },
  {
    quote: 'Great communication, clean code, and smooth handoff to our team.',
    name: '⟪Client Name⟫',
    role: 'CTO, ⟪Company⟫',
  },
  {
    quote: 'Highly recommend — they understood our needs and executed flawlessly.',
    name: '⟪Client Name⟫',
    role: 'Product Manager, ⟪Org⟫',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container-xl">
        <h2 className="text-2xl sm:text-3xl font-bold">Testimonials</h2>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">What clients say about working with us.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <figure key={idx} className="rounded-xl border border-slate-200 dark:border-slate-800 p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0" />
                <blockquote className="text-sm opacity-90">“{t.quote}”</blockquote>
              </div>
              <figcaption className="mt-4 text-sm font-medium">{t.name} — <span className="opacity-80">{t.role}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
