export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C9A961]">거성 국제 결혼</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-start">
                <span className="font-semibold mr-2 text-white">대표:</span>
                <span>문옥선</span>
              </p>
              <p className="flex items-start">
                <span className="font-semibold mr-2 text-white">주소:</span>
                <span>충북 영동군 영동읍 회동리</span>
              </p>
              <p className="flex items-start">
                <span className="font-semibold mr-2 text-white">설립:</span>
                <span>2004년</span>
              </p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C9A961]">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-[#C9A961] transition-colors">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="/programs" className="text-gray-300 hover:text-[#C9A961] transition-colors">
                  결혼 프로그램
                </a>
              </li>
              <li>
                <a href="/matching" className="text-gray-300 hover:text-[#C9A961] transition-colors">
                  사전 매칭
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-300 hover:text-[#C9A961] transition-colors">
                  상담 신청
                </a>
              </li>
            </ul>
          </div>

          {/* 상담 문의 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C9A961]">상담 문의</h3>
            <div className="space-y-3">
              <p className="text-gray-300">
                20년 경험의 전문가가<br />
                친절하게 상담해드립니다
              </p>
              <a
                href="/#contact"
                className="inline-block px-6 py-3 bg-[#C9A961] text-black hover:bg-[#8B6F47] transition-all duration-300 font-semibold rounded-lg mt-4"
              >
                무료 상담 신청
              </a>
            </div>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2004-2025 거성 국제 결혼. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            베트남 · 몽골 현지 직영 사무소 운영
          </p>
        </div>
      </div>
    </footer>
  );
}
