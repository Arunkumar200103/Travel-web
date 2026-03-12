// import { useState } from "react";

const logos = [
  {
    id: "axon",
    label: "axon airlines",
    highlighted: false,
    svg: (
      <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="0" y="28" fontFamily="Georgia, serif" fontSize="22" fontStyle="italic" fontWeight="bold" fill="#888" letterSpacing="1">ax</text>
        <text x="34" y="28" fontFamily="Georgia, serif" fontSize="22" fontStyle="italic" fontWeight="bold" fill="#888" letterSpacing="1">on</text>
        <text x="2" y="38" fontFamily="Arial, sans-serif" fontSize="8" fill="#aaa" letterSpacing="3">airlines</text>
        {/* X cross bar */}
        <line x1="22" y1="7" x2="32" y2="28" stroke="#888" strokeWidth="2.5"/>
        <line x1="22" y1="28" x2="32" y2="7" stroke="#888" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    id: "jetstar",
    label: "Jetstar",
    highlighted: false,
    svg: (
      <svg viewBox="0 0 130 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="0" y="30" fontFamily="Arial Black, sans-serif" fontSize="24" fontWeight="900" fill="#222" letterSpacing="-1">Jetstar</text>
        {/* Star */}
        <polygon points="118,4 121,14 131,14 123,20 126,30 118,24 110,30 113,20 105,14 115,14" fill="#444" transform="scale(0.85) translate(10,0)"/>
      </svg>
    ),
  },
  {
    id: "expedia",
    label: "Expedia",
    highlighted: true,
    svg: (
      <svg viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        {/* Circle */}
        <circle cx="18" cy="20" r="17" fill="#00355F"/>
        {/* Globe lines */}
        <ellipse cx="18" cy="20" rx="10" ry="17" fill="none" stroke="#fff" strokeWidth="1.2" opacity="0.4"/>
        <line x1="1" y1="20" x2="35" y2="20" stroke="#fff" strokeWidth="1.2" opacity="0.4"/>
        {/* Arrow/plane shape */}
        <polygon points="10,14 28,20 10,26 14,20" fill="#F5A623"/>
        <text x="42" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#00355F" letterSpacing="-0.5">Expedia</text>
        <text x="140" y="14" fontFamily="Arial, sans-serif" fontSize="10" fill="#00355F">®</text>
      </svg>
    ),
  },
  {
    id: "qantas",
    label: "QANTAS",
    highlighted: false,
    svg: (
      <svg viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        {/* Kangaroo silhouette simplified */}
        <path d="M8,30 C8,30 5,25 7,18 C9,11 15,8 18,10 C20,6 24,7 23,12 C26,10 28,14 25,17 C27,17 26,21 23,20 C23,23 20,28 18,30 Z" fill="#CC0000"/>
        <text x="32" y="28" fontFamily="Arial Black, sans-serif" fontSize="19" fontWeight="900" fill="#CC0000" letterSpacing="1">QANTAS</text>
      </svg>
    ),
  },
  {
    id: "alitalia",
    label: "Alitalia",
    highlighted: false,
    svg: (
      <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        {/* Stylized A */}
        <path d="M4,30 L14,6 L16,6 L10,22 L20,22 L18,30 Z" fill="#555" opacity="0.6"/>
        <text x="22" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontStyle="italic" fill="#555" letterSpacing="0.5">litalia</text>
      </svg>
    ),
  },
];

export default function Partners() {
  return (
    <section className="w-full py-16 px-6 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 relative">
        {logos.map((logo) =>
          logo.highlighted ? (
            <div
              key={logo.id}
              className="bg-white px-10 py-6 rounded-xl relative z-10 flex items-center justify-center"
              style={{ boxShadow: "0 8px 40px 0 rgba(0,0,0,0.13)" }}
            >
              {logo.svg}
            </div>
          ) : (
            <div
              key={logo.id}
              className="flex items-center justify-center opacity-50"
            >
              {logo.svg}
            </div>
          )
        )}
      </div>
    </section>
  );
}