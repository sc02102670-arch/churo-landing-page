import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll">
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">ABOUT US</h2>
            <p className="text-xl md:text-2xl font-bold leading-relaxed">
              추로LAB은 단순히 지식을 전달하는 것을 넘어,<br />
              현장의 문제를 함께 고민하고 해결책을 제시하는<br />
              실전형 교육 파트너입니다.
            </p>
          </div>
          <div className="bg-brand-green p-8 border-4 border-black shadow-brutal reveal-on-scroll">
            <p className="text-white text-lg md:text-xl font-bold">
              우리는 사람의 잠재력을 믿으며, 모든 조직이 가진 고유한 강점을 극대화할 수 있도록 돕습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
