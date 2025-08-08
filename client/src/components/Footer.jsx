import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-16">
      <div className="container-xl py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-80">© <span id="year">{new Date().getFullYear()}</span> Duo MERN — All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-brand-600" href="https://github.com/⟪REPLACE_ME_GITHUB⟫" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub size={20} /></a>
          <a className="hover:text-brand-600" href="https://linkedin.com/in/⟪REPLACE_ME_LINKEDIN⟫" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
          <a className="hover:text-brand-600" href="mailto:⟪REPLACE_ME_EMAIL⟫" aria-label="Email"><FiMail size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
