import React, { useState } from 'react';
import { X, Settings, Plus, Edit, Trash2, ShoppingBag, Layers } from 'lucide-react';
import { coursesData } from '../data/courses';

export default function AdminDrawer({ onClose }) {
  const [courses, setCourses] = useState(coursesData);
  const [activeTab, setActiveTab] = useState('courses'); // courses, orders
  const [newTitle, setNewTitle] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newCategory, setNewCategory] = useState('ai');

  const handleAddCourse = () => {
    if (!newTitle) return alert('강의 제목을 입력하세요.');
    const newCourse = {
      id: Date.now(),
      title: newTitle,
      category: newCategory,
      categoryName: newCategory === 'ai' ? 'AI 활용' : newCategory === 'canva' ? '캔바 디렉팅' : newCategory === 'organize' ? '정리수납' : '수공예품',
      type: 'online',
      typeName: '온라인 동영상',
      instructor: '지니 튜터',
      rating: 5.0,
      reviewsCount: 1,
      studentsCount: 0,
      price: Number(newPrice) || 89000,
      discountPrice: (Number(newPrice) || 89000) * 0.8,
      thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      description: '새로 등록된 클래스입니다.',
      features: ['신규 개설 강좌']
    };

    setCourses([newCourse, ...courses]);
    setNewTitle('');
    setNewPrice('');
    alert('새 클래스가 등록되었습니다!');
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-xl bg-[#090d16] border-l border-indigo-500/30 h-full overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-indigo-500/20 pb-4">
          <div className="flex items-center space-x-2">
            <Settings className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl font-bold text-white font-mono">
              ADMIN DASHBOARD (어드민 관제탑)
            </h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg bg-slate-800 text-slate-300">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex space-x-2 border-b border-indigo-500/20 pb-3 font-mono text-xs">
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-2 rounded-xl flex items-center space-x-1.5 ${
              activeTab === 'courses' ? 'bg-indigo-600 text-white' : 'bg-indigo-950/40 text-slate-400'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>강의 등록 & CRUD ({courses.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-xl flex items-center space-x-1.5 ${
              activeTab === 'orders' ? 'bg-indigo-600 text-white' : 'bg-indigo-950/40 text-slate-400'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>수강/주문 현황</span>
          </button>
        </div>

        {/* Courses CRUD Tab */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            
            {/* New Course Form */}
            <div className="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 space-y-3">
              <h4 className="text-xs font-mono font-bold text-amber-300 flex items-center space-x-1">
                <Plus className="w-4 h-4" />
                <span>새 클래스 즉시 등록</span>
              </h4>

              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="강의 제목 입력"
                className="w-full bg-[#090d16] border border-indigo-500/30 rounded-xl px-3 py-2 text-xs text-white"
              />

              <div className="grid grid-cols-2 gap-2">
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="bg-[#090d16] border border-indigo-500/30 rounded-xl px-3 py-2 text-xs text-slate-300 font-mono"
                >
                  <option value="ai">AI 활용</option>
                  <option value="canva">캔바 디렉팅</option>
                  <option value="organize">정리수납</option>
                  <option value="handicraft">수공예품</option>
                </select>

                <input
                  type="number"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  placeholder="가격(원)"
                  className="bg-[#090d16] border border-indigo-500/30 rounded-xl px-3 py-2 text-xs text-white font-mono"
                />
              </div>

              <button
                onClick={handleAddCourse}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs font-mono"
              >
                + 신규 클래스 등록하기
              </button>
            </div>

            {/* Existing Course List */}
            <div className="space-y-3">
              {courses.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 flex items-center justify-between text-xs"
                >
                  <div className="space-y-1">
                    <div className="font-bold text-white line-clamp-1">{item.title}</div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      [{item.categoryName}] | {item.discountPrice.toLocaleString()}원 | 수강생 {item.studentsCount}명
                    </div>
                  </div>

                  <button
                    onClick={() => handleDeleteCourse(item.id)}
                    className="p-2 rounded-lg bg-rose-500/20 text-rose-300 hover:bg-rose-500/40 transition-colors shrink-0 ml-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Orders Status Tab */}
        {activeTab === 'orders' && (
          <div className="space-y-3 font-mono text-xs">
            <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/20 space-y-2">
              <div className="flex justify-between font-bold text-white">
                <span>주문 #2026-0804-001</span>
                <span className="text-emerald-400">결제완료 (`/v1/payments/confirm`)</span>
              </div>
              <p className="text-slate-300">상품: ChatGPT & Claude 비즈니스 마스터</p>
              <p className="text-slate-400 text-[11px]">구매자: kim***@naver.com | 금액: 69,000원</p>
            </div>

            <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/20 space-y-2">
              <div className="flex justify-between font-bold text-white">
                <span>주문 #2026-0804-002</span>
                <span className="text-amber-400">1개월 이용권 수강 중 (D-30)</span>
              </div>
              <p className="text-slate-300">상품: 1개월 무제한 전 과목 자유 이용권</p>
              <p className="text-slate-400 text-[11px]">구매자: park***@gmail.com | 금액: 49,000원</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
