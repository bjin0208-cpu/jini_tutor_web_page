import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InstructorSection from './components/InstructorSection';
import AlbumGrid from './components/AlbumGrid';
import FreeSampleBanner from './components/FreeSampleBanner';
import MarqueeReviews from './components/MarqueeReviews';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

// Modals & Drawers
import SampleModal from './components/SampleModal';
import PaymentModal from './components/PaymentModal';
import MyPageModal from './components/MyPageModal';
import AdminDrawer from './components/AdminDrawer';
import AuthModal from './components/AuthModal';
import RefundPolicyModal from './components/RefundPolicyModal';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sampleCourse, setSampleCourse] = useState(null);
  const [paymentItem, setPaymentItem] = useState(null);
  const [isMyPageOpen, setIsMyPageOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isRefundOpen, setIsRefundOpen] = useState(false);

  // User purchased courses state
  const [purchases, setPurchases] = useState([
    {
      itemName: 'ChatGPT & Claude 실전 비즈니스 마스터 클래스',
      amount: 69000,
      date: '2026.08.01',
      expiresAt: '2026.09.01'
    }
  ]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSuccessPayment = (newPurchase) => {
    setPurchases([newPurchase, ...purchases]);
    setPaymentItem(null);
    setIsMyPageOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-[#f8fafc] flex flex-col font-sans selection:bg-[#6366f1] selection:text-white">
      
      {/* Top Header */}
      <Header
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenMyPage={() => setIsMyPageOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onScrollTo={handleScrollTo}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with 3D Jelly Category Buttons */}
        <Hero
          onSelectCategory={(catId) => {
            setSelectedCategory(catId);
            handleScrollTo('courses');
          }}
          onScrollToCourses={() => handleScrollTo('courses')}
          onOpenSample={() => setSampleCourse({ title: '지니튜터클래스 1강 무료 맛보기 영상', categoryName: '전체', typeName: '온라인 동영상' })}
        />

        {/* Instructor Verification & Credentials Section */}
        <InstructorSection />

        {/* Naver Blog Album Grid Category Class Section */}
        <AlbumGrid
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenSample={(course) => setSampleCourse(course)}
          onOpenPayment={(course) => setPaymentItem(course)}
        />

        {/* Free Sample Banner & 1-Month Pass Promo */}
        <FreeSampleBanner
          onOpenPayment={(item) => setPaymentItem(item)}
          onOpenSample={() => setSampleCourse({ title: '지니튜터클래스 1강 무료 맛보기 영상', categoryName: '전체', typeName: '온라인' })}
        />

        {/* Infinite Marquee Student Reviews */}
        <MarqueeReviews />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Final Conversion CTA Section */}
        <CtaSection
          onScrollToCourses={() => handleScrollTo('courses')}
          onOpenPayment={(item) => setPaymentItem(item)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenRefundModal={() => setIsRefundOpen(true)} />

      {/* Modals & Drawers */}
      {sampleCourse && (
        <SampleModal
          course={sampleCourse}
          onClose={() => setSampleCourse(null)}
          onOpenPayment={(course) => setPaymentItem(course)}
        />
      )}

      {paymentItem && (
        <PaymentModal
          item={paymentItem}
          onClose={() => setPaymentItem(null)}
          onSuccessPayment={handleSuccessPayment}
        />
      )}

      {isMyPageOpen && (
        <MyPageModal
          purchases={purchases}
          onClose={() => setIsMyPageOpen(false)}
          onRenewPass={() => {
            setIsMyPageOpen(false);
            setPaymentItem({ title: '지니튜터클래스 1개월 무제한 전 과목 자유 이용권 갱신', discountPrice: 49000 });
          }}
        />
      )}

      {isAdminOpen && (
        <AdminDrawer onClose={() => setIsAdminOpen(false)} />
      )}

      {isAuthOpen && (
        <AuthModal
          onClose={() => setIsAuthOpen(false)}
          onLoginSuccess={(user) => {
            alert(`${user.email}님 환영합니다!`);
          }}
        />
      )}

      {isRefundOpen && (
        <RefundPolicyModal onClose={() => setIsRefundOpen(false)} />
      )}

    </div>
  );
}
