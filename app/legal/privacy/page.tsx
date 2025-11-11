import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAFAF8]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 py-8 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              개인정보<span className="text-[#C9A961]">처리방침</span>
            </h1>
            <p className="text-sm text-gray-600">
              거성 국제 결혼 개인정보 보호 정책
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">

            <div className="mb-8 p-4 bg-blue-50 border-l-4 border-[#C9A961] rounded">
              <p className="text-gray-700 leading-relaxed">
                거성 국제 결혼(이하 "회사")은 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」,
                「결혼중개업의 관리에 관한 법률」 등 관련 법령에 따라 이용자의 개인정보를 보호하고,
                이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보처리방침을 수립·공개합니다.
              </p>
            </div>

            <div className="space-y-8 text-gray-700">

              {/* 제1조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제1조 (개인정보의 처리 목적)
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는
                    다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는
                    「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                  </p>

                  <div className="ml-4 space-y-3">
                    <div>
                      <h3 className="font-bold text-[#2C3E50] mb-2">1. 국제결혼 중개 서비스 제공</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>결혼 상대자 소개 및 알선</li>
                        <li>결혼당사자 간 신상정보 교환</li>
                        <li>의사소통 지원 및 통역 서비스</li>
                        <li>결혼 관련 행정절차 대행</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-[#2C3E50] mb-2">2. 회원 관리</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>회원 가입의사 확인, 본인 식별 및 인증</li>
                        <li>회원 자격 유지 및 관리</li>
                        <li>서비스 부정이용 방지</li>
                        <li>각종 고지 및 통지</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-[#2C3E50] mb-2">3. 민원 처리</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>민원인의 신원 확인</li>
                        <li>민원 사항 확인</li>
                        <li>사실 조사를 위한 연락 및 통지</li>
                        <li>처리결과 통보</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-[#2C3E50] mb-2">4. 마케팅 및 광고 활용 (선택사항)</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>신규 서비스 개발 및 맞춤 서비스 제공</li>
                        <li>이벤트 및 광고성 정보 제공</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 제2조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제2조 (개인정보의 처리 및 보유 기간)
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에
                    동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                  </p>

                  <div className="ml-4 space-y-2">
                    <div className="bg-gray-50 p-4 rounded">
                      <p className="font-bold text-[#2C3E50] mb-2">국제결혼 중개 서비스 제공</p>
                      <p className="text-sm">보유기간: 계약 체결일로부터 <span className="text-[#C9A961] font-bold">5년</span></p>
                      <p className="text-xs text-gray-600 mt-1">
                        근거: 「결혼중개업의 관리에 관한 법률」 제13조 (장부 등의 작성·비치)
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded">
                      <p className="font-bold text-[#2C3E50] mb-2">계약 또는 청약철회 등에 관한 기록</p>
                      <p className="text-sm">보유기간: <span className="text-[#C9A961] font-bold">5년</span></p>
                      <p className="text-xs text-gray-600 mt-1">
                        근거: 「전자상거래 등에서의 소비자보호에 관한 법률」
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded">
                      <p className="font-bold text-[#2C3E50] mb-2">대금결제 및 재화 등의 공급에 관한 기록</p>
                      <p className="text-sm">보유기간: <span className="text-[#C9A961] font-bold">5년</span></p>
                      <p className="text-xs text-gray-600 mt-1">
                        근거: 「전자상거래 등에서의 소비자보호에 관한 법률」
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded">
                      <p className="font-bold text-[#2C3E50] mb-2">소비자 불만 또는 분쟁 처리에 관한 기록</p>
                      <p className="text-sm">보유기간: <span className="text-[#C9A961] font-bold">3년</span></p>
                      <p className="text-xs text-gray-600 mt-1">
                        근거: 「전자상거래 등에서의 소비자보호에 관한 법률」
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded">
                      <p className="font-bold text-[#2C3E50] mb-2">웹사이트 방문 기록</p>
                      <p className="text-sm">보유기간: <span className="text-[#C9A961] font-bold">3개월</span></p>
                      <p className="text-xs text-gray-600 mt-1">
                        근거: 「통신비밀보호법」
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 제3조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제3조 (처리하는 개인정보의 항목)
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    회사는 다음의 개인정보 항목을 처리하고 있습니다.
                  </p>

                  <div className="ml-4 space-y-3">
                    <div>
                      <h3 className="font-bold text-[#2C3E50] mb-2">1. 필수 항목</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>성명, 생년월일, 성별</li>
                        <li>연락처 (휴대전화번호, 이메일 주소)</li>
                        <li>주소 (주민등록상 주소, 실거주지)</li>
                        <li>직업, 학력</li>
                        <li>가족관계증명서, 혼인관계증명서</li>
                        <li>범죄경력증명서</li>
                        <li>건강진단서</li>
                        <li>본인 사진</li>
                        <li>여권 정보</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-[#2C3E50] mb-2">2. 선택 항목</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>결혼관, 가치관, 취미, 특기</li>
                        <li>재산 상황</li>
                        <li>종교</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-[#2C3E50] mb-2">3. 자동 수집 항목</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>IP주소, 쿠키, 서비스 이용 기록</li>
                        <li>접속 로그, 방문 일시</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 제4조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제4조 (개인정보의 제3자 제공)
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    회사는 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및
                    제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                  </p>

                  <div className="bg-blue-50 p-4 rounded mt-3">
                    <h3 className="font-bold text-[#2C3E50] mb-3">개인정보 제3자 제공 현황</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>제공받는 자:</strong> 결혼 상대방 (외국인 배우자 후보)</p>
                      <p><strong>제공 목적:</strong> 결혼 상대자 정보 확인 및 결혼 진행</p>
                      <p><strong>제공 항목:</strong> 성명, 생년월일, 주소, 직업, 학력, 사진, 가족관계증명서,
                      혼인관계증명서, 범죄경력증명서, 건강진단서</p>
                      <p><strong>보유 및 이용기간:</strong> 결혼 성사 시까지 또는 정보주체의 삭제 요청 시까지</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 제5조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제5조 (개인정보의 파기)
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는
                    지체없이 해당 개인정보를 파기합니다.
                  </p>

                  <div className="ml-4 space-y-3">
                    <div>
                      <h3 className="font-bold text-[#2C3E50] mb-2">파기 절차</h3>
                      <p className="text-sm leading-relaxed">
                        이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류)
                        내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.
                        이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-[#2C3E50] mb-2">파기 방법</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>전자적 파일 형태: 복원이 불가능한 방법으로 영구 삭제</li>
                        <li>종이 문서: 분쇄기로 분쇄하거나 소각</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 제6조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제6조 (정보주체의 권리·의무 및 행사방법)
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>개인정보 열람 요구</li>
                    <li>오류 등이 있을 경우 정정 요구</li>
                    <li>삭제 요구</li>
                    <li>처리정지 요구</li>
                  </ul>

                  <div className="bg-gray-50 p-4 rounded mt-4">
                    <p className="text-sm leading-relaxed">
                      <strong className="text-[#2C3E50]">권리 행사 방법:</strong><br/>
                      서면, 전화, 이메일, 팩스 등을 통하여 하실 수 있으며,
                      회사는 이에 대해 지체없이 조치하겠습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 제7조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제7조 (개인정보의 안전성 확보조치)
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>관리적 조치:</strong> 내부관리계획 수립·시행, 정기적 직원 교육</li>
                    <li><strong>기술적 조치:</strong> 개인정보처리시스템 등의 접근권한 관리,
                    접근통제시스템 설치, 개인정보의 암호화, 보안프로그램 설치</li>
                    <li><strong>물리적 조치:</strong> 전산실, 자료보관실 등의 접근통제</li>
                  </ul>
                </div>
              </div>

              {/* 제8조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제8조 (개인정보 자동 수집 장치의 설치·운영 및 거부)
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고
                    수시로 불러오는 '쿠키(cookie)'를 사용합니다.
                  </p>

                  <div className="ml-4 space-y-3">
                    <div>
                      <h3 className="font-bold text-[#2C3E50] mb-2">쿠키의 사용 목적</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>이용자의 접속 빈도나 방문 시간 등을 분석</li>
                        <li>이용자의 취향과 관심분야를 파악</li>
                        <li>서비스 개선의 척도로 활용</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-[#2C3E50] mb-2">쿠키 설치·운영 거부 방법</h3>
                      <p className="text-sm leading-relaxed">
                        웹브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보 메뉴의 옵션 설정을 통해
                        쿠키 저장을 거부할 수 있습니다. 다만, 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에
                        어려움이 발생할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 제9조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제9조 (개인정보 보호책임자)
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
                    정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                  </p>

                  <div className="bg-[#2C3E50] text-white p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-4 text-[#C9A961]">개인정보 보호책임자</h3>
                    <div className="space-y-2">
                      <p><strong>성명:</strong> 문옥선</p>
                      <p><strong>직책:</strong> 대표</p>
                      <p><strong>연락처:</strong> 1588-0000</p>
                      <p><strong>이메일:</strong> info@geosung-wedding.com</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-4">
                    정보주체는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리,
                    피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다.
                    회사는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.
                  </p>
                </div>
              </div>

              {/* 제10조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제10조 (권익침해 구제방법)
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회,
                    한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 p-4 rounded">
                      <p className="font-bold text-[#2C3E50] mb-2">개인정보분쟁조정위원회</p>
                      <p className="text-sm">☎ 1833-6972</p>
                      <p className="text-xs text-gray-600 mt-1">www.kopico.go.kr</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <p className="font-bold text-[#2C3E50] mb-2">개인정보침해신고센터</p>
                      <p className="text-sm">☎ (국번없이) 118</p>
                      <p className="text-xs text-gray-600 mt-1">privacy.kisa.or.kr</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <p className="font-bold text-[#2C3E50] mb-2">대검찰청 사이버범죄수사단</p>
                      <p className="text-sm">☎ 02-3480-3573</p>
                      <p className="text-xs text-gray-600 mt-1">www.spo.go.kr</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <p className="font-bold text-[#2C3E50] mb-2">경찰청 사이버안전국</p>
                      <p className="text-sm">☎ (국번없이) 182</p>
                      <p className="text-xs text-gray-600 mt-1">cyberbureau.police.go.kr</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 제11조 */}
              <div>
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#C9A961] pb-2">
                  제11조 (개인정보 처리방침의 변경)
                </h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가,
                    삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                  </p>
                </div>
              </div>

              {/* 부칙 */}
              <div className="border-t-2 border-gray-300 pt-6 mt-8">
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4">부칙</h2>
                <p className="text-gray-600">본 방침은 2025년 1월 1일부터 시행됩니다.</p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
