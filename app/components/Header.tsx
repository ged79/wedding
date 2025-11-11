'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-white via-gray-50 to-white sticky top-0 z-50 backdrop-blur-md shadow-md border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <nav className="py-4 md:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="cursor-pointer">
                <h1 className="text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity" style={{color: '#C9A961'}}>
                  거성 국제 결혼
                </h1>
              </a>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-12 text-sm">
              <li>
                <a href="/about" className="text-[#2C3E50] hover:text-[#C9A961] transition-colors duration-300 tracking-wide font-medium">
                  회사소개
                </a>
              </li>
              <li>
                <a href="/programs" className="text-[#2C3E50] hover:text-[#C9A961] transition-colors duration-300 tracking-wide font-medium">
                  국가별 프로그램
                </a>
              </li>
              <li>
                <a href="/matching" className="text-[#2C3E50] hover:text-[#C9A961] transition-colors duration-300 tracking-wide font-medium">
                  사전매칭
                </a>
              </li>
              <li>
                <a href="/#process" className="text-[#2C3E50] hover:text-[#C9A961] transition-colors duration-300 tracking-wide font-medium">
                  진행절차
                </a>
              </li>
              <li>
                <a href="/#success" className="text-[#2C3E50] hover:text-[#C9A961] transition-colors duration-300 tracking-wide font-medium">
                  성혼사례
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="px-8 py-3 bg-[#C9A961] text-white hover:bg-[#8B6F47] transition-all duration-300 tracking-wide font-semibold shadow-md rounded"
                >
                  상담신청
                </a>
              </li>
            </ul>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#2C3E50] hover:text-[#C9A961] transition-colors"
              aria-label="메뉴"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fade-in">
              <ul className="space-y-4">
                <li>
                  <a
                    href="/about"
                    className="block py-2 text-[#2C3E50] hover:text-[#C9A961] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    회사소개
                  </a>
                </li>
                <li>
                  <a
                    href="/programs"
                    className="block py-2 text-[#2C3E50] hover:text-[#C9A961] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    국가별 프로그램
                  </a>
                </li>
                <li>
                  <a
                    href="/matching"
                    className="block py-2 text-[#2C3E50] hover:text-[#C9A961] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    사전매칭
                  </a>
                </li>
                <li>
                  <a
                    href="/#process"
                    className="block py-2 text-[#2C3E50] hover:text-[#C9A961] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    진행절차
                  </a>
                </li>
                <li>
                  <a
                    href="/#success"
                    className="block py-2 text-[#2C3E50] hover:text-[#C9A961] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    성혼사례
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
                    className="block w-full text-center py-3 bg-[#C9A961] text-white hover:bg-[#8B6F47] transition-all duration-300 font-semibold rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    상담신청
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
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
    </header>
  );
}
