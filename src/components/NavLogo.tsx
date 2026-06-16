import React, { useState } from 'react';

interface NavLogoProps {
  className?: string;
}

export default function NavLogo({ className = "h-12" }: NavLogoProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* 
        This is the dedicated image placeholder for your custom brand logotype.
        Place your white-gold transparent logo PNG as "logo.png" inside "/src/assets/images/logo.png".
      */}
      {!hasError ? (
       <img
  src="/src/assets/images/logo.png"
  alt="Izabela Costa Advocacia Especializada"
 className="h-40 w-auto translate-y-1  object-contain"
  onError={() => setHasError(true)}
/>
      ) : (
        <div className="flex flex-col justify-center border-l-2 border-[#D0AE72] pl-3.5">
          <span className="font-serif text-sm tracking-[0.22em] text-[#FAF9F7] font-light leading-none mb-1.5 uppercase">
            Izabela Costa
          </span>
          <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-[#D0AE72] font-semibold leading-none">
            Advocacia Especializada
          </span>
        </div>
      )}
    </div>
  );
}
