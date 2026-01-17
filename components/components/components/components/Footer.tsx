import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <h2 className="text-3xl font-black tracking-tighter mb-2">추로LAB</h2>
          <p className="font-bold opacity-60">© 2026 CHURO LAB. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="flex space-x-6 font-bold">
          <a href="#" className="hover:text-brand-green">INSTAGRAM</a>
          <a href="#" className="hover:text-brand-green">BLOG</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
