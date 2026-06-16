import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        animateRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative bg-no-repeat md:bg-fixed py-24 md:py-36 flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/src/assets/images/izabela_office_facade_1781594338155.jpg')",

        // ↓ diminui o zoom
        backgroundSize: '90%',

        // ↓ move a imagem
        backgroundPosition: 'center -60px',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A0907]/92 z-0 pointer-events-none" />

      {/* Linha superior */}
      <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 h-[1px] bg-[#D0AE72]/20 z-10" />

      <div
        ref={animateRef}
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#D0AE72] font-semibold mb-3">
          A Profissional
        </span>

        <h2 className="font-serif text-3xl md:text-5xl font-light text-center tracking-tight mb-16 text-white">
          Quem vai cuidar do seu caso
        </h2>

        <div className="w-full text-center mb-16 md:mb-20">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light italic leading-[1.3] text-[#FAF9F7] tracking-tight max-w-3xl mx-auto">
            “Atuação estratégica, altamente técnica
            <br className="hidden sm:inline" />
            e sob absoluto sigilo profissional.”
          </p>

          <span className="inline-block w-12 h-[1px] bg-[#D0AE72] mt-6" />
        </div>

        <div className="max-w-3xl text-center flex flex-col gap-6 text-sm sm:text-base font-light text-[#FAF9F7]/90 leading-relaxed tracking-wide mb-12">
          <p>
            Entendo que a prática jurídica de excelência exige dedicação e domínio
            técnico multidisciplinar de ponta.
          </p>

          <p>
            Dessa forma, coordeno uma atuação integrada e especializada nos pilares
            de{' '}
            <span className="font-serif text-[#D0AE72] font-medium">
              Família & Sucessões, Direito Previdenciário, Defesa Criminal,
              Civil & Contratos, e Direito do Trabalho e Consumidor
            </span>.
          </p>

          <p className="font-medium text-[#D0AE72]/95">
            Nossa marca é traduzir a complexidade legal em resultados práticos.
          </p>
        </div>

        <div className="mt-16 md:mt-24 pt-8 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#FAF9F7]/40 tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D0AE72]" />
            <span>DRA. IZABELA FERREIRA COSTA — OAB/BA 52.024</span>
          </div>

          <div>ESTRATÉGIA JURÍDICA E DEFESA PATRIMONIAL</div>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="absolute bottom-0 left-6 right-6 md:left-12 md:right-12 h-[1px] bg-[#D0AE72]/20 z-10" />
    </section>
  );
}