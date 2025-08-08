import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Services from './sections/Services.jsx';
import Projects from './sections/Projects.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Contact from './sections/Contact.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
