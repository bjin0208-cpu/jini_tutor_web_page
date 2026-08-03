import React from 'react';
import { X, ShieldCheck, FileText, Lock, RefreshCw } from 'lucide-react';

export default function RefundPolicyModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl glass-card rounded-3xl border border-indigo-500/40 p-6 sm:p-8 overflow-hidden shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TRANSPARENT REFUND & TERMS POLICY</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            지니튜터클래스 투명 서비스 약관 & 환불 규정
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
          
          <div className="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 space-y-2">
            <h4 className="font-bold text-amber-300 flex items-center space-x-1.5">
              <RefreshCw className="w-4 h-4" />
              <span>1. 상품별 환불 상세 가이드 (전자상거래법 준수)</span>
            </h4>
            <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1">
              <li><strong>온라인 동영상 강의:</strong> 첫 강 시청 전까지 100% 환불 가능합니다. (첫 강 시청 이후 수강률 기준 환불 적용)</li>
              <li><strong>오프라인 워크숍:</strong> 강좌 시작일 3일 전까지 100% 환불 가능하며, 이후에는 장소/재료 키트 준비로 인해 환불이 제한됩니다.</li>
              <li><strong>다운로드형 전자책(PDF):</strong> digital asset 특성상 다운로드 링크 발송 및 다운로드 완료 후에는 환불이 불가합니다.</li>
              <li><strong>1개월 이용권 멤버십:</strong> 자동 갱신되지 않으며, 사용 시작 7일 이내 동영상 미시청 시 전액 환불 가능합니다.</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 space-y-2">
            <h4 className="font-bold text-indigo-300 flex items-center space-x-1.5">
              <Lock className="w-4 h-4" />
              <span>2. 개인정보처리방침 & 결제위젯 보안</span>
            </h4>
            <p>
              지니튜터클래스는 수강생의 개인정보를 수강 및 결제 이외의 목적으로 제3자에게 제공하지 않으며, 토스페이먼츠 보안 SSL 키 교환 및 서버 승인 API(`/v1/payments/confirm`)를 통하여 안전하게 처리합니다.
            </p>
          </div>

        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs"
        >
          확인하였습니다
        </button>

      </div>
    </div>
  );
}
