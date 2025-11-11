'use client';

import { useState } from 'react';
import Header from '../components/Header';
import FloatingButtons from '../components/FloatingButtons';
import Footer from '../components/Footer';

export default function ProgramsPage() {
  const [selectedCountry, setSelectedCountry] = useState('vietnam');

  return (
    <>
      <Header />
      <FloatingButtons />
      <main className="min-h-screen bg-[#FAFAF8]">
        {/* Hero Section - Compact */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 py-8 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              국가별 <span className="text-[#C9A961]">결혼 프로그램</span>
            </h1>
            <p className="text-sm text-gray-600">
              베트남, 몽골 - 국가별 맞춤 프로그램 안내
            </p>
          </div>
        </section>

        {/* Country Tabs */}
        <section className="py-8 px-4 bg-white sticky top-[72px] z-40 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setSelectedCountry('vietnam')}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  selectedCountry === 'vietnam'
                    ? 'bg-[#C9A961] text-black shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                🇻🇳 베트남<br />프로그램
              </button>
              <button
                onClick={() => setSelectedCountry('mongolia')}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  selectedCountry === 'mongolia'
                    ? 'bg-[#C9A961] text-black shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                🇲🇳 몽골<br />프로그램
              </button>
            </div>
          </div>
        </section>

        {/* Vietnam Program */}
        {selectedCountry === 'vietnam' && (
          <div className="animate-fade-in">
            {/* Overview */}
            <section className="py-16 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                    베트남 국제결혼 프로그램
                  </h2>
                  <p className="text-lg text-gray-600">
                    한국 남성에게 가장 인기있는 국제결혼 국가
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#C9A961]">
                    <h3 className="font-bold text-lg mb-2 text-[#C9A961]">문화적 친밀도</h3>
                    <p className="text-gray-700">유교 문화권으로 한국과 가치관이 유사하며 가정을 중시합니다</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#C9A961]">
                    <h3 className="font-bold text-lg mb-2 text-[#C9A961]">언어 학습</h3>
                    <p className="text-gray-700">한국어 학습 열의가 높고 빠른 적응력을 보입니다</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#C9A961]">
                    <h3 className="font-bold text-lg mb-2 text-[#C9A961]">경제적 안정</h3>
                    <p className="text-gray-700">합리적인 비용으로 안정적인 진행이 가능합니다</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 진행 절차 */}
            <section className="py-16 px-4 bg-[#FAFAF8]">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">진행 절차</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { step: 1, title: '상담 및 계약', desc: '무료 상담 후 계약 진행', duration: '1일' },
                    { step: 2, title: '서류 준비', desc: '필요 서류 준비 및 제출', duration: '1주일' },
                    { step: 3, title: '베트남 방문', desc: '현지 방문 및 맞선', duration: '3-4일' },
                    { step: 4, title: '결혼 및 귀국', desc: '결혼식 및 비자 진행', duration: '2-3개월' },
                  ].map((item) => (
                    <div key={item.step} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-[#C9A961] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                        {item.step}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-700 mb-3">{item.desc}</p>
                      <p className="text-sm text-[#C9A961] font-semibold">소요기간: {item.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 비용 안내 */}
            <section className="py-16 px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">비용 안내</h2>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-[#C9A961]">
                  <div className="bg-[#C9A961] text-black p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-center">베트남 기본 패키지</h3>
                  </div>
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <p className="text-3xl md:text-5xl font-bold text-[#C9A961] mb-2">1,200만원~</p>
                      <p className="text-gray-600">* 지역 및 옵션에 따라 변동</p>
                    </div>
                    <div className="space-y-4 mb-8">
                      <h4 className="font-bold text-lg border-b pb-2">포함 내역</h4>
                      <ul className="space-y-2">
                        {[
                          '맞선 주선 및 통역',
                          '현지 숙박 및 차량',
                          '결혼식 진행',
                          '서류 공증 및 번역',
                          '초청장 발급 지원',
                          '1년 무료 사후관리',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-lg border-b pb-2">별도 비용 (고객 부담)</h4>
                      <ul className="space-y-2">
                        {[
                          '왕복 항공권 (약 60만원)',
                          '비자 수수료 (약 30만원)',
                          '혼인신고 비용',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 준비 서류 */}
            <section className="py-16 px-4 bg-[#FAFAF8]">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">필요 서류</h2>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-xl mb-4 text-[#C9A961]">한국 남성 준비 서류</h3>
                      <ul className="space-y-2 text-gray-700">
                        {[
                          '여권 (유효기간 6개월 이상)',
                          '가족관계증명서',
                          '혼인관계증명서',
                          '기본증명서',
                          '주민등록등본',
                          '건강진단서',
                          '재직증명서 (또는 사업자등록증)',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#C9A961] mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-4 text-[#C9A961]">베트남 여성 준비 서류</h3>
                      <p className="text-sm text-gray-600 mb-4">* 현지 사무소에서 확인 및 준비</p>
                      <ul className="space-y-2 text-gray-700">
                        {[
                          '여권',
                          '가족관계증명서',
                          '혼인관계증명서',
                          '출생증명서',
                          '건강진단서',
                          '범죄경력조회서',
                          '부모 동의서',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#C9A961] mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Mongolia Program */}
        {selectedCountry === 'mongolia' && (
          <div className="animate-fade-in">
            {/* Overview */}
            <section className="py-16 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                    몽골 국제결혼 프로그램
                  </h2>
                  <p className="text-xl text-gray-600">
                    외모와 성격이 우수한 몽골 여성과의 결혼
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#C9A961]">
                    <h3 className="font-bold text-lg mb-2 text-[#C9A961]">신체적 매력</h3>
                    <p className="text-gray-700">평균 키가 크고 외모가 뛰어난 것으로 알려져 있습니다</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#C9A961]">
                    <h3 className="font-bold text-lg mb-2 text-[#C9A961]">교육 수준</h3>
                    <p className="text-gray-700">고학력자가 많으며 한국 문화에 대한 이해도가 높습니다</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#C9A961]">
                    <h3 className="font-bold text-lg mb-2 text-[#C9A961]">성실함</h3>
                    <p className="text-gray-700">근면 성실하며 가정을 잘 돌보는 성향이 강합니다</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 진행 절차 */}
            <section className="py-16 px-4 bg-[#FAFAF8]">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">진행 절차</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { step: 1, title: '상담 및 계약', desc: '무료 상담 후 계약 진행', duration: '1일' },
                    { step: 2, title: '서류 준비', desc: '필요 서류 준비 및 제출', duration: '1주일' },
                    { step: 3, title: '몽골 방문', desc: '현지 방문 및 맞선', duration: '3-5일' },
                    { step: 4, title: '결혼 및 귀국', desc: '결혼식 및 비자 진행', duration: '2-3개월' },
                  ].map((item) => (
                    <div key={item.step} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-[#C9A961] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                        {item.step}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-700 mb-3">{item.desc}</p>
                      <p className="text-sm text-[#C9A961] font-semibold">소요기간: {item.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 비용 안내 */}
            <section className="py-16 px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">비용 안내</h2>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-[#C9A961]">
                  <div className="bg-[#C9A961] text-black p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-center">몽골 기본 패키지</h3>
                  </div>
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <p className="text-3xl md:text-5xl font-bold text-[#C9A961] mb-2">1,400만원~</p>
                      <p className="text-gray-600">* 지역 및 옵션에 따라 변동</p>
                    </div>
                    <div className="space-y-4 mb-8">
                      <h4 className="font-bold text-lg border-b pb-2">포함 내역</h4>
                      <ul className="space-y-2">
                        {[
                          '맞선 주선 및 통역',
                          '현지 숙박 및 차량',
                          '결혼식 진행',
                          '서류 공증 및 번역',
                          '초청장 발급 지원',
                          '1년 무료 사후관리',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-lg border-b pb-2">별도 비용 (고객 부담)</h4>
                      <ul className="space-y-2">
                        {[
                          '왕복 항공권 (약 80만원)',
                          '비자 수수료 (약 30만원)',
                          '혼인신고 비용',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 준비 서류 */}
            <section className="py-16 px-4 bg-[#FAFAF8]">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">필요 서류</h2>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-xl mb-4 text-[#C9A961]">한국 남성 준비 서류</h3>
                      <ul className="space-y-2 text-gray-700">
                        {[
                          '여권 (유효기간 6개월 이상)',
                          '가족관계증명서',
                          '혼인관계증명서',
                          '기본증명서',
                          '주민등록등본',
                          '건강진단서',
                          '재직증명서 (또는 사업자등록증)',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#C9A961] mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-4 text-[#C9A961]">몽골 여성 준비 서류</h3>
                      <p className="text-sm text-gray-600 mb-4">* 현지 사무소에서 확인 및 준비</p>
                      <ul className="space-y-2 text-gray-700">
                        {[
                          '여권',
                          '가족관계증명서',
                          '혼인관계증명서',
                          '출생증명서',
                          '건강진단서',
                          '범죄경력조회서',
                          '부모 동의서',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#C9A961] mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* CTA */}
        <section className="py-16 px-4 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              국가별 프로그램에 대해<br />
              <span className="text-[#C9A961]">더 자세히 알고 싶으신가요?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              전문 상담사가 맞춤 상담을 제공합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-block px-12 py-4 bg-[#C9A961] text-black hover:bg-[#8B6F47] transition-all duration-300 text-lg font-semibold rounded-lg"
              >
                상담 신청하기
              </a>
              <a
                href="tel:1588-0000"
                className="inline-block px-12 py-4 border-2 border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-black transition-all duration-300 text-lg font-semibold rounded-lg"
              >
                📞 전화 상담
              </a>
            </div>
          </div>
        </section>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out;
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
