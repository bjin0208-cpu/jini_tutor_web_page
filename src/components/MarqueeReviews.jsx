import React from 'react';
import { Star, MessageSquareQuote, CheckCircle } from 'lucide-react';
import { reviewsData } from '../data/courses';

export default function MarqueeReviews() {
  // Duplicate array for seamless infinite marquee effect
  const marqueeItems = [...reviewsData, ...reviewsData];

  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-[#090d16]/95 border-t border-indigo-500/20">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-4">
          <MessageSquareQuote className="w-4 h-4 text-amber-400" />
          <span>REAL STUDENT OUTCOMES & REVIEWS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          수강생들의 <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-indigo-300 to-purple-300">생생한 후기와 실전 결과물</span>
        </h2>
        <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-light">
          직접 배우고 실무에 바로 적용한 사람들의 진짜 목소리를 확인하세요.
        </p>
      </div>

      {/* Infinite Marquee Track */}
      <div className="flex w-full overflow-hidden select-none mask-gradient">
        <div className="flex animate-marquee space-x-6">
          {marqueeItems.map((rev, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[380px] shrink-0 glass-card p-6 rounded-3xl border border-indigo-500/30 flex flex-col justify-between space-y-4 hover:border-amber-500/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">{rev.date}</span>
                </div>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-light italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-indigo-500/15 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center space-x-1">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono line-clamp-1">{rev.course}</div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[10px] font-mono">
                  {rev.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
