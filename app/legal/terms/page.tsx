import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAFAF8]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 py-8 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              이용<span className="text-[#C9A961]">약관</span>
            </h1>
            <p className="text-sm text-gray-600">
              거성 국제 결혼 서비스 이용약관
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">

            <div className="space-y-8 text-gray-700">

              {/* 제1조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제1조 (목적)
                </h2>
                <p className="leading-relaxed">
                  본 약관은 거성 국제 결혼(이하 "회사"라 함)이 제공하는 국제결혼중개 서비스(이하 "서비스"라 함)의 이용과 관련하여
                  회사와 이용자 간의 권리, 의무 및 책임사항, 서비스 이용조건 및 절차 등 기본적인 사항을 규정함을 목적으로 합니다.
                </p>
              </div>

              {/* 제2조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제2조 (용어의 정의)
                </h2>
                <div className="space-y-2">
                  <p className="leading-relaxed">
                    <strong className="text-[#2C3E50]">1. "국제결혼중개"</strong>란 결혼중개업의 관리에 관한 법률 제2조 제2호에 따른
                    국내에 거주하는 대한민국 국민과 외국인 간의 결혼을 중개하는 행위를 말합니다.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-[#2C3E50]">2. "이용자"</strong>란 회사와 국제결혼중개 계약을 체결하고
                    본 약관에 따라 서비스를 이용하는 고객을 말합니다.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-[#2C3E50]">3. "결혼당사자"</strong>란 이용자 및 이용자와 결혼을 목적으로
                    회사의 중개를 통해 만나게 되는 외국인을 말합니다.
                  </p>
                </div>
              </div>

              {/* 제3조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제3조 (약관의 명시 및 설명)
                </h2>
                <div className="space-y-2">
                  <p className="leading-relaxed">
                    1. 회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 사업장 내에 게시하거나
                    인터넷 홈페이지에 게재합니다.
                  </p>
                  <p className="leading-relaxed">
                    2. 회사는 계약 체결 전 이용자에게 본 약관의 내용을 충분히 설명하고,
                    이용자가 이를 이해하였음을 확인합니다.
                  </p>
                  <p className="leading-relaxed">
                    3. 회사는 「결혼중개업의 관리에 관한 법률」, 「전자상거래 등에서의 소비자보호에 관한 법률」,
                    「약관의 규제에 관한 법률」 등 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
                  </p>
                </div>
              </div>

              {/* 제4조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제4조 (서비스의 내용)
                </h2>
                <div className="space-y-2">
                  <p className="leading-relaxed">회사가 제공하는 서비스는 다음과 같습니다:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>결혼 상대자의 소개 및 알선</li>
                    <li>결혼당사자의 신원 및 신상정보 확인</li>
                    <li>결혼당사자 간의 의사소통 지원 (통역 서비스)</li>
                    <li>결혼에 필요한 서류 준비 및 행정절차 대행</li>
                    <li>현지 방문 및 혼인신고 지원</li>
                    <li>결혼 이후 정착 지원 및 상담</li>
                  </ul>
                </div>
              </div>

              {/* 제5조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제5조 (계약의 성립)
                </h2>
                <div className="space-y-2">
                  <p className="leading-relaxed">
                    1. 계약은 이용자가 회사의 서비스 이용을 신청하고, 회사가 이를 승낙함으로써 성립합니다.
                  </p>
                  <p className="leading-relaxed">
                    2. 회사는 계약 체결 시 다음 사항을 서면으로 제공합니다:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>회사의 상호, 주소, 전화번호, 등록번호</li>
                    <li>서비스 내용 및 제공 절차</li>
                    <li>서비스 이용료 및 납부방법</li>
                    <li>계약해제 및 환불 조건</li>
                    <li>손해배상책임 및 보험가입 사항</li>
                  </ul>
                </div>
              </div>

              {/* 제6조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제6조 (신상정보의 제공)
                </h2>
                <div className="space-y-2">
                  <p className="leading-relaxed">
                    1. 회사는 결혼당사자에게 상대방의 다음 정보를 사전에 제공합니다:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>성명, 생년월일, 주소, 직업, 학력</li>
                    <li>혼인 관계 증명서, 가족관계 증명서</li>
                    <li>건강진단서 (전염병, 정신질환 등)</li>
                    <li>범죄경력증명서</li>
                    <li>본인의 최근 사진</li>
                  </ul>
                  <p className="leading-relaxed">
                    2. 회사는 위 정보의 사실 여부를 확인하고, 허위 또는 과장된 정보를 제공하지 않습니다.
                  </p>
                  <p className="leading-relaxed">
                    3. 이용자가 요구하는 경우 회사는 위 서류의 원본 또는 사본을 제공합니다.
                  </p>
                </div>
              </div>

              {/* 제7조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제7조 (이용자의 의무)
                </h2>
                <div className="space-y-2">
                  <p className="leading-relaxed">
                    1. 이용자는 회사에 정확하고 진실된 정보를 제공하여야 합니다.
                  </p>
                  <p className="leading-relaxed">
                    2. 이용자는 결혼상대자를 선택할 자유가 있으며, 강제로 결혼을 결정당하지 않습니다.
                  </p>
                  <p className="leading-relaxed">
                    3. 이용자는 서비스 이용 중 알게 된 상대방의 개인정보를 보호하고,
                    부당한 목적으로 사용하지 않습니다.
                  </p>
                  <p className="leading-relaxed">
                    4. 이용자는 관계 법령과 본 약관을 준수하여야 합니다.
                  </p>
                </div>
              </div>

              {/* 제8조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제8조 (회사의 의무)
                </h2>
                <div className="space-y-2">
                  <p className="leading-relaxed">
                    1. 회사는 「결혼중개업의 관리에 관한 법률」을 준수하여 서비스를 제공합니다.
                  </p>
                  <p className="leading-relaxed">
                    2. 회사는 결혼당사자의 신상정보를 사실에 근거하여 정확하게 제공합니다.
                  </p>
                  <p className="leading-relaxed">
                    3. 회사는 이용자의 개인정보를 보호하고, 관련 법령을 준수합니다.
                  </p>
                  <p className="leading-relaxed">
                    4. 회사는 손해배상책임을 이행하기 위하여 보험에 가입합니다.
                  </p>
                  <p className="leading-relaxed">
                    5. 회사는 계약서 사본을 이용자에게 교부합니다.
                  </p>
                </div>
              </div>

              {/* 제9조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제9조 (금지행위)
                </h2>
                <div className="space-y-2">
                  <p className="leading-relaxed">회사 및 이용자는 다음 행위를 하여서는 안 됩니다:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>허위 또는 과장된 정보 제공</li>
                    <li>결혼당사자의 자유의사에 반한 강요</li>
                    <li>미성년자에 대한 결혼 중개</li>
                    <li>인신매매 또는 성매매 관련 행위</li>
                    <li>금품 수수 또는 부당한 금전 요구</li>
                    <li>개인정보의 무단 사용 또는 유출</li>
                  </ul>
                </div>
              </div>

              {/* 제10조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제10조 (계약의 해제 및 환불)
                </h2>
                <div className="space-y-2">
                  <p className="leading-relaxed">
                    계약의 해제 및 환불에 관한 사항은 별도의 「환불정책」에 따릅니다.
                  </p>
                </div>
              </div>

              {/* 제11조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제11조 (손해배상)
                </h2>
                <div className="space-y-2">
                  <p className="leading-relaxed">
                    1. 회사가 고의 또는 과실로 이용자에게 손해를 입힌 경우, 회사는 그 손해를 배상합니다.
                  </p>
                  <p className="leading-relaxed">
                    2. 손해배상의 범위와 절차는 「결혼중개업의 관리에 관한 법률」 및 관련 법령에 따릅니다.
                  </p>
                  <p className="leading-relaxed">
                    3. 회사는 손해배상책임 이행을 위해 보험에 가입하고 있으며,
                    자세한 사항은 「손해배상보험」 페이지에서 확인할 수 있습니다.
                  </p>
                </div>
              </div>

              {/* 제12조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제12조 (분쟁 해결)
                </h2>
                <div className="space-y-2">
                  <p className="leading-relaxed">
                    1. 회사와 이용자 간 발생한 분쟁은 상호 협의하여 원만하게 해결합니다.
                  </p>
                  <p className="leading-relaxed">
                    2. 협의가 이루어지지 않을 경우, 「결혼중개업의 관리에 관한 법률」에 따라
                    분쟁조정위원회에 조정을 신청할 수 있습니다.
                  </p>
                  <p className="leading-relaxed">
                    3. 소송이 필요한 경우, 회사의 주소지 관할 법원을 전속관할로 합니다.
                  </p>
                </div>
              </div>

              {/* 제13조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제13조 (기타)
                </h2>
                <div className="space-y-2">
                  <p className="leading-relaxed">
                    본 약관에 명시되지 않은 사항은 「결혼중개업의 관리에 관한 법률」,
                    「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」 등
                    관련 법령 및 상관례에 따릅니다.
                  </p>
                </div>
              </div>

              {/* 부칙 */}
              <div className="border-t-2 border-gray-300 pt-6 mt-8">
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4">부칙</h2>
                <p className="text-gray-600">본 약관은 2025년 1월 1일부터 시행됩니다.</p>
              </div>

              {/* 문의 */}
              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-bold text-[#2C3E50] mb-3">문의사항</h3>
                <p className="text-gray-700 mb-2">본 약관에 대한 문의사항이 있으시면 아래로 연락주시기 바랍니다.</p>
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
