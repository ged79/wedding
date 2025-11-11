import Header from './components/Header';
import FloatingButtons from './components/FloatingButtons';

export default function Home() {
  return (
    <>
      <Header />
      <FloatingButtons />
      <main className="min-h-screen bg-white">
        {/* Main Banner */}
        <section className="relative bg-white overflow-hidden" style={{minHeight: '100vh'}}>
          {/* Background Image - Original Brightness */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/p1.jpg')",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex items-end justify-center pb-48 md:pb-56" style={{minHeight: '100vh'}}>
            <div className="max-w-4xl mx-auto text-center px-8">
              <div className="mb-6">
                <a
                  href="/matching"
                  className="inline-block px-12 py-5 bg-[#C9A961] text-white hover:bg-[#8B6F47] transition-all duration-500 text-base tracking-[0.2em] font-semibold shadow-xl hover:shadow-2xl rounded"
                >
                  사전 매칭 시작하기
                </a>
              </div>

              <p className="text-xl md:text-2xl text-white font-medium tracking-wide leading-relaxed" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'}}>
                원하는 짝을 찾아보세요
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex flex-col items-center gap-2 text-white">
              <span className="text-xs tracking-wider drop-shadow-lg">아래로</span>
              <div className="w-px h-12 bg-gradient-to-b from-white to-transparent drop-shadow-lg"></div>
            </div>
          </div>
        </section>

        {/* 철저한 신원검증 시스템 */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#FAFAF8] to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#C9A961] text-sm tracking-[0.3em] font-semibold mb-4 block">
                VERIFICATION SYSTEM
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-[#2C3E50] mb-4">
                철저한 신원검증 시스템
              </h2>
              <div className="w-20 h-1 bg-[#C9A961] mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-12">
              {/* 1단계: 신분 확인 */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#C9A961]">
                <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-center mb-4">1단계: 신분 확인</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>여권 및 신분증 원본 확인</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>가족관계증명서 확인</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>범죄경력조회 (현지 경찰서)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>혼인관계증명서 (미혼 확인)</span>
                  </li>
                </ul>
              </div>

              {/* 2단계: 가족 확인 */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#C9A961]">
                <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-center mb-4">2단계: 가족 확인</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>부모님 직접 면담 필수</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>가정환경 및 성장배경 확인</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>가족 동의서 작성 (공증)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>주거지 및 경제상황 파악</span>
                  </li>
                </ul>
              </div>

              {/* 3단계: 건강 확인 */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#C9A961]">
                <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-center mb-4">3단계: 건강 확인</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>종합건강검진 실시</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>전염병 검사 (필수 항목)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>정신건강 상담 진행</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>임신 가능 여부 확인</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 보장 사항 */}
            <div className="bg-gradient-to-r from-[#C9A961] to-[#8B6F47] text-white p-8 rounded-lg shadow-xl">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold mb-4">100% 검증 보장</h3>
                <p className="text-base md:text-lg mb-6">
                  모든 서류는 철저하게 번역·공증하여 제공합니다.<br />
                  검증되지 않은 회원은 절대 소개하지 않습니다.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>법무부 인증</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>현지 공증 완료</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>20년 무사고</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Gallery */}
        <section id="success" className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-4">
                20년간의 성혼 사례
              </h2>
              <div className="w-20 h-1 bg-[#C9A961] mx-auto mb-6"></div>
              <p className="text-[#5D6D7E]">
                거성국제결혼과 함께 이룩한 행복한 가정
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-12">
              {[
                {
                  year: '2008년',
                  location: '서울 → 베트남 호치민',
                  age: '35세',
                  story: '3개월간 충분히 알아가고 결혼했습니다. 현재 두 아이의 아빠로 행복하게 살고 있습니다. 거성과 함께해서 정말 다행이었습니다.',
                  period: '결혼 16년차',
                },
                {
                  year: '2015년',
                  location: '부산 → 몽골 울란바토르',
                  age: '42세',
                  story: '늦은 나이에 결혼했지만 현지 사무소의 세심한 배려로 좋은 분을 만났습니다. 지금도 가족처럼 연락하며 지냅니다.',
                  period: '결혼 9년차',
                },
                {
                  year: '2021년',
                  location: '경기 → 베트남 하노이',
                  age: '38세',
                  story: '사전 영상 통화로 서로를 충분히 알고 만났습니다. 졸속 결혼이 아닌 신중한 만남이 가능했습니다. 감사합니다.',
                  period: '결혼 3년차',
                },
              ].map((story, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* 이미지 플레이스홀더 */}
                  <div className="relative h-64 bg-gradient-to-br from-[#F5F1E8] to-[#FAFAF8] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl md:text-6xl mb-4">💑</div>
                      <p className="text-sm text-[#5D6D7E] font-semibold">
                        실제 사진 업데이트 예정
                      </p>
                    </div>
                    {/* 연도 배지 */}
                    <div className="absolute top-4 left-4 bg-[#2C3E50] text-white px-4 py-2 font-bold">
                      {story.year}
                    </div>
                    {/* 기간 배지 */}
                    <div className="absolute top-4 right-4 bg-[#27AE60] text-white px-3 py-1 text-sm font-semibold">
                      {story.period}
                    </div>
                  </div>

                  {/* 내용 */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-sm text-[#5D6D7E]">
                      <span className="bg-[#F5F1E8] text-[#8B6F47] px-3 py-1 rounded-full font-semibold">
                        {story.age}
                      </span>
                      <span>·</span>
                      <span>{story.location}</span>
                    </div>

                    <blockquote className="text-gray-700 leading-relaxed italic mb-4">
                      "{story.story}"
                    </blockquote>

                    <div className="flex items-center gap-2 text-yellow-500 text-sm">
                      <span>⭐⭐⭐⭐⭐</span>
                      <span className="text-gray-600">만족도 최상</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 통계 */}
            <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] text-white p-8 rounded-lg shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">400+</div>
                  <div className="text-sm md:text-base text-[#95A5A6]">총 성혼 커플</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
                  <div className="text-sm md:text-base text-[#95A5A6]">고객 만족도</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
                  <div className="text-sm md:text-base text-[#95A5A6]">결혼 유지율</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">20년</div>
                  <div className="text-sm md:text-base text-[#95A5A6]">무사고 운영</div>
                </div>
              </div>
            </div>

            {/* 주의 문구 */}
            <div className="mt-8 p-6 bg-[#FAFAF8] border border-[#E5E5E0] rounded">
              <p className="text-xs text-gray-700 text-center space-y-1">
                <span className="block">※ 개인정보 보호를 위해 사진과 이름은 익명 처리되었습니다</span>
                <span className="block">※ 모든 사례는 실제 고객님의 동의 하에 공유되었습니다</span>
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-4">
                결혼 진행 절차
              </h2>
              <div className="w-20 h-1 bg-[#C9A961] mx-auto mb-6"></div>
              <p className="text-[#5D6D7E]">투명하고 체계적인 6단계 프로세스</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: '무료 상담 및 계약',
                  items: [
                    '📞 전화/카톡/방문 상담 (완전 무료)',
                    '💭 희망하는 배우자 조건 상세 상담 (나이, 외모, 성격, 학력 등)',
                    '📋 국가별 프로그램 및 예상 비용 안내',
                    '✍️ 계약서 작성 (모든 비용 항목 명시, 숨은 비용 없음)',
                    '💳 계약금 납부 (총 비용의 30%)',
                  ],
                  duration: '소요기간: 1일',
                  tip: '충분한 시간을 갖고 궁금한 사항을 모두 질문하세요',
                },
                {
                  step: 2,
                  title: '사전 매칭 & 프로필 확인',
                  items: [
                    '🎯 사전 매칭 시스템으로 선호 타입 선택',
                    '📸 현지 사무소에서 조건에 맞는 3~5명 프로필 제공',
                    '🎥 각 후보자의 사진, 영상, 신상정보 전달 (철저히 검증된 정보)',
                    '💬 카톡/전화로 궁금한 점 질문 및 추가 정보 요청 가능',
                    '✅ 마음에 드는 후보 선택 (마음에 안 들면 추가 프로필 제공)',
                  ],
                  duration: '소요기간: 1주일',
                  tip: '서두르지 말고 신중하게 선택하세요. 추가 프로필 요청 가능합니다',
                },
                {
                  step: 3,
                  title: '현지 방문 및 맞선',
                  items: [
                    '✈️ 현지 출국 (3박4일 또는 4박5일 일정)',
                    '🏨 현지 숙박 및 차량 제공 (비용 포함)',
                    '🗣️ 전문 통역사 전 일정 동행 (베트남어/몽골어↔한국어)',
                    '💑 1:1 맞선 진행 (카페, 레스토랑 등)',
                    '🏡 신부 가족 방문 및 부모님 면담',
                    '💍 양가 동의 후 결혼 확정 및 약혼식 (선택)',
                  ],
                  duration: '소요기간: 3~5일',
                  tip: '급하게 결정하지 마세요. 충분한 대화 후 결정하는 것이 중요합니다',
                },
                {
                  step: 4,
                  title: '서류 준비 및 결혼 등록',
                  items: [
                    '📄 필요 서류 안내 및 준비 (가족관계증명서, 혼인관계증명서 등)',
                    '🏛️ 현지 결혼 등록 (현지 관공서)',
                    '🇰🇷 한국 혼인신고 대행 (주한 대사관 또는 국내 구청)',
                    '📑 모든 서류 번역 및 공증 처리',
                    '💰 잔금 납부 (총 비용의 70%)',
                  ],
                  duration: '소요기간: 2~3주',
                  tip: '복잡한 서류 절차는 저희가 모두 대행해드립니다',
                },
                {
                  step: 5,
                  title: '결혼비자 발급 및 한국 입국',
                  items: [
                    '📝 결혼비자(F-6) 신청 서류 준비 및 제출 대행',
                    '⏰ 비자 심사 대기 (법무부 출입국관리사무소)',
                    '✈️ 비자 승인 후 신부 한국 입국 (항공권 별도)',
                    '🚗 공항 픽업 서비스 제공',
                    '🏠 주거지 신고, 외국인등록증 발급 안내',
                  ],
                  duration: '소요기간: 1~2개월',
                  tip: '비자 심사 기간은 국가 및 상황에 따라 다를 수 있습니다',
                },
                {
                  step: 6,
                  title: '사후관리 (1년 무료)',
                  items: [
                    '📞 정기 상담 (월 1회 이상 안부 확인)',
                    '🆘 긴급 상황 발생 시 24시간 상담 가능',
                    '📋 비자 연장 및 영주권 신청 안내',
                    '🗣️ 한국어 교육 지원 (온라인 강의 연결)',
                    '🤝 문화 적응 및 부부 갈등 상담',
                    '🏥 병원 동행, 관공서 업무 지원 (필요시)',
                  ],
                  duration: '기간: 결혼 후 1년간',
                  tip: '새 가정이 안정될 때까지 끝까지 책임지고 관리합니다',
                },
              ].map((process) => (
                <div
                  key={process.step}
                  className="flex flex-col md:flex-row bg-white border border-gray-300 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-[#2C3E50] text-white p-6 flex items-center justify-center md:w-32">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold whitespace-nowrap">단계 {process.step}</div>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-lg md:text-xl font-bold text-[#2C3E50] mb-4">
                      {process.title}
                    </h3>
                    <ul className="space-y-2 mb-4">
                      {process.items.map((item, idx) => (
                        <li key={idx} className="text-[#5D6D7E]">
                          → {item}
                        </li>
                      ))}
                    </ul>
                    <div className="text-sm text-[#C9A961] font-semibold mb-3">
                      {process.duration}
                    </div>
                    <div className="bg-[#F5F1E8] border-l-4 border-[#C9A961] p-3 text-sm text-[#5D6D7E]">
                      <span className="font-semibold text-[#8B6F47]">💡 Tip:</span> {process.tip}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-[#FAFAF8]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-4">
                자주 묻는 질문
              </h2>
              <div className="w-20 h-1 bg-[#C9A961] mx-auto mb-6"></div>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: '비용은 정확히 얼마인가요?',
                  a: '베트남은 1,200만원, 몽골은 1,500만원입니다. 이 금액에는 항공료, 숙박비, 통역, 모든 서류 대행이 포함되어 있으며 추가 비용은 일절 없습니다.',
                },
                {
                  q: '맞선이 불발되면 어떻게 되나요?',
                  a: '추가 비용 없이 다시 진행됩니다. 결혼이 성사될 때까지 계속 지원해드립니다.',
                },
                {
                  q: '얼마나 걸리나요?',
                  a: '베트남은 평균 2-3개월, 몽골은 평균 3-4개월이 소요됩니다. 서류 준비 상황에 따라 다소 차이가 있을 수 있습니다.',
                },
                {
                  q: '신부의 신원은 확인되나요?',
                  a: '현지 직영 사무소에서 신부와 가족의 신원을 철저히 확인합니다. 신분증, 가족관계증명서 등을 확인하고 가족 면담도 진행합니다.',
                },
                {
                  q: '언어 소통은 어떻게 하나요?',
                  a: '맞선과 가족 방문 시 전문 통역사가 동행합니다. 결혼 후에도 필요시 통역 지원을 해드립니다.',
                },
                {
                  q: '결혼 후 관리도 해주나요?',
                  a: '네, 결혼 후 1년간 무료로 사후관리를 제공합니다. 비자 연장, 한국어 교육, 문화 적응 등을 지원합니다.',
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-[#2C3E50] mb-3">
                    Q. {faq.q}
                  </h3>
                  <p className="text-[#5D6D7E] leading-relaxed">A. {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-4">
                  무료 상담 신청
                </h3>
                <div className="w-20 h-1 bg-[#C9A961] mx-auto mb-4"></div>
                <p className="text-[#5D6D7E]">
                  전문 상담사가 친절하게 상담해드립니다
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    이름 <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="홍길동"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#C9A961]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    연락처 <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="010-0000-0000"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#C9A961]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    희망 국가 <span className="text-red-600">*</span>
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600">
                    <option>선택하세요</option>
                    <option>베트남</option>
                    <option>몽골</option>
                    <option>상담 후 결정</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    나이
                  </label>
                  <input
                    type="number"
                    placeholder="예: 35"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#C9A961]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    문의 내용
                  </label>
                  <textarea
                    rows={4}
                    placeholder="궁금하신 점을 자유롭게 작성해주세요"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#C9A961]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C9A961] hover:bg-[#8B6F47] text-white px-8 py-4 text-lg font-bold transition-colors shadow-md hover:shadow-lg"
                >
                  무료 상담 신청하기
                </button>

                <p className="text-xs text-gray-500 text-center">
                  상담 신청 후 24시간 이내에 연락드립니다
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 p-6 text-center rounded-lg shadow-sm">
                <div className="text-3xl text-[#C9A961] mb-3">☎</div>
                <h4 className="font-bold text-[#2C3E50] mb-2">전화 상담</h4>
                <p className="text-2xl font-bold text-[#E67E22]">1588-0000</p>
                <p className="text-sm text-gray-600 mt-2">
                  평일 09:00-18:00<br />
                  토요일 10:00-15:00
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 text-center rounded-lg shadow-sm">
                <div className="text-3xl text-[#C9A961] mb-3">📍</div>
                <h4 className="font-bold text-[#2C3E50] mb-2">방문 상담</h4>
                <p className="text-sm text-gray-700">
                  서울시 강남구 테헤란로<br />
                  123번길 45 (예시 주소)
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  사전 예약 필수
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1a1a1a] text-gray-300 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* 법적 정보 강조 */}
            <div className="bg-[#2a2a2a] p-6 rounded-lg mb-8 border border-[#C9A961]/30">
              <h3 className="text-[#C9A961] font-bold text-lg mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                법적 근거 및 인증 정보
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="font-semibold text-white mb-2">국제결혼중개업 등록 정보</p>
                  <ul className="space-y-1 text-gray-400">
                    <li>• 등록번호: <span className="text-white">서울-강남-국제-XX-XXXX호</span></li>
                    <li>• 등록 기관: 서울특별시 강남구청</li>
                    <li>• 등록일: 2004년 설립</li>
                    <li>• 법적 근거: 결혼중개업의 관리에 관한 법률</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">사업자 정보</p>
                  <ul className="space-y-1 text-gray-400">
                    <li>• 상호명: 거성 국제 결혼</li>
                    <li>• 대표자: [대표자명]</li>
                    <li>• 사업자등록번호: XXX-XX-XXXXX</li>
                    <li>• 주소: 서울특별시 [상세주소]</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">회사 정보</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-1 text-[#C9A961] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>설립: 2004년 (20년 전통)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-1 text-[#C9A961] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>성혼 실적: 400+ 커플</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-1 text-[#C9A961] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>여성가족부 등록</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-1 text-[#C9A961] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>현지 직영 사무소 운영</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">고객센터</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#C9A961]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <span>전화: 1588-0000</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#C9A961]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span>이메일: info@geosung-wedding.com</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#C9A961]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                    <span>평일 09:00-18:00</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#C9A961]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                    <span>토요일 10:00-15:00</span>
                  </li>
                  <li className="text-gray-500 text-xs">(일요일, 공휴일 휴무)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">현지 사무소</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-1 text-[#C9A961] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    <span>🇻🇳 베트남 하노이 사무소</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-1 text-[#C9A961] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    <span>🇻🇳 베트남 호치민 사무소</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-1 text-[#C9A961] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    <span>🇲🇳 몽골 울란바토르 사무소</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 하단 법적 공지 */}
            <div className="border-t border-gray-700 pt-6 pb-4">
              <div className="text-xs text-gray-500 mb-4 leading-relaxed">
                <p className="mb-2">
                  거성 국제 결혼은 「결혼중개업의 관리에 관한 법률」 제3조 및 제4조에 따라 적법하게 등록된 국제결혼중개업체입니다.
                </p>
                <p className="mb-2">
                  본 업체는 신부 선정의 자유 보장, 정확한 신상정보 제공, 국제결혼 관련 법령 준수, 인권 보호 등의 의무를 철저히 이행합니다.
                </p>
                <p>
                  국제결혼 피해 상담: 여성가족부 다누리콜센터 ☎ 1577-1366 (24시간 운영, 13개 언어 지원)
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center text-sm border-t border-gray-800 pt-4">
                <p className="text-gray-400">&copy; 2004-2025 거성 국제 결혼. All Rights Reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                  <a href="/legal/terms" className="hover:text-[#C9A961] transition-colors">이용약관</a>
                  <a href="/legal/privacy" className="hover:text-[#C9A961] transition-colors font-semibold">개인정보처리방침</a>
                  <a href="/legal/refund" className="hover:text-[#C9A961] transition-colors">환불정책</a>
                  <a href="/legal/insurance" className="hover:text-[#C9A961] transition-colors">손해배상보험</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
