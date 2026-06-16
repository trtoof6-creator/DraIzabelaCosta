import React, { useEffect, useState } from 'react';
import NavLogo from './NavLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSegment = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 border-b border-[#D0AE72]/10 ${
        isScrolled
          ? 'bg-[#050505]/95 text-white backdrop-blur-md border-b border-[#D0AE72]/25 translate-y-0 opacity-100 pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center bg-transparent">
        {/* Monogram Brand */}
        <a
          href="#"
          onClick={(e) => handleScrollToSegment('topo', e)}
          className="flex items-center gap-3 group text-white hover:opacity-90 transition-opacity"
          id="logo-brand"
        >
          <NavLogo />
        </a>

        {/* Minimal Nav Elements */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] font-semibold text-white/80">
          <a
            href="#sobre"
            onClick={(e) => handleScrollToSegment('sobre', e)}
            className="hover:text-[#D0AE72] transition-colors text-white"
          >
            A Profissional
          </a>
          <a
            href="#servicos"
            onClick={(e) => handleScrollToSegment('servicos', e)}
            className="hover:text-[#D0AE72] transition-colors text-white"
          >
            Serviços
          </a>
          <a
            href="#diagnostico"
            onClick={(e) => handleScrollToSegment('diagnostico', e)}
            className="text-[#D0AE72] hover:text-white transition-colors"
          >
            Triagem de Caso
          </a>
          <a
            href="#faq"
            onClick={(e) => handleScrollToSegment('faq', e)}
            className="hover:text-[#D0AE72] transition-colors text-white"
          >
            Dúvidas
          </a>
        </div>

        {/* WhatsApp Link directly in header */}
        <div>
          <a
            href="https://wa.me/5500000000000?text=Olá,%20Dra.%20Izabela.%20Gostaria%20de%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-[11px] uppercase tracking-[0.2em] font-bold py-2.5 px-5 bg-[#D0AE72] hover:bg-[#BFA064] text-black rounded-none shadow transition-all duration-300"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
