import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck, Ticket, Check, Lock, Sparkles } from 'lucide-react';

export default function PaymentModal({ item, onClose, onSuccessPayment }) {
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card'); // card, transfer, easy
  const [isProcessing, setIsProcessing] = useState(false);

  if (!item) return null;

  const basePrice = item.discountPrice || item.price || 49000;
  const discountAmount = discountApplied ? 10000 : 0;
  const finalPrice = Math.max(0, basePrice - discountAmount);

  const applyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'EARLYBIRD' || couponCode.trim().toUpperCase() === 'JINI2026') {
      setDiscountApplied(true);
    } else {
      alert('유효하지 않은 쿠폰 코드입니다. (테스트 쿠폰: EARLYBIRD 또는 JINI2026)');
    }
  };

  const handlePay = () => {
    setIsProcessing(true);
    // Simulate Toss Payments Widget & server verification (/v1/payments/confirm)
    setTimeout(() => {
      setIsProcessing(false);
      onSuccessPayment({
        itemName: item.title || '지니튜터클래스 수강권',
        amount: finalPrice,
        paymentKey: `toss_pay_key_${Date.now()}`,
        method: paymentMethod,
        date: new Date().toLocaleDateString(),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()
      });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl glass-card rounded-3xl border border-indigo-500/40 p-6 sm:p-8 overflow-hidden shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono">
            <CreditCard className="w-3.5 h-3.5 text-amber-400" />
            <span>TOSS PAYMENTS 위젯 연동 주문결제</span>
          </div>
          <h3 className="text-xl font-bold text-white leading-snug pt-1">
            {item.title || '수강 결제'}
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            결제 완료 시 수강권 및 다운로드 링크가 즉시 발송됩니다.
          </p>
        </div>

        {/* Price Breakdown Box */}
        <div className="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/20 space-y-2 text-xs font-mono">
          <div className="flex justify-between text-slate-300">
            <span>수강 상품 금액</span>
            <span>{basePrice.toLocaleString()}원</span>
          </div>

          {discountApplied && (
            <div className="flex justify-between text-amber-400">
              <span>쿠폰 할인 (EARLYBIRD)</span>
              <span>-10,000원</span>
            </div>
          )}

          <div className="pt-2 border-t border-indigo-500/20 flex justify-between text-sm font-bold text-white">
            <span>최종 결제 금액</span>
            <span className="text-lg font-extrabold text-amber-300">
              {finalPrice.toLocaleString()}원
            </span>
          </div>
        </div>

        {/* Coupon Code Input */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
            <span>프로모션 / 얼리버드 쿠폰</span>
            <span className="text-[10px] text-amber-400">테스트 쿠폰: EARLYBIRD</span>
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="쿠폰 코드를 입력하세요"
              disabled={discountApplied}
              className="flex-1 bg-[#090d16] border border-indigo-500/30 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 font-mono"
            />
            <button
              onClick={applyCoupon}
              disabled={discountApplied}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 text-white rounded-xl text-xs font-semibold font-mono"
            >
              {discountApplied ? '적용완료' : '적용'}
            </button>
          </div>
        </div>

        {/* Payment Method Selector */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-slate-300">결제 수단 선택 (토스페이먼츠)</label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`p-3 rounded-xl border text-xs font-mono font-semibold flex flex-col items-center space-y-1 ${
                paymentMethod === 'card'
                  ? 'border-indigo-400 bg-indigo-600/30 text-white'
                  : 'border-indigo-500/20 bg-indigo-950/40 text-slate-400'
              }`}
            >
              <span>💳 신용/체크카드</span>
            </button>

            <button
              onClick={() => setPaymentMethod('easy')}
              className={`p-3 rounded-xl border text-xs font-mono font-semibold flex flex-col items-center space-y-1 ${
                paymentMethod === 'easy'
                  ? 'border-indigo-400 bg-indigo-600/30 text-white'
                  : 'border-indigo-500/20 bg-indigo-950/40 text-slate-400'
              }`}
            >
              <span>⚡ 토스/카카오페이</span>
            </button>

            <button
              onClick={() => setPaymentMethod('transfer')}
              className={`p-3 rounded-xl border text-xs font-mono font-semibold flex flex-col items-center space-y-1 ${
                paymentMethod === 'transfer'
                  ? 'border-indigo-400 bg-indigo-600/30 text-white'
                  : 'border-indigo-500/20 bg-indigo-950/40 text-slate-400'
              }`}
            >
              <span>🏦 실시간 계좌이체</span>
            </button>
          </div>
        </div>

        {/* Safe Verification Notice */}
        <div className="p-3 rounded-xl bg-black/40 border border-indigo-500/20 text-[11px] text-slate-400 space-y-1">
          <div className="flex items-center space-x-1 text-emerald-400 font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>서버 이중 검증 (/v1/payments/confirm) 및 보안 적용</span>
          </div>
          <p>
            전자책은 결제 후 바로 다운로드, 온라인 강의는 1강 시청 전까지 100% 환불 가능합니다. 이용권은 자동 결제되지 않습니다.
          </p>
        </div>

        {/* Submit Pay Button */}
        <button
          onClick={handlePay}
          disabled={isProcessing}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold text-sm shadow-gold-glow flex items-center justify-center space-x-2 transition-all active:scale-95 disabled:opacity-50"
        >
          {isProcessing ? (
            <span>토스페이먼츠 안전 결제 진행 중...</span>
          ) : (
            <>
              <Lock className="w-4 h-4" />
              <span>{finalPrice.toLocaleString()}원 안전 결제하기</span>
            </>
          )}
        </button>

      </div>
    </div>
  );
}
