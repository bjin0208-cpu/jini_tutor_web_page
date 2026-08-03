import React from 'react';
import { ShieldCheck, Award, Users, BookOpen, CheckCircle, Sparkles } from 'lucide-react';
import { instructorInfo } from '../data/courses';

export default function InstructorSection() {
  return (
    <section id="instructor" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090d16]/90 border-t border-b border-indigo-500/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>VERIFIED INSTRUCTOR & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            "전문가 맞아?" 하는 의문,<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-indigo-300 to-purple-300">
              투명한 이력과 성과로 증명합니다
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto font-light">
            지니튜터클래스는 검증되지 않은 수식어를 쓰지 않습니다. 누적 수강생 수, 강의 횟수, 실질적인 비즈니스 성과로 실력을 객관적으로 확인해 드립니다.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Instructor Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-3xl p-8 border border-indigo-500/30 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
              
              {/* Profile Photo Mockup */}
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-3xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-amber-500 p-[3px] shadow-glass-glow">
                <div className="w-full h-full bg-[#13192b] rounded-[22px] overflow-hidden flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-6xl mb-1">🔮</span>
                  <span className="text-xs font-mono font-semibold text-indigo-300">JINI TUTOR</span>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 px-2.5 py-1 rounded-lg text-[10px] font-bold font-mono shadow-md">
                  VERIFIED ★
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">{instructorInfo.name}</h3>
                <p className="text-xs font-mono text-indigo-400 mt-1">{instructorInfo.role}</p>
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-400" />
                  <span>실용 지식 & AI 디렉팅 메인 강사</span>
                </div>
              </div>

              {/* Philosophy Quote */}
              <div className="mt-6 p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 text-slate-300 text-xs italic leading-relaxed text-center">
                {instructorInfo.philosophy}
              </div>
            </div>
          </div>

          {/* Right: Verified Credentials List & Counter Grid */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Stat Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="glass-card p-5 rounded-2xl border border-indigo-500/30 text-center">
                <Users className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                <div className="font-mono text-2xl font-bold text-amber-300">3,400+ 명</div>
                <div className="text-xs text-slate-400 mt-1">누적 수강생</div>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-indigo-500/30 text-center">
                <BookOpen className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="font-mono text-2xl font-bold text-indigo-300">120+ 회</div>
                <div className="text-xs text-slate-400 mt-1">기업/기관 출강</div>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-indigo-500/30 text-center col-span-2 sm:col-span-1">
                <Award className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                <div className="font-mono text-2xl font-bold text-emerald-400">4.98 / 5.0</div>
                <div className="text-xs text-slate-400 mt-1">평균 강의 평점</div>
              </div>
            </div>

            {/* Verified Credential Points */}
            <div className="glass-card p-6 rounded-3xl border border-indigo-500/30 space-y-4">
              <h4 className="font-mono text-sm font-bold text-indigo-300 uppercase tracking-wider flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>검증된 이력 & 공식 라이선스</span>
              </h4>

              <div className="space-y-3">
                {instructorInfo.credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-slate-200">
                    <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Assurance Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-indigo-500/10 border border-amber-500/30 flex items-center justify-between">
              <div>
                <h5 className="font-bold text-sm text-amber-300">100% 안심 수강 보장</h5>
                <p className="text-xs text-slate-300 mt-0.5">온라인 강의는 첫 강 시청 전까지 조건 없이 100% 환불해 드립니다.</p>
              </div>
              <span className="text-2xl">🛡️</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
