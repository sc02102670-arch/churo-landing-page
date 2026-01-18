import React from 'react';

const ProgramDetailPopup: React.FC<{ program: any; onClose: () => void }> = ({ program, onClose }) => {
  return (
    <div className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4">
      <div className="bg-white border-8 border-black p-8 max-w-2xl w-full relative shadow-brutal">
        <button onClick={onClose} className="absolute top-4 right-4 text-3xl font-black">✕</button>
        <span className="bg-brand-green text-white px-3 py-1 font-black uppercase">{program.category}</span>
        <h3 className="text-4xl font-black my-4">{program.title}</h3>
        <p className="text-xl font-bold mb-6">{program.description}</p>
        <button onClick={onClose} className="w-full bg-black text-white py-4 font-black text-xl">CLOSE</button>
      </div>
    </div>
  );
};
export default ProgramDetailPopup;
