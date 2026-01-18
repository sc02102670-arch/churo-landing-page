
import React, { useState } from 'react';
import { PROGRAMS } from '../constants';

const About: React.FC = () => {
  const [showRecommended, setShowRecommended] = useState(false);

  // 상위 5개 프로그램을 추천 리스트로 선정
  const recommendedPrograms = PROGRAMS.slice(0, 5);
  
  // 요청하신 구글 드라이브 링크
  const profileLink = "https://drive.google.com/file/d/1JWYgVBuRj0JTfFhcU2pwKfLDpHjG4SkA/view?usp=sharing";

  return (
    <section id="about" className="py-20 bg-white border-b-8 border-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Profile Image */}
          <div className="w-full md:w-2/5 relative reveal-on-scroll">
            <div className="relative border-4 border-black p-1 bg-white z-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
              <img 
                src="https://i.imgur.com/UEq1wxF.jpeg" 
                alt="추자영 대표" 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
              {/* Profile Tag */}
              <div className="absolute bottom-6 -left-6 bg-black text-white px-8 py-3 text-2xl font-black border-2 border-white shadow-brutal z-20">
                대표 추자영
              </div>
            </div>
            {/* Background Decorative Box */}
            <div className="absolute top-6 left-6 w-full h-full border-4 border-black -z-0"></div>
          </div>

          {/* Right Side: Description Content */}
          <div className="w-full md:w-3/5 space-y-8 reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-bold leading-relaxed text-gray-900">
                추로LAB은 사람의 가능성을 발견하고 관계 속에서 함께하는 성장을 지원합니다. 
                소통과 팀워크를 통해 개인의 내면에 길을 세우고, 조직이 함께 걸어갈 힘을 만듭니다.
              </p>
              
              {/* Quote Box */}
              <div className="bg-[#eef5f1] border-l-8 border-brand-green py-6 px-8 relative">
                <p className="text-2xl md:text-3xl font-black italic text-gray-800 leading-tight">
                  "교육은 이론보다 경험, 강의보다 대화에 가까워야 한다고 믿습니다."
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Features Grid - 2x2 Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {/* 1. 참여형 교육 Button */}
                <button 
                  onClick={() => setShowRecommended(true)}
                  className="group relative border-4 border-black p-8 text-center bg-white hover:bg-brand-green transition-all duration-300 shadow-brutal hover:shadow-brutal-hover active:translate-x-1 active:translate-y-1 overflow-hidden"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">👥</div>
                  <h3 className="font-black text-2xl mb-1 group-hover:text-white transition-colors">참여형 교육</h3>
                  <div className="text-[10px] font-black text-gray-400 group-hover:text-white/80 uppercase tracking-widest">
                    CLICK TO VIEW RECOMMENDATIONS
                  </div>
                  <div className="absolute inset-0 bg-brand-green translate-y-full group-hover:translate-y-0 transition-transform -z-10 duration-300"></div>
                </button>

                {/* 2. 맞춤형 솔루션 Box */}
                <div className="group relative border-4 border-black p-8 text-center bg-white hover:bg-black transition-all duration-300 shadow-brutal hover:shadow-brutal-hover">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">💡</div>
                  <h3 className="font-black text-2xl mb-1 group-hover:text-white transition-colors">맞춤형 솔루션</h3>
                  <div className="text-[10px] font-black text-gray-400 group-hover:text-white/80 uppercase tracking-widest">
                    TAILORED FOR YOUR TEAM
                  </div>
                </div>

                {/* 3. 강사 프로필 Download (Updated Link) */}
                <a 
                  href={profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative border-4 border-black p-8 text-center bg-white hover:bg-brand-green transition-all duration-300 shadow-brutal hover:shadow-brutal-hover active:translate-x-1 active:translate-y-1 overflow-hidden"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📄</div>
                  <h3 className="font-black text-2xl mb-1 group-hover:text-white transition-colors">강사 프로필</h3>
                  <div className="text-[10px] font-black text-gray-400 group-hover:text-white/80 uppercase tracking-widest">
                    VIEW PROFILE PDF
                  </div>
                  <div className="absolute inset-0 bg-brand-green translate-y-full group-hover:translate-y-0 transition-transform -z-10 duration-300"></div>
                </a>

                {/* 4. 자격 및 경력 Download (Updated Link) */}
                <a 
                  href={profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative border-4 border-black p-8 text-center bg-white hover:bg-black transition-all duration-300 shadow-brutal hover:shadow-brutal-hover active:translate-x-1 active:translate-y-1"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                  <h3 className="font-black text-2xl mb-1 group-hover:text-white transition-colors">자격 및 경력</h3>
                  <div className="text-[10px] font-black text-gray-400 group-hover:text-white/80 uppercase tracking-widest">
                    VIEW QUALIFICATIONS
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Recommended Programs Popup */}
      {showRecommended && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setShowRecommended(false)}
          />
          <div className="relative w-full max-w-2xl bg-white border-[10px] border-black shadow-brutal-lg p-8 md:p-12 animate-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center mb-10 border-b-8 border-black pb-6">
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
                추천 강의 리스트
              </h3>
              <button 
                onClick={() => setShowRecommended(false)}
                className="text-5xl font-black hover:rotate-90 transition-transform leading-none"
              >
                ✕
              </button>
            </div>
            
            <ul className="space-y-4">
              {recommendedPrograms.map((prog, idx) => (
                <li key={prog.id} className="group reveal-on-scroll" style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <a 
                    href={`#program`} 
                    onClick={() => setShowRecommended(false)}
                    className="flex items-center gap-6 p-5 border-4 border-black hover:bg-brand-green hover:text-white transition-all shadow-brutal hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1"
                  >
                    <span className="bg-black text-white group-hover:bg-white group-hover:text-brand-green text-lg font-black px-3 py-1 border-2 border-black">
                      {idx + 1}
                    </span>
                    <span className="text-xl md:text-2xl font-black">{prog.title}</span>
                    <span className="ml-auto text-3xl font-black group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <button 
                onClick={() => setShowRecommended(false)}
                className="w-full py-6 bg-black text-white font-black text-2xl border-4 border-black hover:bg-brand-green transition-colors shadow-brutal hover:shadow-none active:translate-x-1 active:translate-y-1"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
