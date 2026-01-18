
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 min-h-screen flex flex-col relative overflow-hidden bg-brand-light">
      {/* Decorative Elements from Screenshot */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-8 h-8 bg-brand-green rounded-full opacity-80"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-[#8da796] rounded-full opacity-60"></div>

      <div className="flex-grow flex items-center px-4 sm:px-6 lg:px-20 relative z-10 py-20">
        <div className="max-w-4xl w-full space-y-12">
          {/* Main Title */}
          <div className="space-y-2 reveal-on-scroll">
            <h1 className="text-7xl md:text-9xl font-black leading-tight tracking-tighter text-black">
              사람과 함께,
            </h1>
            <h1 className="text-7xl md:text-9xl font-black leading-tight tracking-tighter text-brand-green">
              길을 잇다.
            </h1>
          </div>

          {/* Description Paragraphs */}
          <div className="space-y-8 reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <p className="text-2xl md:text-3xl font-bold text-black max-w-2xl leading-snug">
              추로LAB은 사람의 가능성을 발견하고<br />
              관계 속에서 함께하는 성장을 지원합니다.
            </p>

            {/* Quote with Bar */}
            <div className="flex items-stretch gap-6 py-2">
              <div className="w-2 bg-brand-green"></div>
              <div className="bg-[#eef5f1] py-4 px-6 border-r-4 border-black/5">
                <p className="text-xl md:text-2xl font-bold italic text-black">
                  "교육은 이론보다 경험, 강의보다 대화에 가까워야 한다고 믿습니다."
                </p>
              </div>
            </div>

            <p className="text-xl md:text-2xl font-medium text-black max-w-3xl leading-relaxed">
              서로의 이야기를 듣고, 함께 배우며, 관계 안에서 성장하는 과정을 통해<br className="hidden md:block" />
              사람과 조직이 스스로의 길을 찾아가도록 돕겠습니다.
            </p>

            <p className="text-2xl md:text-3xl font-black text-brand-green">
              추로LAB은 오늘도 사람과 함께,<br />
              성장의 길을 잇는 교육연구소로 나아갑니다.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 pt-4 reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <a href="#contact" className="px-10 py-5 bg-black text-white font-black text-2xl border-4 border-black shadow-brutal hover:shadow-brutal-hover transition-all duration-300 active:translate-x-1 active:translate-y-1">
              문의하기
            </a>
            <a href="#program" className="px-10 py-5 bg-white text-black font-black text-2xl border-4 border-black shadow-brutal hover:shadow-brutal-hover transition-all duration-300 active:translate-x-1 active:translate-y-1">
              과정 보기
            </a>
          </div>
        </div>
      </div>
      
      {/* Scrolling Marquee - Kept for Brutalist Character but adjusted placement */}
      <div className="w-full bg-black text-white border-t-4 border-black py-4 overflow-hidden z-20">
        <div className="animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center min-w-full">
                <span className="text-3xl font-black tracking-tighter uppercase">Communication</span>
                <span className="text-3xl font-black text-brand-green">★</span>
                <span className="text-3xl font-black tracking-tighter uppercase">Leadership</span>
                <span className="text-3xl font-black text-brand-green">★</span>
                <span className="text-3xl font-black tracking-tighter uppercase">Team Building</span>
                <span className="text-3xl font-black text-brand-green">★</span>
                <span className="text-3xl font-black tracking-tighter uppercase">Growth</span>
                <span className="text-3xl font-black text-brand-green">★</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
