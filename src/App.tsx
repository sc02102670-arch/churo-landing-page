
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { PROGRAMS, REFERENCES } from './constants';
import { ProgramItem } from './types';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Custom Cursor Logic
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

  // Reveal on Scroll Logic
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
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

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery('');
  };

  const filteredPrograms = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return PROGRAMS.filter(prog => 
      prog.title.toLowerCase().includes(query) || 
      prog.category.toLowerCase().includes(query) ||
      prog.tags?.some(tag => tag.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const handleSearchResultClick = (program: ProgramItem) => {
    setSelectedProgram(program);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="relative selection:bg-brand-green selection:text-white">
      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor hidden md:block" id="cursor"></div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-brand-green/95 z-[100] flex flex-col items-center pt-20 animate-in fade-in duration-300">
          <div className="w-full max-w-4xl px-4 relative">
            <button 
              onClick={toggleSearch}
              className="absolute -top-16 right-4 text-white text-4xl hover:rotate-90 transition-transform"
            >
              ✕
            </button>
            
            <div className="mb-8 text-center">
              <p className="text-white text-xl md:text-2xl font-black mb-4 animate-bounce">
                추로LAB의 교육 프로그램을 검색해 주세요
              </p>
              <input 
                autoFocus
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="예: 소통, 리더십, CS" 
                className="w-full bg-transparent border-b-8 border-white text-white text-4xl md:text-6xl font-black placeholder-white/30 focus:outline-none py-4 uppercase"
              />
            </div>

            {/* Search Results */}
            <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-2 custom-scrollbar">
              {searchQuery && filteredPrograms.length > 0 ? (
                filteredPrograms.map((prog) => (
                  <div 
                    key={prog.id}
                    onClick={() => handleSearchResultClick(prog)}
                    className="bg-white border-4 border-black p-6 cursor-pointer hover:bg-black hover:text-white transition-all shadow-brutal hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1 flex justify-between items-center group"
                  >
                    <div>
                      <span className="inline-block bg-brand-green text-white px-2 py-0.5 text-xs font-black mb-1 group-hover:bg-white group-hover:text-black">
                        {prog.category}
                      </span>
                      <h4 className="text-2xl font-black">{prog.title}</h4>
                    </div>
                    <span className="text-3xl font-black">→</span>
                  </div>
                ))
              ) : searchQuery ? (
                <div className="text-white text-2xl font-black text-center py-10 opacity-60">
                  검색 결과가 없습니다.
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}

      <Header onSearchClick={toggleSearch} />
      
      <main>
        <Hero />
        <About />
        <section id="program" className="bg-raw-gray py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center reveal-on-scroll">
                    <h2 className="text-5xl md:text-8xl font-black mb-4 uppercase tracking-tighter">PROGRAMS</h2>
                    <div className="w-24 h-2 bg-black mx-auto mb-6"></div>
                    <p className="text-xl md:text-2xl font-bold">조직의 성장을 위한 추로LAB의 핵심 교육 솔루션</p>
                </div>
                <ProgramGrid programs={PROGRAMS} />
            </div>
        </section>
        <ReferenceSection references={REFERENCES} />
        <Contact />
      </main>

      <Footer />

      {/* Program Detail Popup for Search Selection */}
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
