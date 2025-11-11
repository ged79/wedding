import Header from '../components/Header';
import FloatingButtons from '../components/FloatingButtons';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <FloatingButtons />
      <main className="min-h-screen bg-[#FAFAF8]">
        {/* Hero Section - Compact */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 py-8 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              회사 <span className="text-[#C9A961]">소개</span>
            </h1>
            <p className="text-sm text-gray-600">
              2004년부터 20년간 이어온 신뢰와 전통
            </p>
          </div>
        </section>

        {/* 핵심 통계 */}
        <section className="py-16 px-4 bg-[#FAFAF8]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-[#FAFAF8] p-6 md:p-8 text-center border-2 border-[#C9A961] hover:shadow-xl transition-shadow">
                <div className="text-3xl md:text-5xl font-bold text-[#C9A961] mb-3">20년</div>
                <p className="text-gray-900 font-semibold text-base md:text-lg">업계 경력</p>
                <p className="text-xs md:text-sm text-gray-600 mt-2">2004년 설립</p>
              </div>
              <div className="bg-[#FAFAF8] p-6 md:p-8 text-center border-2 border-gray-200 hover:border-[#C9A961] hover:shadow-xl transition-all">
                <div className="text-3xl md:text-5xl font-bold text-[#C9A961] mb-3">400+</div>
                <p className="text-gray-900 font-semibold text-base md:text-lg">성혼 커플</p>
                <p className="text-xs md:text-sm text-gray-600 mt-2">검증된 실적</p>
              </div>
              <div className="bg-[#FAFAF8] p-6 md:p-8 text-center border-2 border-gray-200 hover:border-[#C9A961] hover:shadow-xl transition-all">
                <div className="text-3xl md:text-5xl font-bold text-[#C9A961] mb-3">98%</div>
                <p className="text-gray-900 font-semibold text-base md:text-lg">고객 만족도</p>
                <p className="text-xs md:text-sm text-gray-600 mt-2">높은 성사율</p>
              </div>
              <div className="bg-[#FAFAF8] p-6 md:p-8 text-center border-2 border-gray-200 hover:border-[#C9A961] hover:shadow-xl transition-all">
                <div className="text-3xl md:text-5xl font-bold text-[#C9A961] mb-3">3개</div>
                <p className="text-gray-900 font-semibold text-base md:text-lg">현지 직영 사무소</p>
                <p className="text-xs md:text-sm text-gray-600 mt-2">베트남·몽골</p>
              </div>
            </div>
          </div>
        </section>

        {/* 대표 인사말 */}
        <section className="py-16 px-4 bg-[#FAFAF8]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                대표 인사말
              </h2>
              <div className="w-20 h-1 bg-[#C9A961] mx-auto"></div>
            </div>
            <div className="bg-white p-10 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                안녕하십니까. 거성 국제 결혼 대표 문옥선입니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                2004년 설립 이래로 20년간 국제결혼 분야에서 오직 한 길만 걸어왔습니다.
                그동안 400여 쌍의 커플이 저희를 통해 소중한 인연을 맺었으며,
                지금도 행복한 가정을 꾸리고 계십니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                국제결혼은 단순히 두 사람의 만남이 아닌, 서로 다른 문화와 가치관을 가진
                두 가족이 하나가 되는 특별한 여정입니다. 저희는 이 소중한 여정에서
                신뢰할 수 있는 동반자가 되고자 최선을 다하고 있습니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                베트남과 몽골에 직영 사무소를 운영하며, 철저한 신원 검증과 투명한 진행 과정을 통해
                안전하고 신뢰할 수 있는 만남을 제공합니다. 결혼 이후에도 1년간 무료 사후관리를
                통해 새 가정이 안정적으로 자리잡을 수 있도록 지원하고 있습니다.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                앞으로도 변함없는 신뢰와 정직함으로 여러분의 행복한 미래를 함께 만들어가겠습니다.
              </p>
              <div className="mt-8 text-right">
                <p className="text-gray-900 font-bold text-lg">거성 국제 결혼 대표</p>
                <p className="text-[#C9A961] font-bold text-2xl mt-2">문옥선</p>
              </div>
            </div>
          </div>
        </section>

        {/* 회사 연혁 */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                회사 연혁
              </h2>
              <div className="w-20 h-1 bg-[#C9A961] mx-auto mb-6"></div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-32">
                  <div className="text-2xl font-bold text-[#C9A961]">2004</div>
                  <div className="text-sm text-gray-600">설립</div>
                </div>
                <div className="flex-1 bg-[#FAFAF8] p-6 rounded-lg shadow-sm group-hover:shadow-lg transition-shadow border-l-4 border-[#C9A961]">
                  <h3 className="font-bold text-lg mb-2">거성 국제 결혼 설립</h3>
                  <p className="text-gray-700">베트남 국제결혼 중개 사업 시작</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-32">
                  <div className="text-2xl font-bold text-[#C9A961]">2008</div>
                  <div className="text-sm text-gray-600">확장</div>
                </div>
                <div className="flex-1 bg-[#FAFAF8] p-6 rounded-lg shadow-sm group-hover:shadow-lg transition-shadow border-l-4 border-gray-300">
                  <h3 className="font-bold text-lg mb-2">베트남 현지 사무소 개설</h3>
                  <p className="text-gray-700">하노이, 호치민에 직영 사무소 설립</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-32">
                  <div className="text-2xl font-bold text-[#C9A961]">2015</div>
                  <div className="text-sm text-gray-600">다각화</div>
                </div>
                <div className="flex-1 bg-[#FAFAF8] p-6 rounded-lg shadow-sm group-hover:shadow-lg transition-shadow border-l-4 border-gray-300">
                  <h3 className="font-bold text-lg mb-2">몽골 사업 진출</h3>
                  <p className="text-gray-700">울란바토르 직영 사무소 개설</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-32">
                  <div className="text-2xl font-bold text-[#C9A961]">2020</div>
                  <div className="text-sm text-gray-600">혁신</div>
                </div>
                <div className="flex-1 bg-[#FAFAF8] p-6 rounded-lg shadow-sm group-hover:shadow-lg transition-shadow border-l-4 border-gray-300">
                  <h3 className="font-bold text-lg mb-2">온라인 사전 매칭 시스템 도입</h3>
                  <p className="text-gray-700">디지털 전환을 통한 고객 편의성 향상</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-32">
                  <div className="text-2xl font-bold text-[#C9A961]">2024</div>
                  <div className="text-sm text-gray-600">현재</div>
                </div>
                <div className="flex-1 bg-[#FAFAF8] p-6 rounded-lg shadow-sm group-hover:shadow-lg transition-shadow border-l-4 border-[#C9A961]">
                  <h3 className="font-bold text-lg mb-2">20주년, 400+ 성혼 달성</h3>
                  <p className="text-gray-700">업계 최고 수준의 성공률과 고객 만족도 유지</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 선택 이유 */}
        <section className="py-16 px-4 bg-[#FAFAF8]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                저희를 선택해야 하는 이유
              </h2>
              <div className="w-20 h-1 bg-[#C9A961] mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#C9A961]">
                <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">현지 직영 사무소</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#C9A961] mr-2">•</span>
                    <span>베트남 하노이, 호치민 직영</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A961] mr-2">•</span>
                    <span>몽골 울란바토르 직영</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A961] mr-2">•</span>
                    <span>현지 직원 상주 관리</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A961] mr-2">•</span>
                    <span>신부 가족 직접 소통</span>
                  </li>
                </ul>
              </div>

              {/* 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#C9A961]">
                <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">투명한 진행</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#C9A961] mr-2">•</span>
                    <span>모든 비용 사전 공개</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A961] mr-2">•</span>
                    <span>추가 비용 일절 없음</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A961] mr-2">•</span>
                    <span>계약서 명확화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A961] mr-2">•</span>
                    <span>진행 상황 실시간 보고</span>
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#C9A961]">
                <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">철저한 사후관리</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#C9A961] mr-2">•</span>
                    <span>결혼 후 1년간 무료 상담</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A961] mr-2">•</span>
                    <span>비자 연장 지원</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A961] mr-2">•</span>
                    <span>한국어 교육 지원</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A961] mr-2">•</span>
                    <span>문화 적응 프로그램</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              20년 경험과 노하우로<br />
              <span className="text-[#C9A961]">행복한 미래</span>를 함께 만들어갑니다
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              지금 바로 무료 상담을 신청하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-block px-12 py-4 bg-[#C9A961] text-black hover:bg-[#8B6F47] transition-all duration-300 text-lg font-semibold rounded-lg"
              >
                상담 신청하기
              </a>
              <a
                href="/matching"
                className="inline-block px-12 py-4 border-2 border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-black transition-all duration-300 text-lg font-semibold rounded-lg"
              >
                사전 매칭 시작
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
