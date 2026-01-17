import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-green text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-8xl font-black mb-8">CONTACT</h2>
        <p className="text-xl md:text-2xl font-bold mb-12">새로운 성장의 시작, 추로LAB이 함께하겠습니다.</p>
        <a href="mailto:contact@chulolab.com" className="inline-block bg-white text-black text-2xl font-black px-12 py-6 border-4 border-black shadow-brutal hover:shadow-none transition-all">
          SEND MESSAGE
        </a>
      </div>
    </section>
  );
};
export default Contact;
