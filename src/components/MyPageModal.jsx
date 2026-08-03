import React from 'react';
import { X, Ticket, BookOpen, Download, ShieldCheck, RefreshCw } from 'lucide-react';

export default function MyPageModal({ purchases, onClose, onRenewPass }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl glass-card rounded-3xl border border-indigo-500/40 p-6 sm:p-8 overflow-hidden shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono mb-2">
            <Ticket className="w-3.5 h-3.5 text-amber-400" />
            <span>MY PAGE & SUBSCRIBED COURSES</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            마이페이지 / 내 수강함
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            수강 중인 클래스, 1개월 이용권 남은 기간, 다운로드 전자책을 확인하세요.
          </p>
        </div>

        {/* Membership Status Box */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950 via-[#13192b] to-purple-950 border border-amber-500/30 flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-xs font-mono text-amber-300 font-bold flex items-center space-x-1">
              <Ticket className="w-4 h-4" />
              <span>1개월 무제한 이용권 활성화 상태</span>
            </div>
            <p className="text-xs text-slate-300">
              만료 예정일: <span className="font-mono text-white font-bold">2026.09.03 (D-30)</span>
            </p>
            <p className="text-[10px] text-slate-400">
              * 자동 결제되지 않는 안심 멤버십입니다.
            </p>
          </div>

          <button
            onClick={onRenewPass}
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold font-mono flex items-center space-x-1 shadow-md shrink-0"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>이용권 갱신하기</span>
          </button>
        </div>

        {/* Purchases List */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider">
            내 강의 및 구매 내역 ({purchases.length}개)
          </h4>

          {purchases.length === 0 ? (
            <div className="p-8 text-center border border-dashed border-indigo-500/30 rounded-2xl text-xs text-slate-400">
              아직 신청하신 강의가 없습니다. 추천 클래스를 둘러보세요!
            </div>
          ) : (
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {purchases.map((p, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/20 flex items-center justify-between text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="font-bold text-white">{p.itemName}</div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      결제금액: {p.amount.toLocaleString()}원 | 결제일: {p.date}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono">
                      수강중 (정상)
                    </span>
                    <button className="p-2 rounded-lg bg-indigo-600/80 hover:bg-indigo-500 text-white font-mono text-[11px]">
                      바로가기 →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
