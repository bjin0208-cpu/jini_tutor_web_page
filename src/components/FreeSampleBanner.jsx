import React from 'react';
import { Ticket, Sparkles, Play, ArrowRight, Shield } from 'lucide-react';

export default function FreeSampleBanner({ onOpenPayment, onOpenSample }) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-950 via-purple-950 to-[#090d16] border border-amber-500/40 p-8 sm:p-12 shadow-2xl">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono">
              <Ticket className="w-3.5 h-3.5 text-amber-400" />
              <span>SPECIAL MEMBERSHIP PASS</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              1개월 전 과목 무제한 수강권 멤버십<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-indigo-300">
                AI + 캔바 + 정리수납 전 강좌를 자유롭게!
              </span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base font-light max-w-2xl">
              단건 강의 수강이 부담스럽다면 1개월 자유 이용권을 선택하세요. 강제 자동결제 없이 만료 전 안내 후 직접 연장하는 안심 반복 이용권 시스템입니다.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center space-x-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>의무 자동결제 없음 (직접 연장)</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>전자책 PDF 가이드 수강 시 무료</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <button
              onClick={() => onOpenPayment({ title: '지니튜터클래스 1개월 전 과목 무제한 자유 이용권', discountPrice: 49000 })}
              className="px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold text-sm shadow-gold-glow flex items-center justify-center space-x-2 transition-all active:scale-95"
            >
              <Ticket className="w-5 h-5 fill-slate-950" />
              <span>1개월 이용권 수강하기 (49,000원)</span>
            </button>

            <button
              onClick={onOpenSample}
              className="px-6 py-3.5 rounded-2xl border border-indigo-400/40 bg-indigo-950/60 hover:bg-indigo-900/60 text-indigo-200 font-semibold text-xs flex items-center justify-center space-x-2 transition-all"
            >
              <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>무료 1강 먼저 경험하기</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
