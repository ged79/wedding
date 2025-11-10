'use client';

import { useState } from 'react';

const stories = [
  {
    id: 1,
    couple: '김민수 ♥ Linh Nguyen',
    country: '🇻🇳 베트남',
    period: '3개월',
    image: '💑',
    story: '전에는 1,800만원 내고 업체 통해 진행했는데 여긴 월 9,900원으로 직접 대화하며 알아갈 수 있어요. 채팅으로 3개월 대화하고 서로 마음 맞는 걸 확인한 후 직접 베트남 가서 만났어요. 다음 달 결혼합니다!',
    age: 37,
    rating: 5,
  },
  {
    id: 2,
    couple: '이준호 ♥ Altantsetseg',
    country: '🇲🇳 몽골',
    period: '4개월',
    image: '👫',
    story: '중개업체는 너무 비싸서 망설이고 있었는데, 이 플랫폼 덕분에 부담 없이 시작할 수 있었습니다. AI 번역이 정말 편리하고, 매일 대화하면서 서로를 잘 알게 됐어요. 현재 결혼 준비 중입니다!',
    age: 42,
    rating: 5,
  },
  {
    id: 3,
    couple: '박성우 ♥ Mai Tran',
    country: '🇻🇳 베트남',
    period: '2개월',
    image: '💏',
    story: '처음엔 반신반의했지만, 직접 대화해보니 정말 진심으로 만남을 원하는 분들이 많더라고요. 업체 개입 없이 자유롭게 진행할 수 있어서 훨씬 편했습니다. 강력 추천합니다!',
    age: 39,
    rating: 5,
  },
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStory = stories[currentIndex];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Story Card */}
        <div className="p-8 md:p-12">
          <div className="text-center mb-6">
            <div className="text-7xl mb-4">{currentStory.image}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {currentStory.couple}
            </h3>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-semibold">
                {currentStory.country}
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                만남 기간: {currentStory.period}
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                {currentStory.age}세
              </span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex justify-center mb-4">
            {[...Array(currentStory.rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">⭐</span>
            ))}
          </div>

          {/* Story Text */}
          <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 text-center italic">
            "{currentStory.story}"
          </blockquote>

          {/* Verified Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              ✓ 실제 성혼 커플 인증
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-gray-50 px-8 py-6 flex items-center justify-between">
          <button
            onClick={prevStory}
            className="flex items-center gap-2 text-gray-600 hover:text-rose-600 font-semibold transition-all"
          >
            ← 이전
          </button>

          <div className="flex gap-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-rose-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextStory}
            className="flex items-center gap-2 text-gray-600 hover:text-rose-600 font-semibold transition-all"
          >
            다음 →
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl text-center">
          <div className="text-3xl font-bold text-rose-600 mb-1">128+</div>
          <div className="text-sm text-gray-600">성혼 커플</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center">
          <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
          <div className="text-sm text-gray-600">만족도</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl text-center">
          <div className="text-3xl font-bold text-green-600 mb-1">3.2개월</div>
          <div className="text-sm text-gray-600">평균 매칭 기간</div>
        </div>
      </div>
    </div>
  );
}
