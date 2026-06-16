import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OfficeLogo from './OfficeLogo';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        animateRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="relative bg-[#050505] text-[#FAF9F7] py-24 md:py-36 overflow-hidden flex flex-col justify-between"
    >
      {/* Huge subtle office monogram behind CTA content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <OfficeLogo className="w-[380px] h-[380px] md:w-[600px] md:h-[600px]" opacity={0.03} />
      </div>

      {/* Thin elegant gold line at CTA starting point */}
      <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 h-[1px] bg-[#D0AE72]/20" />

      {/* ACTION AREA */}
      <div ref={animateRef} className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-24 flex flex-col items-center">
        <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#D0AE72] font-semibold mb-6">
          Consulta & Resolução
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light leading-[1.2] tracking-tight mb-6 text-white">
          Soluções jurídicas sólidas <br />
          para resguardar o seu futuro.
        </h2>

        <div className="w-12 h-[1px] bg-[#D0AE72]/50 mb-6" />

        <p className="font-sans text-xs sm:text-sm md:text-base text-[#FAF9F7]/75 font-light leading-relaxed max-w-xl mb-12 tracking-wide">
          Inicie uma consulta técnica preliminar para avaliar com rigor as alternativas de direito e definir o rito mais estratégico e seguro aplicável à sua demanda.
        </p>

        <div>
          <a
            href="https://wa.me/5500000000000?text=Olá,%20Dra.%20Izabela.%20Gostaria%20de%20conversar%20sobre%20meu%20problema."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-[11px] uppercase tracking-[0.25em] font-bold py-4.5 px-10 bg-[#D0AE72] hover:bg-[#b08f51] text-white transition-all duration-300 shadow-2xl rounded-none scale-100 hover:scale-[1.02] transform-gpu"
          >
            Começar pelo WhatsApp
          </a>
        </div>
      </div>

      {/* FOOTER SECTION: Info, Instagram info & Credentials */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-[#FAF9F7]/65 text-xs font-light leading-relaxed tracking-wide">
          
          {/* Logo brand signature column */}
          <div className="space-y-4">
            <span className="font-serif text-base tracking-[0.15em] text-white font-light">
              Dra. Izabela Costa
            </span>
            <p className="text-[11px] text-[#FAF9F7]/50 max-w-xs leading-normal">
              Representação jurídica de alta performance, pautada no rigor técnico, absoluto sigilo e resolução de demandas de forma 100% online no Brasil.
            </p>
          </div>

          {/* Social column */}
          <div className="space-y-3">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#D0AE72] font-semibold">
              Contato & Redes
            </span>
            <div className="flex flex-col gap-2 pt-1 font-mono text-[11px]">
              <a
                href="https://instagram.com/izabelacosta.adv"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D0AE72] transition-colors flex items-center gap-2"
              >
                <span>Instagram:</span>
                <span className="underline decoration-[#D0AE72]/40">@izabelacosta.adv</span>
              </a>
              <span className="text-[#FAF9F7]/50">Atendimento Nacional Online</span>
            </div>
          </div>

          {/* Legal / Copyright column */}
          <div className="space-y-3 md:text-right">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#D0AE72] font-semibold">
              Inscrição Profissional
            </span>
            <div className="pt-1 space-y-1.5 text-[11px] text-[#FAF9F7]/50">
              <p>Dra. Izabela Ferreira Costa — OAB/BA 52.024</p>
              <p>© {new Date().getFullYear()} Izabela Costa Advocacia.</p>
              <p className="text-[9px] uppercase tracking-[0.15em] text-white/30 pt-1">
                Design Editorial Premium — Atendimento Online em Todo o Brasil
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
