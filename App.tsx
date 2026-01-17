import React, { useState, useEffect, useRef } from 'react';
import { PROGRAMS, REFERENCES } from './constants';

// 모든 컴포넌트 부품들을 불러옵니다.
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProgramGrid from './components/ProgramGrid';
import ReferenceSection from './components/ReferenceSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProgramDetailPopup from './components/ProgramDetailPopup';

const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<any | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // 마우스 커서 효과
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.left = `${e.clientX}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 스크롤 애니메이션 효과
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative selection:bg-brand-green selection:text-white">
      {/* 커스텀 커서 */}
      <div ref={cursorRef} className="custom-cursor hidden md:block" id="cursor"></div>

      {/* 상단 헤더 */}
      <Header onSearchClick={() => setIsSearchOpen(true)} />

      <main>
        {/* 메인 섹션들 */}
        <Hero />
        <About />
        
        <section id="program" className="bg-raw-gray py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16 text-center reveal-on-scroll">
              <h2 className="text-5xl md:text-8xl font-black mb-4 uppercase tracking-tighter">PROGRAMS</h2>
              <div className="w-24 h-2 bg-black mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl font-bold">조직의 성장을 위한 핵심 솔루션</p>
            </div>
            {/* 프로그램 그리드 */}
            <ProgramGrid 
              programs={PROGRAMS} 
              onProgramClick={(prog) => setSelectedProgram(prog)} 
            />
          </div>
        </section>

        <ReferenceSection references={REFERENCES} />
        <Contact />
      </main>

      <Footer />

      {/* 팝업 창 */}
      {selectedProgram && (
        <ProgramDetailPopup 
          program={selectedProgram} 
          onClose={() => setSelectedProgram(null)} 
        />
      )}
    </div>
  );
};

export default App;
