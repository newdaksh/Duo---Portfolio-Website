import React, { useState } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

export default function Contact() {
  const [status, setStatus] = useState({ type: 'idle' });

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name')?.toString().trim();
    const email = form.get('email')?.toString().trim();
    const message = form.get('message')?.toString().trim();

    if (!name || name.length < 2) return setStatus({ type: 'error', message: 'Please provide your name.' });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setStatus({ type: 'error', message: 'Please provide a valid email.' });
    if (!message || message.length < 10) return setStatus({ type: 'error', message: 'Message must be at least 10 characters.' });

    setStatus({ type: 'loading' });
    try {
      const res = await fetch(`${API_BASE}/api/email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus({ type: 'success', message: 'Thanks! We will get back to you shortly.' });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ type: 'error', message: 'Sending failed. Try again later or email us directly.' });
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-xl grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">Contact Us</h2>
          <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">
            Tell us about your project. We typically respond within 24 hours.
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <a className="text-brand-600 hover:underline" href="mailto:⟪REPLACE_ME_EMAIL⟫">⟪REPLACE_ME_EMAIL⟫</a>
            <div className="opacity-80">LinkedIn: <a className="text-brand-600 hover:underline" href="https://linkedin.com/in/⟪REPLACE_ME_LINKEDIN⟫" target="_blank" rel="noreferrer">/in/⟪REPLACE_ME_LINKEDIN⟫</a></div>
            <div className="opacity-80">GitHub: <a className="text-brand-600 hover:underline" href="https://github.com/⟪REPLACE_ME_GITHUB⟫" target="_blank" rel="noreferrer">@⟪REPLACE_ME_GITHUB⟫</a></div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
          <div className="grid gap-4">
            <label className="grid gap-1 text-sm">
              <span>Name</span>
              <input className="rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" type="text" name="name" placeholder="Your name" required minLength={2} />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Email</span>
              <input className="rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Message</span>
              <textarea className="rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 min-h-[120px]" name="message" placeholder="Tell us about your project" required minLength={10} />
            </label>
            <button disabled={status.type==='loading'} type="submit" className="inline-flex items-center justify-center rounded-md bg-brand-600 text-white px-4 py-2 font-semibold hover:bg-brand-700 disabled:opacity-60">
              {status.type==='loading' ? 'Sending…' : 'Send Message'}
            </button>
            {status.type !== 'idle' && (
              <p className={`text-sm ${status.type==='error' ? 'text-red-600' : 'text-green-600'}`}>{status.message}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
