'use client';

import { useState } from 'react';

export default function PreRegisterForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // 여기에 실제 API 호출 로직 추가
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-700 mb-2">
          사전 등록 완료!
        </h3>
        <p className="text-gray-700 mb-4">
          곧 출시 소식을 이메일로 보내드리겠습니다.
        </p>
        <p className="text-sm text-gray-600">
          <strong>특별 혜택:</strong> 사전 등록자는 첫 3개월 무료!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          🎁 출시 알림 받기
        </h3>
        <p className="text-gray-600">
          사전 등록하시면 <strong className="text-rose-600">첫 3개월 무료</strong> 혜택을 드립니다!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            이메일 주소
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-rose-400 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            연락처 (선택)
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="010-0000-0000"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-rose-400 transition-all"
          />
        </div>

        <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
          <h4 className="font-bold text-rose-700 mb-2">사전 등록 특별 혜택</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>✓ 첫 3개월 무료 (29,700원 상당)</li>
            <li>✓ 우선 매칭 서비스</li>
            <li>✓ 1:1 전담 매니저 배정</li>
            <li>✓ 평생 VIP 회원 등급</li>
          </ul>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? '처리 중...' : '무료로 사전 등록하기'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          사전 등록은 무료이며, 언제든 취소할 수 있습니다.
        </p>
      </form>
    </div>
  );
}
