import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function RefundPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAFAF8]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 py-8 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              환불<span className="text-[#C9A961]">정책</span>
            </h1>
            <p className="text-sm text-gray-600">
              거성 국제 결혼 계약 해제 및 환불 규정
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">

            <div className="mb-8 p-4 bg-blue-50 border-l-4 border-[#C9A961] rounded">
              <p className="text-gray-700 leading-relaxed">
                본 환불정책은 「결혼중개업의 관리에 관한 법률」 제14조 및 동법 시행령 제12조,
                「전자상거래 등에서의 소비자보호에 관한 법률」에 따라 수립되었으며,
                이용자의 정당한 권리를 보호하기 위해 명확하고 투명하게 운영됩니다.
              </p>
            </div>

            <div className="space-y-8 text-gray-700">

              {/* 제1조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제1조 (계약 체결 철회)
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    이용자는 계약서를 받은 날부터 <strong className="text-[#C9A961]">7일 이내</strong>에
                    서면으로 계약의 체결을 철회할 수 있습니다. (「결혼중개업의 관리에 관한 법률」 제14조)
                  </p>

                  <div className="bg-[#2C3E50] text-white p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-3 text-[#C9A961]">7일 이내 계약 철회</h3>
                    <div className="space-y-2">
                      <p className="flex items-start">
                        <span className="text-[#C9A961] mr-2">•</span>
                        <span>기간: 계약서 수령일로부터 7일 이내</span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-[#C9A961] mr-2">•</span>
                        <span>방법: 서면 통지 (이메일, 우편, 팩스 등)</span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-[#C9A961] mr-2">•</span>
                        <span>환불: 납입한 금액 전액 환불 (3영업일 이내)</span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-[#C9A961] mr-2">•</span>
                        <span>위약금: 없음</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-4">
                    ※ 단, 이용자의 책임 있는 사유로 서비스가 훼손된 경우에는 계약 철회가 제한될 수 있습니다.
                  </p>
                </div>
              </div>

              {/* 제2조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제2조 (단계별 환불 기준)
                </h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    7일 경과 후 계약을 해제하는 경우, 진행 단계에 따라 다음과 같이 환불됩니다.
                  </p>

                  {/* 1단계 */}
                  <div className="border-2 border-[#C9A961] rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#C9A961] text-black px-4 py-2 rounded font-bold mr-3">
                        1단계
                      </div>
                      <h3 className="text-lg font-bold text-[#2C3E50]">상담 및 계약 단계</h3>
                    </div>
                    <div className="ml-4 space-y-2">
                      <p className="text-sm">
                        <strong>기간:</strong> 계약 체결 후 ~ 상대방 프로필 제공 전
                      </p>
                      <p className="text-sm">
                        <strong>환불액:</strong> <span className="text-[#C9A961] font-bold text-lg">계약금액의 90%</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        (실제 발생한 비용 및 수수료 10% 공제)
                      </p>
                    </div>
                  </div>

                  {/* 2단계 */}
                  <div className="border-2 border-gray-300 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#2C3E50] text-white px-4 py-2 rounded font-bold mr-3">
                        2단계
                      </div>
                      <h3 className="text-lg font-bold text-[#2C3E50]">프로필 제공 단계</h3>
                    </div>
                    <div className="ml-4 space-y-2">
                      <p className="text-sm">
                        <strong>기간:</strong> 상대방 프로필 제공 후 ~ 첫 만남 전
                      </p>
                      <p className="text-sm">
                        <strong>환불액:</strong> <span className="text-[#C9A961] font-bold text-lg">계약금액의 70%</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        (프로필 조사비용 및 수수료 30% 공제)
                      </p>
                    </div>
                  </div>

                  {/* 3단계 */}
                  <div className="border-2 border-gray-300 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#2C3E50] text-white px-4 py-2 rounded font-bold mr-3">
                        3단계
                      </div>
                      <h3 className="text-lg font-bold text-[#2C3E50]">첫 만남 진행 단계</h3>
                    </div>
                    <div className="ml-4 space-y-2">
                      <p className="text-sm">
                        <strong>기간:</strong> 첫 만남 진행 후 ~ 결혼 결정 전
                      </p>
                      <p className="text-sm">
                        <strong>환불액:</strong> <span className="text-[#C9A961] font-bold text-lg">계약금액의 50%</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        (왕복 항공료, 숙박비, 통역비 등 실제 발생 비용 및 수수료 공제)
                      </p>
                    </div>
                  </div>

                  {/* 4단계 */}
                  <div className="border-2 border-gray-300 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#2C3E50] text-white px-4 py-2 rounded font-bold mr-3">
                        4단계
                      </div>
                      <h3 className="text-lg font-bold text-[#2C3E50]">결혼 준비 단계</h3>
                    </div>
                    <div className="ml-4 space-y-2">
                      <p className="text-sm">
                        <strong>기간:</strong> 결혼 결정 후 ~ 혼인신고 전
                      </p>
                      <p className="text-sm">
                        <strong>환불액:</strong> <span className="text-[#C9A961] font-bold text-lg">계약금액의 30%</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        (서류 준비비, 행정 대행비, 예식 준비비 등 실제 발생 비용 공제)
                      </p>
                    </div>
                  </div>

                  {/* 5단계 */}
                  <div className="border-2 border-gray-300 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#2C3E50] text-white px-4 py-2 rounded font-bold mr-3">
                        5단계
                      </div>
                      <h3 className="text-lg font-bold text-[#2C3E50]">혼인신고 완료 후</h3>
                    </div>
                    <div className="ml-4 space-y-2">
                      <p className="text-sm">
                        <strong>기간:</strong> 혼인신고 완료 후
                      </p>
                      <p className="text-sm">
                        <strong>환불액:</strong> <span className="text-red-600 font-bold text-lg">환불 불가</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        (계약 목적 완전 달성으로 환불 대상 아님)
                      </p>
                      <p className="text-sm mt-2 bg-blue-50 p-3 rounded">
                        ※ 혼인신고 후에는 1년간 무료 사후관리 서비스를 제공합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 제3조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제3조 (회사의 귀책사유로 인한 해제)
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    다음의 경우 이용자는 계약을 즉시 해제할 수 있으며, 납입한 금액 전액을 환불받을 수 있습니다.
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>회사가 허위 또는 과장된 정보를 제공한 경우</li>
                    <li>회사가 계약 내용을 이행하지 않은 경우</li>
                    <li>회사가 「결혼중개업의 관리에 관한 법률」을 위반한 경우</li>
                    <li>상대방의 신상정보가 사실과 다른 경우</li>
                    <li>회사의 고의 또는 과실로 서비스 제공이 불가능한 경우</li>
                  </ul>

                  <div className="bg-red-50 p-4 rounded-lg mt-4">
                    <p className="text-sm leading-relaxed">
                      <strong className="text-red-700">중요:</strong> 회사의 귀책사유로 인한 계약 해제 시,
                      이용자는 납입 금액 전액을 환불받을 수 있으며, 별도의 손해배상을 청구할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 제4조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제4조 (환불 불가 사유)
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    다음의 경우에는 환불이 제한되거나 불가합니다:
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>이용자가 허위 정보를 제공하여 계약이 해제된 경우</li>
                    <li>이용자의 변심으로 인해 서비스를 거부한 경우 (단계별 환불 기준 적용)</li>
                    <li>이용자가 상대방 또는 회사에 폭언, 폭행 등 불법행위를 한 경우</li>
                    <li>이용자가 정당한 사유 없이 상대방과의 만남을 반복적으로 거부한 경우</li>
                    <li>혼인신고가 완료된 경우</li>
                  </ul>
                </div>
              </div>

              {/* 제5조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제5조 (환불 절차 및 방법)
                </h2>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-[#2C3E50] mb-4 text-lg">환불 신청 절차</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-[#C9A961] text-black font-bold px-3 py-1 rounded mr-3 flex-shrink-0">
                          STEP 1
                        </div>
                        <div>
                          <p className="font-bold text-[#2C3E50]">환불 신청</p>
                          <p className="text-sm text-gray-600">
                            서면(이메일, 우편, 팩스) 또는 전화로 환불 의사를 명확히 전달
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#C9A961] text-black font-bold px-3 py-1 rounded mr-3 flex-shrink-0">
                          STEP 2
                        </div>
                        <div>
                          <p className="font-bold text-[#2C3E50]">진행 단계 확인</p>
                          <p className="text-sm text-gray-600">
                            회사가 현재 서비스 진행 단계를 확인하고 환불 가능 금액 산정
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#C9A961] text-black font-bold px-3 py-1 rounded mr-3 flex-shrink-0">
                          STEP 3
                        </div>
                        <div>
                          <p className="font-bold text-[#2C3E50]">환불 동의</p>
                          <p className="text-sm text-gray-600">
                            환불 금액 및 공제 내역을 이용자에게 설명하고 동의 획득
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#C9A961] text-black font-bold px-3 py-1 rounded mr-3 flex-shrink-0">
                          STEP 4
                        </div>
                        <div>
                          <p className="font-bold text-[#2C3E50]">환불 처리</p>
                          <p className="text-sm text-gray-600">
                            동의서 작성 후 7영업일 이내에 지정 계좌로 환불금 입금
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-blue-50 rounded">
                    <p className="text-sm leading-relaxed">
                      <strong className="text-[#2C3E50]">환불 기간:</strong><br/>
                      • 계약 철회 (7일 이내): 3영업일 이내<br/>
                      • 일반 환불: 환불 동의 후 7영업일 이내<br/>
                      • 신용카드 결제 시: 카드사 정책에 따라 3~7영업일 추가 소요 가능
                    </p>
                  </div>
                </div>
              </div>

              {/* 제6조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제6조 (분쟁 해결)
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    환불과 관련하여 이용자와 회사 간 분쟁이 발생한 경우:
                  </p>

                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>우선 당사자 간 협의를 통해 해결합니다.</li>
                    <li>협의가 이루어지지 않을 경우, 한국소비자원 또는 결혼중개업 분쟁조정위원회에
                    조정을 신청할 수 있습니다.</li>
                    <li>소송이 필요한 경우, 회사의 소재지 관할 법원에 제기할 수 있습니다.</li>
                  </ol>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 p-4 rounded">
                      <p className="font-bold text-[#2C3E50] mb-2">한국소비자원</p>
                      <p className="text-sm">☎ 1372 (소비자상담센터)</p>
                      <p className="text-xs text-gray-600 mt-1">www.kca.go.kr</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <p className="font-bold text-[#2C3E50] mb-2">여성가족부</p>
                      <p className="text-sm">☎ 1577-1366 (다누리콜센터)</p>
                      <p className="text-xs text-gray-600 mt-1">www.mogef.go.kr</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 제7조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제7조 (실비 산정 기준)
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    환불 시 공제되는 실제 발생 비용은 다음과 같이 산정됩니다:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#2C3E50] text-white">
                          <th className="border border-gray-300 p-3 text-left">비용 항목</th>
                          <th className="border border-gray-300 p-3 text-left">산정 기준</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">상담 및 조사비</td>
                          <td className="border border-gray-300 p-3">계약금액의 10%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">프로필 작성비</td>
                          <td className="border border-gray-300 p-3">계약금액의 15%</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">항공료</td>
                          <td className="border border-gray-300 p-3">실제 구매 비용 (영수증 기준)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">숙박비</td>
                          <td className="border border-gray-300 p-3">실제 결제 금액 (영수증 기준)</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">통역비</td>
                          <td className="border border-gray-300 p-3">1일당 10만원</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">서류 대행비</td>
                          <td className="border border-gray-300 p-3">실제 발생 비용 + 수수료 5만원</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-gray-600 mt-4">
                    ※ 모든 실비는 증빙서류(영수증, 계약서 등)를 기준으로 산정되며,
                    이용자 요청 시 해당 서류를 제공합니다.
                  </p>
                </div>
              </div>

              {/* 부칙 */}
              <div className="border-t-2 border-gray-300 pt-6 mt-8">
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4">부칙</h2>
                <p className="text-gray-600">본 환불정책은 2025년 1월 1일부터 시행됩니다.</p>
              </div>

              {/* 문의 */}
              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-bold text-[#2C3E50] mb-3">환불 관련 문의</h3>
                <p className="text-gray-700 mb-2">환불 절차 및 금액에 대한 문의사항이 있으시면 아래로 연락주시기 바랍니다.</p>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><strong>상호:</strong> 거성 국제 결혼</p>
                  <p><strong>대표:</strong> 문옥선</p>
                  <p><strong>주소:</strong> 충북 영동군 영동읍 회동리</p>
                  <p><strong>전화:</strong> 1588-0000</p>
                  <p><strong>이메일:</strong> info@geosung-wedding.com</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
