
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, phone, email, message } = formData;
    
    // 이메일 수신자
    const recipient = "ja-young12@hanmail.net";
    // 이메일 제목
    const subject = encodeURIComponent(`[추로LAB 문의] ${name} 님께서 보내신 교육 문의입니다.`);
    // 이메일 본문 구성 (줄바꿈 포함)
    const body = encodeURIComponent(
      `성함: ${name}\n` +
      `연락처: ${phone}\n` +
      `이메일: ${email}\n\n` +
      `[문의내용]\n${message}`
    ).replace(/%0A/g, '%0D%0A'); // 이메일 클라이언트 호환을 위한 줄바꿈 변환

    // mailto 링크 생성 및 실행
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // 알림 후 메일 클라이언트 오픈
    alert('이메일 전송을 위해 메일 앱이 실행됩니다. 내용을 확인하신 후 전송 버튼을 눌러주세요.');
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-brand-light relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-8 border-black p-8 md:p-16 shadow-brutal-lg bg-white reveal-on-scroll">
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-center uppercase tracking-tighter">Get In Touch</h2>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xl font-black mb-2 uppercase">Name 이름</label>
                <input 
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text" 
                  className="w-full bg-raw-gray border-4 border-black p-4 text-xl font-bold focus:outline-none focus:ring-4 ring-brand-green/20 transition-all placeholder-gray-400" 
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label className="block text-xl font-black mb-2 uppercase">Phone 연락처</label>
                <input 
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text" 
                  className="w-full bg-raw-gray border-4 border-black p-4 text-xl font-bold focus:outline-none focus:ring-4 ring-brand-green/20 transition-all placeholder-gray-400" 
                  placeholder="010-0000-0000"
                />
              </div>
            </div>
            <div>
              <label className="block text-xl font-black mb-2 uppercase">Email 이메일</label>
              <input 
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" 
                className="w-full bg-raw-gray border-4 border-black p-4 text-xl font-bold focus:outline-none focus:ring-4 ring-brand-green/20 transition-all placeholder-gray-400" 
                placeholder="churo@lab.com"
              />
            </div>
            <div>
              <label className="block text-xl font-black mb-2 uppercase">Message 문의내용</label>
              <textarea 
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-raw-gray border-4 border-black p-4 text-xl font-bold focus:outline-none focus:ring-4 ring-brand-green/20 transition-all h-40 placeholder-gray-400" 
                placeholder="교육 프로그램 문의를 위해 내용을 입력해주세요."
              ></textarea>
            </div>
            <button 
                type="submit" 
                className="w-full bg-black text-white text-3xl font-black py-8 border-4 border-black hover:bg-brand-green hover:border-brand-green transition-all duration-300 shadow-brutal hover:shadow-brutal-hover active:translate-x-1 active:translate-y-1"
            >
              SEND 문의하기
            </button>
          </form>

          {/* Direct Contact Info Added at the bottom of the form container */}
          <div className="mt-12 pt-10 border-t-4 border-black space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">📞</span>
              <p className="text-2xl md:text-3xl font-black text-brand-green tracking-tight">
                전화문의: 010-9836-1116
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">📧</span>
              <p className="text-2xl md:text-3xl font-black text-brand-green tracking-tight">
                E-mail: ja-young12@hanmail.net
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
