'use client';

import { useState } from 'react';

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 플로팅 버튼 그룹 */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
        {/* 상담 신청 버튼들 (펼침/접힘) */}
        {isOpen && (
          <div className="flex flex-col gap-3 animate-fade-in">
            {/* 전화 상담 */}
            <a
              href="tel:1588-0000"
              className="flex items-center gap-3 bg-white border-2 border-[#C9A961] text-[#1a1a1a] px-4 py-3 rounded-full shadow-lg hover:bg-[#C9A961] hover:text-white transition-all duration-300 group"
            >
              <span className="text-sm font-semibold whitespace-nowrap">전화 상담</span>
              <div className="w-10 h-10 bg-[#C9A961] rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                <svg className="w-5 h-5 text-white group-hover:text-[#C9A961]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
            </a>

            {/* 카카오톡 상담 */}
            <a
              href="https://pf.kakao.com/_your_channel_id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white border-2 border-[#FEE500] text-[#1a1a1a] px-4 py-3 rounded-full shadow-lg hover:bg-[#FEE500] transition-all duration-300 group"
            >
              <span className="text-sm font-semibold whitespace-nowrap">카톡 상담</span>
              <div className="w-10 h-10 bg-[#FEE500] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="#000000" viewBox="0 0 24 24">
                  <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 01-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 00-.656-.681l-1.928 1.866V9.282a.472.472 0 00-.944 0v2.557a.471.471 0 00.069.246.469.469 0 00.098.126l2.05 1.989a.472.472 0 00.656-.681l-1.815-1.458zm-3.15-1.78h-.937v3.481a.472.472 0 01-.944 0V9.282h-.937a.472.472 0 010-.944h2.818a.472.472 0 010 .944zm-3.585-.944a.472.472 0 00-.472.472v3.481a.472.472 0 00.944 0v-1.04h.908a.472.472 0 000-.944h-.908v-.997h1.067a.472.472 0 000-.944H11.172zm-2.616 0h-1.41a.472.472 0 00-.472.472v3.481a.472.472 0 00.472.472h1.41a1.37 1.37 0 001.367-1.367v-1.691c0-.755-.612-1.367-1.367-1.367zm.423 3.058a.423.423 0 01-.423.423h-.938V9.282h.938c.233 0 .423.19.423.423v1.691z"/>
                </svg>
              </div>
            </a>

            {/* 상담 신청 폼 */}
            <a
              href="/#contact"
              className="flex items-center gap-3 bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] px-4 py-3 rounded-full shadow-lg hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 group"
            >
              <span className="text-sm font-semibold whitespace-nowrap">상담 신청</span>
              <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                <svg className="w-5 h-5 text-white group-hover:text-[#1a1a1a]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
            </a>
          </div>
        )}

        {/* 메인 토글 버튼 */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-[#C9A961] text-white rounded-full shadow-2xl hover:bg-[#8B6F47] transition-all duration-300 flex items-center justify-center group relative"
          aria-label="상담 메뉴"
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
              </svg>
              {/* 펄스 애니메이션 */}
              <span className="absolute inset-0 rounded-full bg-[#C9A961] animate-ping opacity-75"></span>
            </>
          )}
        </button>
      </div>

      {/* 애니메이션 스타일 */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
