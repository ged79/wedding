import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function InsurancePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAFAF8]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 py-8 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              손해배상<span className="text-[#C9A961]">보험</span>
            </h1>
            <p className="text-sm text-gray-600">
              이용자 보호를 위한 보험 가입 현황
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">

            <div className="mb-8 p-4 bg-blue-50 border-l-4 border-[#C9A961] rounded">
              <p className="text-gray-700 leading-relaxed">
                거성 국제 결혼은 「결혼중개업의 관리에 관한 법률」 제24조에 따라
                손해배상책임을 이행하기 위하여 보험에 가입하고 있습니다.
                본 보험은 회사의 고의 또는 과실로 인해 이용자에게 발생한 손해를 보상합니다.
              </p>
            </div>

            <div className="space-y-8 text-gray-700">

              {/* 보험 가입 정보 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  보험 가입 정보
                </h2>
                <div className="bg-[#2C3E50] text-white p-6 rounded-lg space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-[#C9A961] text-sm mb-1">보험사</p>
                      <p className="text-lg font-bold">[보험사명]</p>
                    </div>
                    <div>
                      <p className="text-[#C9A961] text-sm mb-1">증권번호</p>
                      <p className="text-lg font-bold">[증권번호]</p>
                    </div>
                    <div>
                      <p className="text-[#C9A961] text-sm mb-1">보험 기간</p>
                      <p className="text-lg font-bold">2025.01.01 ~ 2026.12.31</p>
                    </div>
                    <div>
                      <p className="text-[#C9A961] text-sm mb-1">보상 한도</p>
                      <p className="text-lg font-bold">1인당 최대 1억원</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-600 pt-4">
                    <p className="text-[#C9A961] text-sm mb-1">피보험자</p>
                    <p className="font-bold">거성 국제 결혼 (대표: 문옥선)</p>
                    <p className="text-sm text-gray-300 mt-1">
                      충북 영동군 영동읍 회동리
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm text-gray-700">
                    <strong className="text-yellow-700">알림:</strong>
                    실제 보험 증권 사본은 사무실에 비치되어 있으며, 이용자 요청 시 언제든지 열람 가능합니다.
                  </p>
                </div>
              </div>

              {/* 보상 범위 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  보상 범위
                </h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    본 보험은 다음과 같은 경우에 발생한 손해를 보상합니다:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* 보상 항목 1 */}
                    <div className="border-2 border-[#C9A961] rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-[#C9A961] rounded-full flex items-center justify-center mr-3">
                          <span className="text-black font-bold text-lg">1</span>
                        </div>
                        <h3 className="font-bold text-[#2C3E50]">허위정보 제공</h3>
                      </div>
                      <p className="text-sm text-gray-600 ml-13">
                        회사가 결혼 상대자에 대한 허위 또는 과장된 정보를 제공하여
                        이용자에게 손해가 발생한 경우
                      </p>
                    </div>

                    {/* 보상 항목 2 */}
                    <div className="border-2 border-gray-300 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-[#2C3E50] rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-lg">2</span>
                        </div>
                        <h3 className="font-bold text-[#2C3E50]">신원조사 부실</h3>
                      </div>
                      <p className="text-sm text-gray-600 ml-13">
                        결혼 상대자의 범죄경력, 혼인관계, 건강상태 등을
                        제대로 확인하지 않아 피해가 발생한 경우
                      </p>
                    </div>

                    {/* 보상 항목 3 */}
                    <div className="border-2 border-gray-300 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-[#2C3E50] rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-lg">3</span>
                        </div>
                        <h3 className="font-bold text-[#2C3E50]">계약 불이행</h3>
                      </div>
                      <p className="text-sm text-gray-600 ml-13">
                        회사가 계약서에 명시된 서비스를 제공하지 않거나
                        중대한 계약 위반으로 인한 손해
                      </p>
                    </div>

                    {/* 보상 항목 4 */}
                    <div className="border-2 border-gray-300 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-[#2C3E50] rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-lg">4</span>
                        </div>
                        <h3 className="font-bold text-[#2C3E50]">개인정보 유출</h3>
                      </div>
                      <p className="text-sm text-gray-600 ml-13">
                        회사의 관리 소홀로 이용자의 개인정보가
                        유출되어 발생한 손해
                      </p>
                    </div>

                    {/* 보상 항목 5 */}
                    <div className="border-2 border-gray-300 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-[#2C3E50] rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-lg">5</span>
                        </div>
                        <h3 className="font-bold text-[#2C3E50]">법령 위반</h3>
                      </div>
                      <p className="text-sm text-gray-600 ml-13">
                        「결혼중개업의 관리에 관한 법률」 등 관련 법령을
                        위반하여 이용자에게 손해가 발생한 경우
                      </p>
                    </div>

                    {/* 보상 항목 6 */}
                    <div className="border-2 border-gray-300 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-[#2C3E50] rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-lg">6</span>
                        </div>
                        <h3 className="font-bold text-[#2C3E50]">중개 과실</h3>
                      </div>
                      <p className="text-sm text-gray-600 ml-13">
                        중개 과정에서 회사의 고의 또는 과실로 인해
                        이용자에게 재산상·정신상 손해가 발생한 경우
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 보상 한도 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  보상 한도액
                </h2>
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#2C3E50] text-white">
                          <th className="border border-gray-300 p-3 text-left">손해 유형</th>
                          <th className="border border-gray-300 p-3 text-center">1인당 보상 한도</th>
                          <th className="border border-gray-300 p-3 text-center">총 보상 한도</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">신체적 손해 (상해, 질병 등)</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-[#C9A961]">1억원</td>
                          <td className="border border-gray-300 p-3 text-center">3억원</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">재산상 손해 (금전적 피해)</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-[#C9A961]">5천만원</td>
                          <td className="border border-gray-300 p-3 text-center">2억원</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">정신적 손해 (위자료)</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-[#C9A961]">3천만원</td>
                          <td className="border border-gray-300 p-3 text-center">1억원</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">개인정보 유출</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-[#C9A961]">2천만원</td>
                          <td className="border border-gray-300 p-3 text-center">5천만원</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-blue-50 p-4 rounded">
                    <p className="text-sm leading-relaxed">
                      <strong className="text-[#2C3E50]">참고:</strong>
                      보상 한도액을 초과하는 손해에 대해서는 회사가 직접 배상합니다.
                      보험 한도액은 최소 보장 금액이며, 실제 손해액이 더 클 경우 회사가 추가 보상할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 보상 제외 사항 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  보상 제외 사항
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    다음의 경우에는 보험 보상이 제외됩니다:
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>이용자가 허위 정보를 제공하여 발생한 손해</li>
                    <li>이용자의 고의 또는 중대한 과실로 인한 손해</li>
                    <li>전쟁, 혁명, 내란, 폭동 등으로 인한 손해</li>
                    <li>지진, 분화 등 천재지변으로 인한 손해</li>
                    <li>계약 체결 이전에 발생한 사고</li>
                    <li>결혼 상대자의 단독 행위로 인한 손해 (단, 회사의 신원조사 부실이 인정되는 경우 제외)</li>
                    <li>형사상 범죄행위로 인한 손해 (단, 회사의 고의·과실이 인정되는 경우 보상 가능)</li>
                  </ul>
                </div>
              </div>

              {/* 보험금 청구 절차 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  보험금 청구 절차
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-[#C9A961] text-black font-bold px-3 py-2 rounded mr-4 flex-shrink-0 w-20 text-center">
                          STEP 1
                        </div>
                        <div>
                          <p className="font-bold text-[#2C3E50] mb-1">사고 발생 통보</p>
                          <p className="text-sm text-gray-600">
                            손해 발생 즉시 회사에 통보 (전화, 이메일, 방문)<br/>
                            사고 발생 일시, 장소, 경위, 피해 내용 등을 상세히 설명
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#C9A961] text-black font-bold px-3 py-2 rounded mr-4 flex-shrink-0 w-20 text-center">
                          STEP 2
                        </div>
                        <div>
                          <p className="font-bold text-[#2C3E50] mb-1">보험금 청구서 작성</p>
                          <p className="text-sm text-gray-600">
                            회사가 제공하는 보험금 청구서 양식 작성<br/>
                            필요 서류: 신분증 사본, 계약서 사본, 피해 입증 자료
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#C9A961] text-black font-bold px-3 py-2 rounded mr-4 flex-shrink-0 w-20 text-center">
                          STEP 3
                        </div>
                        <div>
                          <p className="font-bold text-[#2C3E50] mb-1">증빙 서류 제출</p>
                          <p className="text-sm text-gray-600">
                            손해를 입증할 수 있는 서류 제출<br/>
                            예: 의료비 영수증, 진단서, 계약서, 통장 내역, 증인 진술서 등
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#C9A961] text-black font-bold px-3 py-2 rounded mr-4 flex-shrink-0 w-20 text-center">
                          STEP 4
                        </div>
                        <div>
                          <p className="font-bold text-[#2C3E50] mb-1">손해사정 및 심사</p>
                          <p className="text-sm text-gray-600">
                            보험사의 손해사정사가 피해 내용 및 보상 범위 조사<br/>
                            필요 시 현장 조사, 관계자 면담 진행 (약 2~4주 소요)
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#C9A961] text-black font-bold px-3 py-2 rounded mr-4 flex-shrink-0 w-20 text-center">
                          STEP 5
                        </div>
                        <div>
                          <p className="font-bold text-[#2C3E50] mb-1">보험금 지급</p>
                          <p className="text-sm text-gray-600">
                            심사 완료 후 보험금 지급 결정<br/>
                            승인 시 지정 계좌로 입금 (결정일로부터 7영업일 이내)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-red-200 bg-red-50 p-4 rounded">
                    <p className="text-sm leading-relaxed text-red-800">
                      <strong>중요:</strong> 손해 발생 시 가능한 한 빨리 통보해주셔야 원활한 보상이 가능합니다.
                      사고 발생 후 3년이 경과하면 보험금 청구권이 소멸될 수 있으니 유의하시기 바랍니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 법적 근거 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  법적 근거
                </h2>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="font-bold text-[#2C3E50] mb-3">
                      「결혼중개업의 관리에 관한 법률」 제24조 (손해배상책임의 이행 보증)
                    </h3>
                    <div className="text-sm text-gray-700 space-y-2 border-l-4 border-[#C9A961] pl-4">
                      <p>
                        ① 국제결혼중개업자는 국제결혼중개를 의뢰한 당사자에게 발생한 재산상 손해 및
                        생명·신체상 손해를 배상할 책임을 이행하기 위하여 영업 보증금의 예치 또는
                        손해배상책임에 관한 보험이나 공제에의 가입 등 필요한 조치를 하여야 한다.
                      </p>
                      <p>
                        ② 국제결혼중개업자가 제1항에 따른 조치를 하지 아니한 경우에는
                        국제결혼중개를 업으로 할 수 없다.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="font-bold text-[#2C3E50] mb-3">
                      「결혼중개업의 관리에 관한 법률 시행령」 제18조 (보험 등의 가입)
                    </h3>
                    <div className="text-sm text-gray-700 border-l-4 border-[#C9A961] pl-4">
                      <p>
                        법 제24조제1항에서 "손해배상책임에 관한 보험이나 공제"란
                        결혼중개 이용자 1명당 1억원 이상을 보상하는 보험 또는 공제를 말한다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 문의 */}
              <div className="bg-[#2C3E50] text-white p-6 rounded-lg mt-8">
                <h3 className="text-lg font-bold mb-4 text-[#C9A961]">보험금 청구 및 문의</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-300 mb-1">회사 연락처</p>
                    <p className="font-bold">거성 국제 결혼</p>
                    <p className="text-sm">대표: 문옥선</p>
                    <p className="text-sm">전화: 1588-0000</p>
                    <p className="text-sm">이메일: info@geosung-wedding.com</p>
                    <p className="text-sm">주소: 충북 영동군 영동읍 회동리</p>
                  </div>
                  <div className="border-t border-gray-600 pt-3">
                    <p className="text-sm text-gray-300 mb-1">보험사 연락처</p>
                    <p className="font-bold">[보험사명]</p>
                    <p className="text-sm">고객센터: [전화번호]</p>
                    <p className="text-sm">홈페이지: [웹사이트 주소]</p>
                  </div>
                </div>
              </div>

              {/* 부칙 */}
              <div className="border-t-2 border-gray-300 pt-6 mt-8">
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4">부칙</h2>
                <p className="text-gray-600 mb-2">본 보험 정보는 2025년 1월 1일 기준입니다.</p>
                <p className="text-sm text-gray-500">
                  ※ 보험 갱신 또는 변경 사항이 있을 경우 즉시 홈페이지를 통해 공지하며,
                  기존 계약 고객에게는 개별 통지합니다.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
