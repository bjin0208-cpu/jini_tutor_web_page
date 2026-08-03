import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ShieldCheck } from 'lucide-react';
import { faqsData } from '../data/courses';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          자주 묻는 질문 (FAQ)
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-lg mx-auto font-light">
          수강 신청부터 환불 정책, 1개월 이용권에 관한 모든 문의 사항입니다.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqsData.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-indigo-500/25 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left flex items-center justify-between space-x-4 hover:bg-indigo-950/40 transition-colors"
              >
                <span className="font-bold text-sm sm:text-base text-slate-100 flex items-center space-x-3">
                  <span className="text-indigo-400 font-mono">Q{idx + 1}.</span>
                  <span>{faq.q}</span>
                </span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-400' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-indigo-500/10 bg-indigo-950/20">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Reassurance Footer Notice */}
      <div className="mt-8 p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-center text-xs text-slate-400 flex items-center justify-center space-x-2">
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <span>더 궁금하신 점이 있다면 언제든 1:1 상담 카카오톡 채널로 문의주세요!</span>
      </div>

    </section>
  );
}
