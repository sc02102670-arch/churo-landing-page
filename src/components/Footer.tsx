
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 border-t-8 border-brand-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-black mb-4 tracking-tighter">추로LAB</h2>
          <p className="text-xl text-gray-400 font-bold">사람과 함께, 길을 잇는 교육연구소</p>
          <div className="mt-6 flex flex-col space-y-2 text-gray-500 font-medium">
            <p>Tel: 010-9836-1116</p>
            <p>Email: ja-young12@hanmail.net</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-8 text-4xl">
            <a href="#" className="hover:text-brand-green transition-colors">📸</a>
            <a href="#" className="hover:text-brand-green transition-colors">📝</a>
            <a href="#" className="hover:text-brand-green transition-colors">📧</a>
          </div>
          <div className="text-center md:text-right text-gray-600 text-sm font-bold uppercase tracking-widest">
            <p>© 2025 CHURO LAB. All rights reserved.</p>
            <p className="mt-1">DESIGNED WITH BRUTALISM & PASSION</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
