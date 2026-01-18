import React, { useState } from 'react';

interface HeaderProps {
  onSearchClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: '기관소개', href: '#about' },
    { label: '프로그램', href: '#program' },
    { label: '레퍼런스', href: '#reference' },
    { label: '문의처', href: '#contact' },
  ];

  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-white border-b-4 border-black top-0 left-0 transition-transform duration-300">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header Container */}
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 pt-2 pb-2 lg:pt-3 lg:pb-3">
          
          {/* Logo Area */}
          <div className="flex items-center h-full">
            <a href="#home" className="inline-block hover:opacity-95 transition-opacity">
              <img 
                src="https://i.imgur.com/HCKV804.png" 
                alt="추로LAB 로고" 
                referrerPolicy="no-referrer"
                className="h-[50px] lg:h-[70px] w-auto object-contain block"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-10 items-center h-full">
            <div className="flex space-x-10 items-center">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="text-xl font-black hover:text-brand-green transition-colors whitespace-nowrap tracking-tighter"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* Search Button styled like the screenshot */}
            <button 
              onClick={onSearchClick}
              className="relative border-4 border-black px-8 py-2 font-black text-xl bg-white hover:bg-black hover:text-white transition-all shadow-brutal hover:shadow-none active:translate-x-1 active:translate-y-1 ml-6"
            >
              검색
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-3xl text-black focus:outline-none"
                aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t-4 border-black absolute w-full left-0 shadow-2xl animate-in slide-in-from-top duration-300 overflow-y-auto max-h-[80vh]">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                onClick={handleLinkClick}
                className="block px-3 py-4 text-xl font-black border-b-2 border-gray-100 hover:bg-brand-green hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={() => { onSearchClick(); handleLinkClick(); }}
              className="mt-4 w-full text-center px-3 py-5 text-2xl font-black bg-black text-white shadow-brutal"
            >
              검색
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;