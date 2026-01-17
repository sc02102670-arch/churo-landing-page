import React from 'react';

interface HeaderProps {
  onSearchClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-black tracking-tighter">추로LAB</h1>
        <nav className="hidden md:flex space-x-8 font-bold">
          <a href="#about" className="hover:text-brand-green">ABOUT</a>
          <a href="#program" className="hover:text-brand-green">PROGRAM</a>
          <a href="#contact" className="hover:text-brand-green">CONTACT</a>
        </nav>
        <button 
          onClick={onSearchClick}
          className="bg-black text-white px-4 py-2 font-bold hover:bg-brand-green transition-colors"
        >
          SEARCH
        </button>
      </div>
    </header>
  );
};

export default Header;
