import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OfficeLogo from './OfficeLogo';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const hero1Ref = useRef<HTMLDivElement>(null);
  const hero1ContentRef = useRef<HTMLDivElement>(null);
  const hero2Ref = useRef<HTMLDivElement>(null);
  const hero2PortraitRef = useRef<HTMLDivElement>(null);
  const hero2ContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create scroll animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1, // Smooth scrub
          invalidateOnRefresh: true,
        },
      });

      // Act 1: Hero 1 slowly scales down and fades out
      tl.to(hero1Ref.current, {
        scale: 0.92,
        duration: 1,
        ease: 'power1.inOut',
      }, 0);

      tl.to(hero1ContentRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.7,
        ease: 'power1.out',
      }, 0);

      // Act 2: Hero 1 background desaturates/darkens entirely to fade out
      tl.to(hero1Ref.current, {
        opacity: 0,
        duration: 1.2,
        ease: 'power1.inOut',
      }, 0.2);

      // Act 3: Hero 2 fades in and content animates
      tl.to(hero2Ref.current, {
        opacity: 1,
        duration: 1.2,
        ease: 'power1.inOut',
      }, 0.2);

      // Subtle parallax slide up for Hero 2 text
      tl.fromTo(
        hero2ContentRef.current,
        { y: 50, opacity: 0.3 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
        0.5
      );

      // Distinct subtle portrait scaling reveal
      tl.fromTo(
        hero2PortraitRef.current,
        { scale: 1.05, filter: 'grayscale(100%) brightness(0.6)' },
        { scale: 1.0, filter: 'grayscale(100%) brightness(0.9)', duration: 1.2, ease: 'power2.out' },
        0.3
      );
    }, pinContainerRef);

    return () => ctx.revert(); // clean up on unmount
  }, []);

  return (
    <div ref={pinContainerRef} className="relative h-[200vh] w-full" id="topo">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#050505]">
        {/* HERO 1 SECTION */}
        <div
          ref={hero1Ref}
          className="absolute inset-0 w-full h-full z-20 flex flex-col items-center justify-center bg-black origin-center"
        >
          {/* Background image signature */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center select-none"
            style={{ backgroundImage: `url('/assets/images/izabela_signing_docs_1781590315463.jpg')` }}
          />
          {/* Symmetrical Dark Overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Central Logo behind Content */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
            <OfficeLogo className="w-[320px] h-[320px] md:w-[500px] md:h-[500px]" opacity={0.06} />
          </div>

          {/* Hero 1 Content panel */}
          <div
            ref={hero1ContentRef}
            className="relative z-30 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center justify-center h-full pt-16"
          >
            <div className="mb-6">
              <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-[#D0AE72] font-semibold">
                Dra. Izabela Costa
              </span>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FAF9F7]/75 mt-1">
                Advocacia & Consultoria Jurídica
              </p>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-light leading-[1.12] mb-6 tracking-tight">
              Existem decisões que mudam <br className="hidden md:inline" />
              <span className="italic font-normal text-[#D0AE72]">uma vida inteira.</span>
            </h1>

            <p className="font-sans text-xs sm:text-sm md:text-lg max-w-2xl text-[#FAF9F7]/80 font-light leading-relaxed mb-12 tracking-wide">
              Por trás de cada processo existe uma história humana, uma família e um recomeço que merece ser protegido.
            </p>

            <div>
              <a
                href="https://wa.me/5500000000000?text=Olá,%20Dra.%20Izabela.%20Gostaria%20de%20tirar%20algumas%20dúvidas%20sobre%20meu%20caso."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-[11px] uppercase tracking-[0.25em] font-bold py-4 px-10 bg-[#D0AE72] hover:bg-[#BFA064] text-black transition-all duration-300 shadow-xl"
              >
                Falar pelo WhatsApp
              </a>
            </div>

            {/* Micro Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#FAF9F7]/40">Role para continuar</span>
              <div className="w-[1px] h-10 bg-[#D0AE72]/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-[#D0AE72] animate-[scrollAnimation_2.5s_infinite]" />
              </div>
            </div>
          </div>
        </div>

        {/* HERO 2 SECTION */}
        <div
          ref={hero2Ref}
          className="absolute inset-0 w-full h-full z-10 opacity-0 flex flex-col md:flex-row bg-[#050505] overflow-y-auto md:overflow-hidden"
        >
          {/* Left panel: Huge portrait occupying almost entire height */}
          <div className="relative w-full md:w-[48%] h-[35vh] min-h-[300px] md:h-full overflow-hidden bg-black flex items-center justify-center shrink-0">
            {/* LARGE office logo in background behind her */}
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
              <OfficeLogo className="w-[450px] h-[450px] md:w-[700px] md:h-[700px]" opacity={0.035} />
            </div>

            <div ref={hero2PortraitRef} className="w-full h-full z-10 flex items-center justify-center">
              <img
                src="/assets/images/izabela_portrait_1781590331691.jpg"
                alt="Portrait Dra. Izabela Costa"
                className="w-full h-full object-cover object-top filter grayscale opacity-90 transition-all duration-700 hover:opacity-100"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Seamless transitional gradient overlay between portrait and text panel */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#050505]/30 md:to-[#050505] z-20 pointer-events-none" />
          </div>

          {/* Right panel: Content in pure black */}
          <div
            ref={hero2ContentRef}
            className="w-full md:w-[52%] min-h-[65vh] md:h-full bg-[#050505] px-5 sm:px-12 md:px-16 xl:px-24 py-8 md:py-16 flex flex-col justify-center text-[#FAF9F7]"
          >
            <div className="max-w-xl">
              <span className="font-sans text-[15px] uppercase tracking-[0.3em] text-[#D0AE72] font-semibold">
                Dra. Izabela Costa
              </span>
              <div className="w-8 h-[1px] bg-[#D0AE72] mt-2 mb-4 md:mb-6" />

              <h2 className="font-serif text-xl sm:text-3xl md:text-5xl font-light italic leading-[1.2] mb-4 md:mb-6 tracking-tight text-[#FAF9F7]">
                Quando o seu direito está em jogo, <br />
                <span className="font-sans not-italic font-light text-[#D0AE72]">você merece precisão.</span>
              </h2>

              <p className="font-sans text-xs sm:text-sm md:text-base text-[#FAF9F7]/85 font-light leading-relaxed mb-6 md:mb-8 tracking-wide">
                Questões jurídicas complexas exigem mais do que respostas automáticas ou burocráticas: exigem rigor estratégico, sigilo incondicional e uma atuação voltada a proteger seus interesses de forma dinâmica, segura e plenamente resolutiva.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 md:mb-8">
                <a
                  href="https://wa.me/5500000000000?text=Olá,%20Dra.%20Izabela.%20Gostaria%20de%20falar%20sobre%20uma%20demanda%20jurídica."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-[10px] uppercase tracking-[0.2em] font-bold py-3.5 px-6 bg-[#D0AE72] hover:bg-[#BFA064] text-black transition-all duration-300 animate-pulse"
                >
                  Falar pelo WhatsApp
                </a>

                <a
                  href="#sobre"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-center text-[10px] uppercase tracking-[0.2em] font-bold py-3.5 px-6 border border-[#D0AE72]/30 hover:border-[#D0AE72] hover:text-[#D0AE72] text-white transition-all duration-300"
                >
                  Conhecer meu trabalho
                </a>
              </div>

              {/* Secondary practice areas display with beautiful editorial premium styling */}
              <div className="pt-6 md:pt-8 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D0AE72] font-semibold block mb-4">
                  Principais Especialidades do Escritório
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                  {[
                    { name: 'Família & Sucessões', desc: 'Inventários & Divórcios' },
                    { name: 'Previdenciário', desc: 'Planejamento & Benefícios' },
                    { name: 'Defesa Criminal', desc: 'Garantias & Processo Penal' },
                    { name: 'Cível & Contratos', desc: 'Ativos & Responsabilidade' },
                    { name: 'Trabalhista', desc: 'Trabalho de Alta Performance' },
                    { name: 'Consumidor', desc: 'Planos de Saúde & Contratos' }
                  ].map((val) => (
                    <a
                      href={`https://wa.me/5500000000000?text=Olá%20Dra.%20Izabela,%20gostaria%20de%20consultoria%20sobre%20${encodeURIComponent(val.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={val.name}
                      className="group/item flex flex-col p-2.5 md:p-3 border border-[#D0AE72]/15 hover:border-[#D0AE72] bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="flex items-center">
                        <span className="text-[11px] md:text-xs font-serif font-medium text-[#FAF9F7] group-hover/item:text-[#D0AE72] transition-colors leading-tight">
                          {val.name}
                        </span>
                      </div>
                      <span className="text-[8.5px] md:text-[9px] text-[#FAF9F7]/40 group-hover/item:text-[#FAF9F7]/70 transition-colors mt-0.5 leading-tight">
                        {val.desc}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Custom Keyframes definition for scroll animations */}
      <style>{`
        @keyframes scrollAnimation {
          0% { transform: translateY(-20%); opacity: 0; }
          40% { opacity: 1; }
          80% { transform: translateY(120%); opacity: 0; }
          100% { transform: translateY(120%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
