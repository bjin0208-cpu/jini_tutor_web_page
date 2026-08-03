import React from 'react';
import { X, Play, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { instructorInfo } from '../data/courses';

export default function SampleModal({ course, onClose, onOpenPayment }) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl glass-card rounded-3xl border border-indigo-500/40 p-6 sm:p-8 overflow-hidden shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono mb-2">
            <Play className="w-3.5 h-3.5 fill-amber-400" />
            <span>무료 맛보기 1강 미리보기</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            {course.title}
          </h3>
          <p className="text-xs text-slate-400 mt-1 font-mono">
            카테고리: {course.categoryName} | 수강 형태: {course.typeName}
          </p>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-indigo-500/30 flex items-center justify-center">
          <div className="text-center p-6 space-y-3">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-600 to-amber-500 mx-auto flex items-center justify-center text-white shadow-glass-glow animate-pulse">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <h4 className="text-base font-bold text-white">무료 샘플 강의 영상 (1강: 오리엔테이션 & 핵심 프레임워크)</h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              실제 1강 맛보기 동영상이 재생됩니다. 지니 튜터의 세심하고 정직한 설명 퀄리티를 미리 경험하세요.
            </p>
          </div>
        </div>

        {/* Instructor Verification Overlay Box */}
        <div className="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center space-x-1 text-xs font-bold text-amber-300">
              <ShieldCheck className="w-4 h-4" />
              <span>검증된 강사 1:1 보장 — {instructorInfo.name}</span>
            </div>
            <p className="text-[11px] text-slate-300">
              누적 3,400+명 수강생 배출 | 온/오프라인 100% 안심 수강 보장
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenPayment(course);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs shadow-md shrink-0 transition-all active:scale-95"
          >
            본 강의 정식 수강 신청하기 →
          </button>
        </div>

      </div>
    </div>
  );
}
