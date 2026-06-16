import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { primaryService, secondaryServices } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const secondaryGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );

      // Stagger all unified card items
      if (secondaryGridRef.current) {
        const cards = secondaryGridRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            scrollTrigger: {
              trigger: secondaryGridRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const allServices = [
    primaryService,
    ...secondaryServices
  ];

  return (
    <section
      ref={containerRef}
      id="servicos"
      className="bg-[#FAF9F7] text-[#111111] py-24 md:py-36 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div ref={titleRef} className="text-center md:text-left mb-16 md:mb-24">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#D0AE72] font-semibold">
            Áreas de Especialização
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mt-3 text-[#050505] tracking-tight">
            Soluções Jurídicas de Alta Performance
          </h2>
          <div className="w-12 h-[1px] bg-[#D0AE72] mt-4" />
        </div>

        {/* Unified 3-column / 2-column Grid of equivalent practice areas */}
        <div
          ref={secondaryGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allServices.map((service, idx) => {
            // Apply a beautiful editorial visual rhythm with alternating card colors
            const bgs = [
              "bg-white border-black/[0.04]",
              "bg-[#F5F2EC] border-[#D0AE72]/30",
              "bg-[#EFECE8] border-black/[0.04]",
              "bg-white border-[#D0AE72]/20",
              "bg-[#F5F2EC] border-[#D0AE72]/25",
              "bg-[#EFECE8] border-black/[0.03]"
            ];
            const cardBgClass = bgs[idx % bgs.length];
            const displayNum = (idx + 1).toString().padStart(2, '0');
            return (
              <div
                key={service.id}
                className={`${cardBgClass} border hover:border-[#D0AE72] p-8 md:p-10 transition-all duration-500 shadow-[0_6px_20px_rgba(5,5,5,0.015)] hover:shadow-[0_12px_35px_rgba(208,174,114,0.09)] group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-2xl font-light text-[#D0AE72]/85 tracking-tight">
                      {displayNum}
                    </span>
                    <span className="w-12 h-[1px] bg-[#D0AE72]/30" />
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-light text-[#050505] tracking-tight group-hover:text-[#D0AE72] transition-colors mb-5 pb-3 border-b border-black/[0.04]">
                    {service.title}
                  </h4>
                  <ul className="space-y-4 pt-1">
                    {service.details.map((item, index) => (
                      <li key={index} className="flex gap-3 items-start text-xs sm:text-[13px] font-light text-[#111111]/75 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D0AE72] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Minimal Link */}
                <div className="pt-8 mt-6 border-t border-black/[0.03]">
                  <a
                    href={`https://wa.me/5500000000000?text=Olá,%20Dra.%20Izabela.%20Gostaria%20de%20um%20atendimento%20especializado%20sobre%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-[9px] uppercase tracking-[0.25em] font-bold text-black group-hover:text-[#D0AE72] transition-colors items-center gap-1.5"
                  >
                    Consultar Especialidade
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
