import React, { useState } from 'react';
import { ReferenceItem } from '../types';

interface ReferenceSectionProps {
  references: ReferenceItem[];
}

const LogoBox: React.FC<{ refItem: ReferenceItem }> = ({ refItem }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      className="border-r-2 border-b-2 border-black p-4 md:p-8 flex flex-col items-center justify-center text-center hover:bg-brand-light transition-all duration-300 group relative overflow-hidden h-40 md:h-56"
    >
      {/* Background Text Effect on Hover */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-5 transition-opacity">
         <span className="text-4xl md:text-6xl font-black uppercase rotate-12">{refItem.category}</span>
      </div>

      <div className="h-20 md:h-28 w-full flex items-center justify-center mb-4 relative z-10">
        {!imgError ? (
          <img 
            src={refItem.logo} 
            alt={`${refItem.name} 로고`}
            referrerPolicy="no-referrer"
            className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-in-out"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="text-brand-green font-black text-2xl md:text-3xl tracking-tighter opacity-80 group-hover:scale-110 transition-transform">
             {refItem.name.split(' ').map((word, i) => (
               <div key={i}>{word}</div>
             ))}
          </div>
        )}
        
        {/* Category Badge on Hover */}
        <div className="hidden group-hover:block absolute text-[10px] font-black text-brand-green top-[-20px] md:top-[-40px] px-2 py-0.5 border border-brand-green bg-white shadow-[2px_2px_0px_0px_rgba(26,77,46,1)]">
          {refItem.category}
        </div>
      </div>
      
      <div className="text-sm md:text-base font-black tracking-tighter group-hover:text-brand-green transition-colors mt-auto">
        {refItem.name}
      </div>
    </div>
  );
};

const ReferenceSection: React.FC<ReferenceSectionProps> = ({ references }) => {
  return (
    <section id="reference" className="py-24 bg-white border-y-4 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 reveal-on-scroll">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-center italic">Trust Partners</h2>
        <div className="w-24 h-2 bg-brand-green mx-auto mt-4"></div>
        <p className="text-center mt-6 text-xl font-bold text-gray-600">추로LAB과 함께한 신뢰의 파트너십</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0 border-t-2 border-l-2 border-black reveal-on-scroll">
        {references.map((ref) => (
          <LogoBox key={ref.id} refItem={ref} />
        ))}
        
        {/* Visual Decoration Fillers */}
        <div className="hidden lg:flex border-r-2 border-b-2 border-black p-8 flex-col items-center justify-center bg-black text-white group cursor-default h-56">
            <span className="text-4xl font-black mb-2">200+</span>
            <span className="font-bold text-xs uppercase tracking-widest text-brand-green">Total Clients</span>
        </div>
        <div className="hidden lg:flex border-r-2 border-b-2 border-black p-8 flex-col items-center justify-center bg-raw-gray/30 opacity-40 italic font-black text-3xl h-56">
            CHURO
        </div>
      </div>
      
      <div className="mt-16 text-center reveal-on-scroll">
        <p className="text-sm font-black text-gray-400 uppercase tracking-[0.5em]">And many more satisfied partners</p>
      </div>
    </section>
  );
};

export default ReferenceSection;