import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
      <div className="container-xl flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-brand-600 text-white">DU</span>
          <span>Duo MERN</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium hover:text-brand-600">
              {item.label}
            </a>
          ))}
          <button aria-label="Toggle theme" className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <a href="#contact" className="inline-flex items-center rounded-md bg-brand-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-brand-700">Hire Us</a>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button aria-label="Toggle theme" className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button className="theme-toggle" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
          <div className="container-xl py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-base font-medium" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex w-fit items-center rounded-md bg-brand-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-brand-700" onClick={() => setOpen(false)}>Hire Us</a>
          </div>
        </div>
      )}
    </header>
  );
}
