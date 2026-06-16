/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import DiagnosticTool from './components/DiagnosticTool';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';

export default function App() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal the elegant floating button after scrolling past the Hero acts (e.g. 1.2x of viewport)
      setShowFloatingCTA(window.scrollY > window.innerHeight * 1.2);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF9F7] text-[#111111] antialiased selection:bg-[#D0AE72]/30 selection:text-black">
      {/* Editorial Floating Navigation Header */}
      <Header />

      {/* Cinematic Act 1 & 2 Pinning Hero Flow */}
      <HeroSection />

      {/* Act 3: Professional Journey Contexts */}
      <main className="relative z-35">
        {/* Services layout showcasing areas of high performance */}
        <ServicesSection />

        {/* Interactive confidential situational assessment tool (Triagem de caso) */}
        <DiagnosticTool />

        {/* About: Who manages the legal case & credentials + methodology */}
        <AboutSection />

        {/* Digital Interactive FAQ Section & Testimonials Combo */}
        <FAQSection />
      </main>

      {/* Bold Closing Act & Detailed Footer */}
      <FinalCTASection />

      {/* Sophisticated Floating WhatsApp Badge - Appears smoothly post-Hero scroll */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform-gpu ${
          showFloatingCTA ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <a
          href="https://wa.me/5500000000000?text=Olá,%20Dra.%20Izabela.%20Gostaria%20de%20conversar."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 px-5 py-3.5 bg-[#FAF9F7] hover:bg-[#050505] text-black hover:text-[#FAF9F7] border border-[#D0AE72] transition-all duration-300 shadow-xl"
        >
          {/* Subtle pulsate indicator dots */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D0AE72] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D0AE72]"></span>
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold leading-none">
            Consulta Online Instantânea
          </span>
        </a>
      </div>
    </div>
  );
}

