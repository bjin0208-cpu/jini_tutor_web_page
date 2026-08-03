import React from 'react';
import { Sparkles, ArrowRight, Play, Ticket } from 'lucide-react';

export default function CtaSection({ onScrollToCourses, onOpenPayment }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative max-w-6xl mx-auto">
      <div className="relative rounded-3xl p-10 sm:p-16 bg-gradient-to-tr from-indigo-950 via-[#13192b] to-purple-950 border-2 border-indigo-500/40 text-center shadow-glass-glow overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>START LEARNING TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            망설임은 배움을 늦출 뿐입니다<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-amber-300 to-purple-300">
              오늘 바로 지니튜터클래스와 시작하세요
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light">
            AI 툴 활용부터 캔바 디자인, 전문가 정리수납 노하우, 수공예품 브랜드 창업까지. 가장 실용적인 지식의 문이 열립니다.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onScrollToCourses}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-sm shadow-glass-glow flex items-center justify-center space-x-2 transition-all active:scale-95"
            >
              <span>강의 앨범 전체 둘러보기</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenPayment({ title: '지니튜터클래스 1개월 무제한 자유 이용권', discountPrice: 49000 })}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-amber-500/50 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-bold text-sm flex items-center justify-center space-x-2 transition-all active:scale-95"
            >
              <Ticket className="w-4 h-4 text-amber-400" />
              <span>1개월 이용권 수강하기</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
