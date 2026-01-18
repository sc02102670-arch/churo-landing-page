
import React, { useState } from 'react';
import { ProgramItem } from '../types';

interface ProgramDetailPopupProps {
  program: ProgramItem;
  onClose: () => void;
}

const ProgramDetailPopup: React.FC<ProgramDetailPopupProps> = ({ program, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'strengths'>('overview');

  const tabs = [
    { id: 'overview', label: '과정개요' },
    { id: 'curriculum', label: '커리큘럼' },
    { id: 'strengths', label: '특장점' },
  ] as const;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:p-12 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl max-h-full bg-white border-4 md:border-8 border-black shadow-brutal-lg flex flex-col animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="flex justify-between items-start p-6 md:p-8 bg-brand-light border-b-4 border-black">
          <div>
            <span className="inline-block bg-black text-white px-3 py-1 text-sm font-black mb-3 uppercase tracking-wider">
              {program.category}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
              {program.title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="text-4xl hover:rotate-90 transition-transform duration-300 p-2 leading-none"
          >
            ✕
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b-4 border-black bg-white overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-4 px-6 text-lg md:text-xl font-black transition-all whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'bg-brand-green text-white border-r-4 last:border-r-0 border-black' 
                  : 'bg-white text-black border-r-4 last:border-r-0 border-black hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-grow overflow-y-auto p-6 md:p-10 bg-raw-gray space-y-8">
          
          {activeTab === 'overview' && (
            <div className="space-y-10 animate-in slide-in-from-bottom-4">
              {/* Overview Text */}
              <div className="space-y-4">
                <h3 className="text-2xl font-black flex items-center gap-2">
                  <span className="w-2 h-8 bg-brand-green"></span>
                  Overview
                </h3>
                <p className="text-xl font-medium leading-relaxed text-gray-800">
                  {program.details.overview}
                </p>
              </div>

              {/* Real Reviews */}
              <div className="space-y-4">
                <h3 className="text-2xl font-black flex items-center gap-2">
                  <span className="w-2 h-8 bg-black"></span>
                  리얼 후기
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {program.details.reviews.map((review, idx) => (
                    <div key={idx} className="bg-white border-2 border-black p-6 shadow-brutal relative">
                      <span className="absolute -top-3 -left-2 text-4xl text-brand-green opacity-30">"</span>
                      <p className="italic font-bold mb-4 text-gray-700">"{review.content}"</p>
                      <p className="text-right text-sm font-black text-black">— {review.author}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Basic Details Table-like cards */}
              <div className="space-y-4">
                <h3 className="text-2xl font-black flex items-center gap-2">
                  <span className="w-2 h-8 bg-brand-green"></span>
                  기본 개요
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: '교육 대상', value: program.details.target, icon: '👥' },
                    { label: '교육 시간', value: program.details.duration, icon: '⏰' },
                    { label: '교육 방식', value: program.details.method, icon: '💡' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-brand-light border-2 border-black p-5">
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <div className="font-black text-xs uppercase text-gray-500 mb-1">{item.label}</div>
                      <div className="font-bold text-lg">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="space-y-6 animate-in slide-in-from-bottom-4">
              <h3 className="text-2xl font-black flex items-center gap-2 mb-8">
                <span className="w-2 h-8 bg-brand-green"></span>
                Curriculum Road-Map
              </h3>
              <div className="space-y-4">
                {program.details.curriculum.map((curr, idx) => (
                  <div key={idx} className="flex gap-4 md:gap-8 items-stretch">
                    <div className="flex flex-col items-center">
                      <div className="bg-black text-white w-14 h-14 md:w-20 md:h-20 flex items-center justify-center font-black text-xs md:text-sm text-center px-1 border-4 border-black">
                        {curr.step}
                      </div>
                      {idx !== program.details.curriculum.length - 1 && (
                        <div className="w-1 flex-grow bg-black"></div>
                      )}
                    </div>
                    <div className="bg-white border-4 border-black p-5 md:p-6 flex-grow mb-4 shadow-brutal">
                      <h4 className="text-xl md:text-2xl font-black mb-2 text-brand-green">{curr.title}</h4>
                      <p className="font-medium text-gray-700">{curr.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'strengths' && (
            <div className="space-y-6 animate-in slide-in-from-bottom-4">
              <h3 className="text-2xl font-black flex items-center gap-2 mb-8">
                <span className="w-2 h-8 bg-brand-green"></span>
                추로LAB만의 특장점
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {program.details.strengths.map((strength, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-6 bg-white border-4 border-black shadow-brutal">
                    <div className="bg-brand-green text-white p-2 rounded-none font-black">
                      STRENGTH 0{idx + 1}
                    </div>
                    <p className="text-xl font-bold leading-tight pt-1">
                      {strength}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-black text-white p-8 border-4 border-black">
                <p className="text-2xl font-black text-center italic">
                  "단순한 지식 전달이 아닌, <span className="text-brand-green underline">행동의 변화</span>를 이끌어냅니다."
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Action */}
        <div className="p-6 bg-white border-t-4 border-black flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="font-bold text-gray-500">* 본 프로그램은 조직의 니즈에 따라 커스터마이징 가능합니다.</p>
          <a 
            href="#contact" 
            onClick={onClose}
            className="w-full md:w-auto px-8 py-4 bg-black text-white font-black text-xl border-4 border-black shadow-brutal hover:shadow-brutal-hover transition-all active:translate-x-1 active:translate-y-1"
          >
            이 과정 문의하기
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailPopup;
