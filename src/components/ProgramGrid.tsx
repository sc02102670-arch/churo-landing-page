
import React, { useState, useEffect } from 'react';
import { ProgramItem } from '../types';
import ProgramDetailPopup from './ProgramDetailPopup';

interface ProgramGridProps {
  programs: ProgramItem[];
}

const ProgramGrid: React.FC<ProgramGridProps> = ({ programs }) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProgram) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProgram]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((program) => (
          <div 
            key={program.id}
            onClick={() => setSelectedProgram(program)}
            className="group cursor-pointer bg-white border-4 border-black p-0 shadow-brutal hover:shadow-brutal-hover transition-all duration-300 hover:-translate-y-2 reveal-on-scroll"
          >
            <div className="bg-brand-green text-white font-black text-center py-2 text-lg border-b-4 border-black">
              {program.category}
            </div>
            <div className="relative h-48 overflow-hidden border-b-4 border-black bg-gray-200">
              <img 
                src={program.image} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={program.title}
              />
              {program.tags && (
                <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
                  {program.tags.map(tag => (
                    <span key={tag} className="bg-black text-white px-1.5 py-0.5 text-[10px] font-bold border border-white">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="font-black text-xl mb-3 group-hover:text-brand-green transition-colors leading-tight min-h-[3rem] line-clamp-2">
                {program.title}
              </h3>
              <p className="text-sm font-medium text-gray-700 leading-relaxed line-clamp-2">
                {program.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-brand-green font-black uppercase text-xs group-hover:translate-x-1 transition-transform">
                Read More <span>→</span>
              </div>
            </div>
          </div>
        ))}

        {/* Special Highlights Block */}
        <div className="group bg-black text-white border-4 border-black shadow-brutal hover:shadow-brutal-hover transition-all duration-300 hover:-translate-y-2 reveal-on-scroll flex flex-col items-center justify-center p-6 text-center">
          <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Specialized Programs</h3>
          <ul className="text-left space-y-3 font-bold text-gray-300 mb-6 w-full text-sm">
            <li className="flex items-center gap-2">
              <span className="text-brand-green">✔</span> 링커십 (The Connector)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-green">✔</span> 사내강사 양성과정
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-green">✔</span> 심리적 안전감 워크숍
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-green">✔</span> 게임 기반 학습 (GBL)
            </li>
          </ul>
          <a 
            href="#contact"
            className="w-full border-2 border-white px-4 py-3 hover:bg-white hover:text-black transition-colors font-black uppercase text-lg text-center"
          >
            More Info
          </a>
        </div>
      </div>

      {/* Program Detail Popup */}
      {selectedProgram && (
        <ProgramDetailPopup 
          program={selectedProgram} 
          onClose={() => setSelectedProgram(null)} 
        />
      )}
    </>
  );
};

export default ProgramGrid;
