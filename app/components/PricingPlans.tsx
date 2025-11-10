export default function PricingPlans() {
  const plans = [
    {
      name: '무료 체험',
      price: '0원',
      period: '평생',
      description: '서비스를 먼저 체험해보세요',
      features: [
        '프로필 10개 열람',
        '기본 검색 기능',
        '커뮤니티 게시판 읽기',
        '서비스 안내 자료',
      ],
      limitations: [
        '채팅 불가',
        '화상 통화 불가',
      ],
      buttonText: '무료 체험하기',
      buttonStyle: 'bg-gray-600 hover:bg-gray-700',
      badge: null,
    },
    {
      name: '베이직',
      price: '9,900원',
      period: '월',
      description: '가장 인기 있는 플랜',
      features: [
        '✅ 무제한 프로필 열람',
        '✅ 무제한 채팅 (AI 번역)',
        '✅ 화상 통화 월 10회',
        '✅ 매일 3명 추천',
        '✅ 한국어/현지어 교육 콘텐츠',
        '✅ 커뮤니티 전체 이용',
      ],
      limitations: [],
      buttonText: '시작하기',
      buttonStyle: 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600',
      badge: '👑 인기',
      popular: true,
    },
    {
      name: '프리미엄',
      price: '29,900원',
      period: '월',
      description: '최고의 매칭을 원하신다면',
      features: [
        '✅ 베이직 플랜의 모든 혜택',
        '✅ 무제한 화상 통화',
        '✅ 우선 매칭 서비스',
        '✅ 1:1 전담 매니저',
        '✅ 프로필 상단 노출',
        '✅ 오프라인 이벤트 초대',
        '✅ 현지 통역 1회 무료 (1일)',
      ],
      limitations: [],
      buttonText: '프리미엄 시작',
      buttonStyle: 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600',
      badge: '⭐ VIP',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Annual Discount Banner */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6 mb-12 text-center">
        <h3 className="text-2xl font-bold mb-2">🎉 연간 결제 시 2개월 무료!</h3>
        <p className="text-green-100">베이직: 연 99,000원 (월 8,250원) | 프리미엄: 연 299,000원 (월 24,917원)</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:scale-105 ${
              plan.popular ? 'ring-4 ring-rose-400' : ''
            }`}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {plan.badge}
              </div>
            )}

            <div className="p-8">
              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 mb-2">/ {plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-gray-500">{limitation}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className={`w-full ${plan.buttonStyle} text-white px-6 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services */}
      <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
          📋 선택 서비스 (필요시 추가)
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-3">🗣️</div>
            <h4 className="font-bold text-lg mb-2">현지 통역 동행</h4>
            <p className="text-2xl font-bold text-rose-600 mb-2">150,000원</p>
            <p className="text-sm text-gray-600">1일 기준</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-3">📄</div>
            <h4 className="font-bold text-lg mb-2">결혼 서류 대행</h4>
            <p className="text-2xl font-bold text-rose-600 mb-2">300,000원</p>
            <p className="text-sm text-gray-600">모든 서류 처리</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-3">✈️</div>
            <h4 className="font-bold text-lg mb-2">비자 신청 도움</h4>
            <p className="text-2xl font-bold text-rose-600 mb-2">200,000원</p>
            <p className="text-sm text-gray-600">비자 승인까지</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-3">💒</div>
            <h4 className="font-bold text-lg mb-2">결혼식 진행</h4>
            <p className="text-2xl font-bold text-rose-600 mb-2">500,000원</p>
            <p className="text-sm text-gray-600">현지 결혼식</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700 font-semibold">
            💡 직접 하시면 비용 절약, 어려우면 개별 서비스 이용
          </p>
        </div>
      </div>

      {/* Comparison with Traditional */}
      <div className="mt-16 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl p-8 text-center">
        <h3 className="text-3xl font-bold mb-4">💰 비용 비교</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <p className="text-rose-100 mb-2">기존 중개업체</p>
            <p className="text-5xl font-bold mb-2">15,000,000원</p>
            <p className="text-rose-100">한 번에 지불</p>
          </div>
          <div>
            <p className="text-pink-100 mb-2">우리 플랫폼</p>
            <p className="text-5xl font-bold mb-2">118,800원</p>
            <p className="text-pink-100">연간 (월 9,900원 × 12개월)</p>
          </div>
        </div>
        <div className="mt-8 text-2xl font-bold">
          126배 저렴합니다! 🎉
        </div>
      </div>
    </div>
  );
}
