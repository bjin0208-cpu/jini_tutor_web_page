import React, { useState } from 'react';
import { Sparkles, User, ShieldCheck, ShoppingBag, Settings, Menu, X } from 'lucide-react';

export default function Header({ onOpenAuth, onOpenMyPage, onOpenAdmin, onScrollTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#090d16]/80 backdrop-blur-md border-b border-indigo-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => onScrollTo('hero')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-amber-500 p-[2px] shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#090d16] rounded-[14px] flex items-center justify-center text-xl">
                🔮
              </div>
            </div>
            <div>
              <span className="font-mono text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-indigo-300">
                지니튜터클래스
              </span>
              <span className="block text-[10px] text-indigo-400 font-mono tracking-widest uppercase">
                JINI TUTOR CLASS
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <button 
              onClick={() => onScrollTo('hero')}
              className="text-slate-300 hover:text-indigo-400 transition-colors"
            >
              홈
            </button>
            <button 
              onClick={() => onScrollTo('instructor')}
              className="text-slate-300 hover:text-indigo-400 transition-colors flex items-center space-x-1"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400 inline" />
              <span>강사 신뢰 검증</span>
            </button>
            <button 
              onClick={() => onScrollTo('courses')}
              className="text-slate-300 hover:text-indigo-400 transition-colors"
            >
              전체 클래스
            </button>
            <button 
              onClick={() => onScrollTo('reviews')}
              className="text-slate-300 hover:text-indigo-400 transition-colors"
            >
              생생 수강후기
            </button>
            <button 
              onClick={() => onScrollTo('faq')}
              className="text-slate-300 hover:text-indigo-400 transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* User Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenAdmin}
              className="px-3 py-1.5 rounded-xl border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 text-xs font-mono flex items-center space-x-1.5 transition-all"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>어드민</span>
            </button>

            <button
              onClick={onOpenMyPage}
              className="px-3 py-1.5 rounded-xl border border-amber-500/30 text-amber-300 hover:bg-amber-500/10 text-xs font-mono flex items-center space-x-1.5 transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>마이페이지</span>
            </button>

            <button
              onClick={onOpenAuth}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-medium text-xs shadow-md shadow-indigo-500/20 flex items-center space-x-1.5 transition-all active:scale-95"
            >
              <User className="w-3.5 h-3.5" />
              <span>로그인 / 수강신청</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-indigo-500/20 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d16]/95 border-b border-indigo-500/20 px-4 pt-2 pb-6 space-y-3">
          <button 
            onClick={() => { onScrollTo('hero'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 font-medium"
          >
            홈
          </button>
          <button 
            onClick={() => { onScrollTo('instructor'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-amber-400 font-medium"
          >
            🛡️ 강사 신뢰 검증
          </button>
          <button 
            onClick={() => { onScrollTo('courses'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 font-medium"
          >
            전체 클래스
          </button>
          <button 
            onClick={() => { onScrollTo('reviews'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 font-medium"
          >
            수강생 후기
          </button>
          <button 
            onClick={() => { onScrollTo('faq'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 font-medium"
          >
            FAQ
          </button>

          <div className="pt-4 border-t border-indigo-500/20 flex flex-col space-y-2">
            <button
              onClick={() => { onOpenMyPage(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded-xl border border-amber-500/30 text-amber-300 text-xs font-mono text-center"
            >
              마이페이지 / 수강함
            </button>
            <button
              onClick={() => { onOpenAdmin(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded-xl border border-indigo-500/30 text-indigo-300 text-xs font-mono text-center"
            >
              어드민 관제탑
            </button>
            <button
              onClick={() => { onOpenAuth(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium text-xs text-center"
            >
              로그인 / 회원가입
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
