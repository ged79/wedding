'use client';

import { useState } from 'react';

const stories = [
  {
    id: 1,
    couple: '김○○ ♥ Nguyen Thi ○○',
    country: '🇻🇳 베트남',
    period: '결혼 16년차',
    year: '2008년',
    image: '💑',
    story: '20년 전통의 거성 국제 결혼을 통해 만났습니다. 대표님이 직접 상담해주시고 현지 사무소의 세심한 배려 덕분에 좋은 분을 만났습니다. 지금은 두 아이의 아빠로 행복하게 살고 있습니다.',
    age: 35,
    rating: 5,
  },
  {
    id: 2,
    couple: '이○○ ♥ Batmunkh ○○',
    country: '🇲🇳 몽골',
    period: '결혼 9년차',
    year: '2015년',
    image: '👫',
    story: '늦은 나이에 결혼을 결심했는데, 거성의 체계적인 진행 덕분에 불안함 없이 진행할 수 있었습니다. 현지 사무소와 지금도 가족처럼 연락하며 지냅니다. 20년 노하우가 느껴지는 업체입니다.',
    age: 42,
    rating: 5,
  },
  {
    id: 3,
    couple: '박○○ ♥ Pham Thi ○○',
    country: '🇻🇳 베트남',
    period: '결혼 3년차',
    year: '2021년',
    image: '💏',
    story: '사전 매칭으로 충분히 알아가는 시간을 가질 수 있었습니다. 졸속 결혼이 아닌 신중한 만남이 가능했고, 현지 방문 시에도 모든 것이 체계적으로 준비되어 있었습니다. 감사합니다!',
    age: 38,
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
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600 flex-wrap">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                {currentStory.year}
              </span>
              <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-semibold">
                {currentStory.country}
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                {currentStory.period}
              </span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">
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
          <div className="text-3xl font-bold text-rose-600 mb-1">400+</div>
          <div className="text-sm text-gray-600">20년간 성혼</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center">
          <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
          <div className="text-sm text-gray-600">고객 만족도</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl text-center">
          <div className="text-3xl font-bold text-green-600 mb-1">95%</div>
          <div className="text-sm text-gray-600">결혼 유지율</div>
        </div>
      </div>
    </div>
  );
}
