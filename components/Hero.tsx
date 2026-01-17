import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center reveal-on-scroll">
        <h2 className="text-6xl md:text-9xl font-black leading-none mb-8">
          PEOPLE <br /> & LEARNING
        </h2>
        <p className="text-xl md:text-3xl font-bold mb-10">
          사람과 함께, 길을 잇는 교육 파트너 추로LAB
        </p>
        <div className="flex justify-center gap-4">
          <a href="#program" className="bg-brand-green text-white text-xl font-black px-8 py-4 border-4 border-black shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            VIEW PROGRAMS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
