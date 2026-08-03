import React, { useState } from 'react';
import { ShieldCheck, FileText, Lock, RefreshCw } from 'lucide-react';

export default function Footer({ onOpenRefundModal }) {
  return (
    <footer className="bg-[#05080f] border-t border-indigo-500/20 text-slate-400 text-xs py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        
        {/* Brand info */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🔮</span>
            <span className="font-mono text-lg font-bold text-white">지니튜터클래스</span>
          </div>
          <p className="text-slate-400 font-light leading-relaxed max-w-sm">
            AI 활용, 캔바 디렉팅, 정리수납 기술, 수공예품 제작 등 실용 지식과 취미를 배울 수 있는 프리미엄 에듀 스페이스입니다.
          </p>
          <div className="text-[11px] text-slate-500 font-mono">
            상호: 지니튜터클래스 (jinitutorclass) | 대표: 지니 튜터 | 사업자등록 준비 중<br />
            주소: 서울특별시 강남구 테헤란로 지니튜터 스튜디오<br />
            이메일: contact@jinitutorclass.com | 통신판매업신고: 신고 예정
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-mono font-bold text-slate-200 uppercase text-xs">서비스 정책</h4>
          <ul className="space-y-2 text-slate-400">
            <li>
              <button onClick={onOpenRefundModal} className="hover:text-amber-300 transition-colors flex items-center space-x-1">
                <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
                <span>투명 환불 정책 안내</span>
              </button>
            </li>
            <li>
              <button onClick={onOpenRefundModal} className="hover:text-indigo-300 transition-colors flex items-center space-x-1">
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>이용약관</span>
              </button>
            </li>
            <li>
              <button onClick={onOpenRefundModal} className="hover:text-indigo-300 transition-colors flex items-center space-x-1">
                <Lock className="w-3.5 h-3.5 text-indigo-400" />
                <span>개인정보처리방침</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Refund summary footer notice */}
        <div className="md:col-span-4 p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 space-y-2">
          <h5 className="font-bold text-amber-300 flex items-center space-x-1.5 text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>안심 환불 가이드 요약</span>
          </h5>
          <p className="text-[11px] text-slate-300 leading-relaxed font-light">
            • <strong>온라인 강의:</strong> 첫 강 시청 전 100% 환불 가능<br />
            • <strong>오프라인 강의:</strong> 개강 3일 전까지 100% 환불 가능<br />
            • <strong>전자책(PDF):</strong> 다운로드 전 100% 환불 (다운로드 후 환불 불가)<br />
            • <strong>이용권:</strong> 자동 결제되지 않으며, 만료 시 안내 후 선택 연장
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-indigo-500/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono">
        <div>© 2026 지니튜터클래스 (jinitutorclass). All rights reserved.</div>
        <div className="mt-2 sm:mt-0">Designed with 3D Crystal Glassmorphism Aesthetic</div>
      </div>
    </footer>
  );
}
