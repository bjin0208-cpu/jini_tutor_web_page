import React, { useState } from 'react';
import { X, User, Lock, Mail, ArrowRight } from 'lucide-react';

export default function AuthModal({ onClose, onLoginSuccess }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return alert('이메일과 비밀번호를 입력해주세요.');
    onLoginSuccess({ email });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md glass-card rounded-3xl border border-indigo-500/40 p-6 sm:p-8 overflow-hidden shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-1">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-amber-500 mx-auto flex items-center justify-center text-xl shadow-glass-glow mb-3">
            🔮
          </div>
          <h3 className="text-2xl font-bold text-white">
            {isRegister ? '회원가입' : '로그인'}
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            지니튜터클래스 통합 로그인 시스템
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs text-slate-300 font-mono">이메일 주소</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@naver.com"
                className="w-full bg-[#090d16] border border-indigo-500/30 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 font-mono"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-300 font-mono">비밀번호</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#090d16] border border-indigo-500/30 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 font-mono"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs shadow-md flex items-center justify-center space-x-1"
          >
            <span>{isRegister ? '가입 완료하기' : '로그인하기'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-slate-400 font-mono pt-2 border-t border-indigo-500/15">
          {isRegister ? '이미 계정이 있으신가요?' : '아직 계정이 없으신가요?'}{' '}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-amber-400 hover:underline font-bold"
          >
            {isRegister ? '로그인하기' : '회원가입하기'}
          </button>
        </div>

      </div>
    </div>
  );
}
