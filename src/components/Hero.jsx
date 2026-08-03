import React, { useState, useEffect } from 'react';
import { Sparkles, Play, ShieldCheck, ArrowRight } from 'lucide-react';
import { categories } from '../data/courses';

export default function Hero({ onSelectCategory, onScrollToCourses, onOpenSample }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Normalize mouse coordinates between -1 and 1
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Parallax Neon Orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${mousePos.x * -35}px, ${mousePos.y * -35}px)`,
        }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${mousePos.x * 45}px, ${mousePos.y * 45}px)`,
        }}
      />
      <div 
        className="absolute top-1/2 right-10 w-64 h-64 bg-amber-500/15 rounded-full blur-[90px] pointer-events-none transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
        }}
      />

      {/* Hero Badge */}
      <div className="relative z-10 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-amber-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-8 backdrop-blur-md animate-float">
        <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
        <span>3D 크리스탈 유리아트 스타일 프리미엄 에듀 스페이스</span>
      </div>

      {/* Main Title */}
      <h1 className="relative z-10 text-4xl sm:text-6xl lg:text-7xl font-extrabold text-center tracking-tight max-w-5xl leading-tight sm:leading-none mb-6">
        <span className="block text-slate-100 drop-shadow-md">
          AI부터 정리수납까지
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-amber-300 text-glow">
          원하는 지식을 확실하게 배우는 곳
        </span>
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 text-slate-400 text-base sm:text-xl text-center max-w-2xl font-light mb-12 leading-relaxed">
        "전문가 맞아?"라는 의문 없이, 검증된 지니 튜터의 이력과 실제 수강생의 결과물로 말합니다. 원하는 카테고리를 터치해 클래스를 탐색해보세요.
      </p>

      {/* CTA Button Group */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mb-16">
        <button
          onClick={onScrollToCourses}
          className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-base shadow-glass-glow flex items-center justify-center space-x-2 transition-all active:scale-95 group"
        >
          <span>클래스 전체 둘러보기</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={onOpenSample}
          className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-semibold text-base backdrop-blur-md flex items-center justify-center space-x-2 transition-all active:scale-95"
        >
          <Play className="w-5 h-5 text-amber-400 fill-amber-400" />
          <span>무료 맛보기 1강 보기</span>
        </button>
      </div>

      {/* 3D Jelly Glass Square Category Buttons (Matching reference image specification!) */}
      <div className="relative z-10 w-full max-w-5xl">
        <div className="text-center mb-6">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest bg-indigo-950/60 px-3 py-1 rounded-md border border-indigo-800/40">
            Click 3D Glass Category Menu
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-2">
          {categories.filter(c => c.id !== 'all').map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="jelly-3d-button aspect-square p-6 flex flex-col items-center justify-between cursor-pointer group"
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * -5}deg) rotateY(${mousePos.x * 5}deg)`,
              }}
            >
              {/* Inner 3D Glass Icon Showcase */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-indigo-500/40 via-blue-400/30 to-amber-400/30 border border-white/40 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl sm:text-5xl filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                  {cat.crystalIcon}
                </span>
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400 shadow-gold-glow animate-pulse" />
              </div>

              {/* Title & Description */}
              <div className="text-center mt-3 z-10">
                <h3 className="font-mono text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-indigo-100/80 font-light line-clamp-1 mt-1">
                  {cat.description}
                </p>
              </div>

              {/* Neon Glow Footer Tag */}
              <div className="mt-2 text-[10px] font-mono text-amber-300/90 bg-black/30 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                EXPLORE 3D →
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
