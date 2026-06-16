import React from 'react';

interface OfficeLogoProps {
  className?: string;
  opacity?: number;
}

export default function OfficeLogo({ className = "w-64 h-64", opacity = 0.05 }: OfficeLogoProps) {
  return (
    <svg 
      viewBox="0 0 420 420" 
      className={className} 
      style={{ opacity, pointerEvents: 'none' }} 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer elegant borders */}
      <circle cx="210" cy="210" r="195" fill="none" stroke="#D0AE72" strokeWidth="0.5" />
      <circle cx="210" cy="210" r="160" fill="none" stroke="#D0AE72" strokeWidth="0.25" strokeDasharray="3 4" />
      
      {/* Central typography */}
      <text 
        x="210" 
        y="190" 
        textAnchor="middle" 
        fill="#D0AE72" 
        fontFamily="'Fraunces', Georgia, serif" 
        fontSize="110" 
        fontWeight="200" 
        letterSpacing="-3"
      >
        IC
      </text>
      
      {/* Subtle border text details */}
      <path id="curveTop" d="M 110,210 A 100,100 0 0,1 310,210" fill="none" />
      <text fill="#D0AE72" fontSize="8" letterSpacing="4.5" fontFamily="'DM Sans', sans-serif">
        <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
          DRA. IZABELA COSTA
        </textPath>
      </text>

      <path id="curveBottom" d="M 310,210 A 100,100 0 0,1 110,210" fill="none" />
      <text fill="#D0AE72" fontSize="7.5" letterSpacing="3.5" fontFamily="'DM Sans', sans-serif">
        <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">
          ADVOCACIA & CONSULTORIA
        </textPath>
      </text>
    </svg>
  );
}
