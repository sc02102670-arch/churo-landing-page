import React from 'react';

const ReferenceSection: React.FC<{ references: any[] }> = ({ references }) => {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase">REFERENCES</h2>
        <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
          {/* 파트너사 로고나 이름이 들어가는 자리입니다 */}
          {references.map((ref, i) => (
            <span key={i} className="text-2xl font-bold">{ref.name}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ReferenceSection;
