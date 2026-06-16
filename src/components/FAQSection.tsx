import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { faqs, testimonials } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<string | null>('faq1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header slide fade up
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

      // Stagger rows
      if (contentWrapperRef.current) {
        gsap.fromTo(
          contentWrapperRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            scrollTrigger: {
              trigger: contentWrapperRef.current,
              start: 'top 80%',
            },
          }
         );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="faq"
      className="bg-[#FAF9F7] text-[#111111] py-24 md:py-36 relative overflow-hidden"
    >
      {/* Thin Gold Separator Rhythm */}
      <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 h-[1px] bg-[#D0AE72]/30" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16 md:mb-24">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#D0AE72] font-semibold">
            Confiança & Esclarecimentos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mt-3 text-[#050505] tracking-tight">
            Transparência e Suporte
          </h2>
          <div className="w-12 h-[1px] bg-[#D0AE72] mx-auto mt-4" />
        </div>

        <div ref={contentWrapperRef} className="space-y-24">
          
          {/* Subsection 1: Testimonials */}
          <div>
            <div className="text-center md:text-left mb-10">
              <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#D0AE72] font-semibold">
                Relatos de Clientes
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light mt-1 text-[#050505]">
                O que dizem os nossos constituintes
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => {
                const bgs = [
                  "bg-white border-black/[0.04]",
                  "bg-[#F5F2EC] border-[#D0AE72]/35",
                  "bg-white border-black/[0.04]"
                ];
                const cardBg = bgs[idx % bgs.length];

                return (
                  <div
                    key={t.id}
                    className={`relative flex flex-col justify-between ${cardBg} border p-8 select-none hover:border-[#D0AE72]/50 transition-all duration-500 group shadow-[0_4px_16px_rgba(5,5,5,0.01)]`}
                  >
                    {/* Massive Gold Editorial Quotation Mark */}
                    <span className="absolute -top-4 left-6 font-serif text-[100px] leading-none text-[#D0AE72]/15 group-hover:text-[#D0AE72]/25 transition-colors pointer-events-none select-none">
                      “
                    </span>

                    <div className="relative z-10 pt-4">
                      <p className="font-serif text-[14px] leading-relaxed italic text-[#111111]/85 font-light">
                        {t.quote}
                      </p>
                    </div>

                    <div className="relative z-10 pt-6 mt-6 border-t border-black/[0.04] flex flex-col gap-1">
                      <span className="font-sans text-xs font-bold uppercase tracking-wider text-black">
                        {t.clientName}
                      </span>
                      <span className="font-sans text-[9px] uppercase tracking-widest text-[#D0AE72] font-semibold">
                        {t.city}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Subsection 2: FAQ Accordions */}
          <div>
            <div className="text-center md:text-left mb-10">
              <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#D0AE72] font-semibold">
                Perguntas Frequentes
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light mt-1 text-[#050505]">
                Dúvidas recorrentes respondidas com clareza
              </h3>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white border border-black/[0.04] p-1.5 hover:border-[#D0AE72]/45 transition-colors duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full py-5 px-6 flex justify-between items-center text-left gap-4 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-[14px] sm:text-[15px] font-medium text-[#050505] hover:text-[#D0AE72]/90 transition-colors tracking-wide">
                        {faq.question}
                      </span>

                      <span className="relative flex items-center justify-center w-6 h-6 shrink-0 text-[#D0AE72]">
                        <span
                          className={`absolute w-3.5 h-[1.5px] bg-current transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                        <span
                          className={`absolute w-[1.5px] h-3.5 bg-current transition-transform duration-300 ${
                            isOpen ? 'rotate-90 opacity-0' : ''
                          }`}
                        />
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-[13px] font-light text-[#111111]/70 leading-relaxed tracking-wide border-t border-black/[0.02]">
                           {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
