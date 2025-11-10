import Header from './components/Header';
import SuccessStories from './components/SuccessStories';
import ProfileMatching from './components/ProfileMatching';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Main Banner */}
        <section className="relative bg-[#1a1a1a] text-white overflow-hidden" style={{minHeight: '100vh'}}>
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: "url('/p1.jpg')",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center" style={{minHeight: '100vh'}}>
            <div className="max-w-5xl mx-auto text-center px-8 py-32">
              <div className="mb-6">
                <span className="text-[#D4AF37] text-sm tracking-[0.3em] font-light uppercase">
                  Premium International Marriage
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
                우아한<br />
                <span style={{color: '#D4AF37'}}>인연의 시작</span>
              </h1>

              <p className="text-xl md:text-2xl mb-4 text-gray-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
                사전매칭으로 원하는 짝을 찾아보세요
              </p>

              <div className="flex items-center justify-center gap-3 mb-16 text-sm text-gray-400">
                <span>베트남·몽골 현지 사무소</span>
                <span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span>
                <span>13년 경력</span>
                <span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span>
                <span>200+ 성혼</span>
              </div>

              <a
                href="/matching"
                className="inline-block px-12 py-5 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 text-sm tracking-[0.2em] font-medium uppercase"
              >
                Begin Your Journey
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <span className="text-xs tracking-wider">SCROLL</span>
              <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section id="intro" className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                회사 소개
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 text-center border border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">13년</div>
                <p className="text-gray-700 font-medium">업계 경력</p>
              </div>
              <div className="bg-white p-6 text-center border border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                <p className="text-gray-700 font-medium">성혼 커플</p>
              </div>
              <div className="bg-white p-6 text-center border border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-gray-700 font-medium">고객 만족도</p>
              </div>
              <div className="bg-white p-6 text-center border border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">3개</div>
                <p className="text-gray-700 font-medium">현지 직영 사무소</p>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                저희 회사를 선택해야 하는 이유
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-blue-900 mb-3">현지 직영 사무소</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 베트남 하노이, 호치민 직영</li>
                    <li>• 몽골 울란바토르 직영</li>
                    <li>• 현지 직원 상주 관리</li>
                    <li>• 신부 가족 직접 소통</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-900 mb-3">투명한 진행</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 모든 비용 사전 공개</li>
                    <li>• 추가 비용 일절 없음</li>
                    <li>• 계약서 명확화</li>
                    <li>• 진행 상황 실시간 보고</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-900 mb-3">철저한 사후관리</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 결혼 후 1년간 무료 상담</li>
                    <li>• 비자 연장 지원</li>
                    <li>• 한국어 교육 지원</li>
                    <li>• 문화 적응 프로그램</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Country Comparison Table */}
        <section id="countries" className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                국가별 프로그램 안내
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600">
                현지 직영 사무소를 통한 체계적인 진행
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold">구분</th>
                    <th className="border border-gray-300 px-6 py-4 text-center font-semibold">베트남</th>
                    <th className="border border-gray-300 px-6 py-4 text-center font-semibold">몽골</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-semibold">총 비용</td>
                    <td className="border border-gray-300 px-6 py-4 text-center text-lg font-bold text-red-600">12,000,000원</td>
                    <td className="border border-gray-300 px-6 py-4 text-center text-lg font-bold text-red-600">15,000,000원</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">소요 기간</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">평균 2-3개월</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">평균 3-4개월</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-semibold">현지 사무소</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">하노이, 호치민</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">울란바토르</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">평균 연령</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">23-28세</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">24-29세</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-semibold">특징</td>
                    <td className="border border-gray-300 px-6 py-4">
                      <ul className="text-sm space-y-1">
                        <li>• 가족 중심 문화</li>
                        <li>• 성실하고 근면함</li>
                        <li>• 한국 문화 적응력 우수</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-6 py-4">
                      <ul className="text-sm space-y-1">
                        <li>• 활발하고 적극적</li>
                        <li>• 높은 교육 수준</li>
                        <li>• 한국어 학습 열정</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-semibold">포함 내역</td>
                    <td className="border border-gray-300 px-6 py-4" colSpan={2}>
                      <ul className="text-sm space-y-1">
                        <li>• 현지 왕복 항공료 (1회)</li>
                        <li>• 현지 숙박비 및 식비</li>
                        <li>• 통역 서비스 (맞선 및 가족 방문)</li>
                        <li>• 모든 서류 대행 (결혼 등록, 비자 신청)</li>
                        <li>• 결혼 후 1년 사후관리</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-3">비용 안내</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 위 비용은 모든 필수 항목이 포함된 금액입니다</li>
                <li>• 추가 비용은 일절 발생하지 않습니다</li>
                <li>• 결혼 성사 후 잔금 납부 (계약금 30%, 잔금 70%)</li>
                <li>• 맞선 불발 시 추가 비용 없이 재진행</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Profile Matching */}
        <section id="profiles" className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                회원 프로필
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600">
                현재 등록된 회원님들의 프로필입니다
              </p>
            </div>
            <ProfileMatching />
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                결혼 진행 절차
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600">투명하고 체계적인 6단계 프로세스</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: '무료 상담 및 계약',
                  items: [
                    '전화 또는 방문 상담 (무료)',
                    '희망 조건 및 요구사항 청취',
                    '계약서 작성 (투명한 비용 명시)',
                    '계약금 납부 (총 비용의 30%)',
                  ],
                  duration: '소요기간: 1일',
                },
                {
                  step: 2,
                  title: '프로필 매칭',
                  items: [
                    '현지 사무소에서 신부 후보 선별',
                    '3~5명의 프로필 제공 (사진, 영상)',
                    '카톡/전화로 질문 가능',
                    '마음에 드는 신부 선택',
                  ],
                  duration: '소요기간: 1주일',
                },
                {
                  step: 3,
                  title: '현지 방문 (맞선)',
                  items: [
                    '현지 출국 (3박 4일 ~ 4박 5일)',
                    '통역사 동행 맞선',
                    '신부 가족 방문 및 면담',
                    '결혼 확정',
                  ],
                  duration: '소요기간: 4일',
                },
                {
                  step: 4,
                  title: '서류 준비 및 결혼 신고',
                  items: [
                    '현지 결혼 등록',
                    '한국 결혼 신고',
                    '모든 서류 대행',
                    '잔금 납부 (총 비용의 70%)',
                  ],
                  duration: '소요기간: 2~3주',
                },
                {
                  step: 5,
                  title: '비자 발급 및 입국',
                  items: [
                    '결혼비자(F-6) 신청 대행',
                    '비자 승인 후 한국 입국',
                    '공항 픽업 서비스',
                    '주거지 신고 도움',
                  ],
                  duration: '소요기간: 1~2개월',
                },
                {
                  step: 6,
                  title: '사후관리 (1년 무료)',
                  items: [
                    '정기적인 상담 제공',
                    '비자 연장 지원',
                    '한국어 교육 지원',
                    '문화 적응 상담',
                  ],
                  duration: '기간: 1년',
                },
              ].map((process) => (
                <div
                  key={process.step}
                  className="flex flex-col md:flex-row bg-white border border-gray-300 overflow-hidden"
                >
                  <div className="bg-blue-900 text-white p-6 flex items-center justify-center md:w-32">
                    <div className="text-center">
                      <div className="text-3xl font-bold">STEP</div>
                      <div className="text-5xl font-bold">{process.step}</div>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {process.title}
                    </h3>
                    <ul className="space-y-2 mb-4">
                      {process.items.map((item, idx) => (
                        <li key={idx} className="text-gray-700">
                          → {item}
                        </li>
                      ))}
                    </ul>
                    <div className="text-sm text-blue-600 font-semibold">
                      {process.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section id="success" className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                성공 사례
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600">
                저희를 통해 행복한 결혼을 하신 분들의 이야기
              </p>
            </div>
            <SuccessStories />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                자주 묻는 질문
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
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
                  className="bg-white border border-gray-300 p-6"
                >
                  <h3 className="text-lg font-bold text-blue-900 mb-3">
                    Q. {faq.q}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">A. {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-16 px-4 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-300 p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  무료 상담 신청
                </h3>
                <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">
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
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600"
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
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600"
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
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    문의 내용
                  </label>
                  <textarea
                    rows={4}
                    placeholder="궁금하신 점을 자유롭게 작성해주세요"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold transition-colors"
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
              <div className="bg-white border border-gray-300 p-6 text-center">
                <div className="text-3xl text-blue-600 mb-3">☎</div>
                <h4 className="font-bold text-gray-900 mb-2">전화 상담</h4>
                <p className="text-2xl font-bold text-red-600">1588-0000</p>
                <p className="text-sm text-gray-600 mt-2">
                  평일 09:00-18:00<br />
                  토요일 10:00-15:00
                </p>
              </div>
              <div className="bg-white border border-gray-300 p-6 text-center">
                <div className="text-3xl text-blue-600 mb-3">📍</div>
                <h4 className="font-bold text-gray-900 mb-2">방문 상담</h4>
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
        <footer className="bg-gray-800 text-gray-300 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">회사 정보</h3>
                <ul className="space-y-2 text-sm">
                  <li>회사명: (주)국제결혼정보센터</li>
                  <li>대표: 홍길동</li>
                  <li>사업자등록번호: 000-00-00000</li>
                  <li>결혼중개업 등록번호: 제0000호</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">고객센터</h3>
                <ul className="space-y-2 text-sm">
                  <li>전화: 1588-0000</li>
                  <li>이메일: info@example.com</li>
                  <li>운영시간: 평일 09:00-18:00</li>
                  <li>토요일 10:00-15:00 (일요일 휴무)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">현지 사무소</h3>
                <ul className="space-y-2 text-sm">
                  <li>베트남 하노이 사무소</li>
                  <li>베트남 호치민 사무소</li>
                  <li>몽골 울란바토르 사무소</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                <p>&copy; 2025 국제결혼정보센터. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                  <a href="#" className="hover:text-white">이용약관</a>
                  <a href="#" className="hover:text-white">개인정보처리방침</a>
                  <a href="#" className="hover:text-white">환불정책</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
