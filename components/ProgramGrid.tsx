import React from 'react';
import { ProgramItem } from '../types';

interface ProgramGridProps {
  programs: ProgramItem[];
}

const ProgramGrid: React.FC<ProgramGridProps> = ({ programs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {programs.map((prog) => (
        <div key={prog.id} className="bg-white border-4 border-black p-6 shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all reveal-on-scroll">
          <span className="inline-block bg-black text-white px-3 py-1 text-sm font-black mb-4 uppercase">
            {prog.category}
          </span>
          <h3 className="text-2xl font-black mb-4">{prog.title}</h3>
          <div className="flex flex-wrap gap-2 mt-4">
            {prog.tags?.map((tag, index) => (
              <span key={index} className="text-sm font-bold opacity-60">#{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgramGrid;
