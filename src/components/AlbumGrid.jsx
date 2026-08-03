import React, { useState } from 'react';
import { Star, Play, ShoppingCart, Sparkles, CheckCircle2, Ticket } from 'lucide-react';
import { categories, coursesData } from '../data/courses';

export default function AlbumGrid({ selectedCategory, onSelectCategory, onOpenSample, onOpenPayment }) {
  const filteredCourses = selectedCategory === 'all'
    ? coursesData
    : coursesData.filter(c => c.category === selectedCategory);

  return (
    <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 relative max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>NAVER BLOG ALBUM GRID STYLE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          직관적인 <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-amber-300">카테고리 앨범형 클래스</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto font-light">
          복잡한 절차 없이 필요한 강의를 한눈에 둘러보고, 무료 맛보기로 퀄리티를 미리 확인하세요.
        </p>
      </div>

      {/* Category Filter Pills (Album categories) */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-5 py-2.5 rounded-2xl font-mono text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center space-x-2 border ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white border-white/40 shadow-glass-glow scale-105'
                : 'bg-[#13192b]/60 text-slate-300 border-indigo-500/20 hover:border-indigo-500/50 hover:text-white'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Naver Blog Album Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-indigo-500/25 group relative"
          >
            {/* Card Header & Thumbnail */}
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13192b] via-transparent to-transparent opacity-80" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-950/80 backdrop-blur-md border border-indigo-500/40 text-[11px] font-mono font-bold text-indigo-300">
                    {course.categoryName}
                  </span>
                  {course.passAvailable && (
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/90 text-slate-950 text-[10px] font-bold font-mono flex items-center space-x-1 shadow-md">
                      <Ticket className="w-3 h-3 inline" />
                      <span>1개월 이용권 수강 가능</span>
                    </span>
                  )}
                </div>

                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-mono text-slate-200 border border-white/10">
                  {course.typeName}
                </div>

                {/* Hover Quick Action Play Button */}
                <button
                  onClick={() => onOpenSample(course)}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-indigo-600/90 hover:bg-amber-500 text-white hover:text-slate-950 flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-all duration-300"
                  title="무료 맛보기 영상 시청"
                >
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-amber-400 font-bold flex items-center">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 mr-1" />
                    {course.rating} ({course.reviewsCount})
                  </span>
                  <span>수강생 {course.studentsCount}명</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2 leading-snug">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-400 font-light line-clamp-2 leading-relaxed">
                  {course.description}
                </p>

                {/* Features Bullet */}
                <div className="pt-2 space-y-1">
                  {course.features.map((feat, i) => (
                    <div key={i} className="text-[11px] text-slate-300 flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Price & Buttons */}
            <div className="p-6 pt-0 border-t border-indigo-500/15 mt-4">
              <div className="flex items-baseline justify-between py-3">
                <span className="text-xs text-slate-400 line-through">
                  {course.price.toLocaleString()}원
                </span>
                <div className="text-right">
                  <span className="text-xs text-amber-400 font-bold mr-1.5">할인가</span>
                  <span className="text-xl font-mono font-extrabold text-white">
                    {course.discountPrice.toLocaleString()}원
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => onOpenSample(course)}
                  className="py-2.5 rounded-xl border border-amber-500/30 text-amber-300 hover:bg-amber-500/10 text-xs font-semibold flex items-center justify-center space-x-1 transition-all"
                >
                  <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>맛보기 1강</span>
                </button>

                <button
                  onClick={() => onOpenPayment(course)}
                  className="py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-xs font-bold shadow-md flex items-center justify-center space-x-1 transition-all active:scale-95"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>수강 신청</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
