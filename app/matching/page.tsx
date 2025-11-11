'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '../components/Header';
import FloatingButtons from '../components/FloatingButtons';
import Footer from '../components/Footer';

export default function MatchingPage() {
  const router = useRouter();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const womanTypes = [
    {
      id: 'young-cheerful',
      title: '밝고 활발한',
      description: '에너지 넘치는 밝은 성격. 외향적이고 사교적이며 긍정적인 여성',
      traits: ['활발함', '사교적', '밝은 성격', '긍정적'],
      imagePath: '/images/types/cheerful.jpg',
      gradient: 'from-orange-400 to-pink-500',
    },
    {
      id: 'gentle-quiet',
      title: '조용하고 차분한',
      description: '침착하고 신중한 성격. 조용하지만 따뜻한 마음을 가진 여성',
      traits: ['차분함', '신중함', '배려심', '조용함'],
      imagePath: '/images/types/gentle.jpg',
      gradient: 'from-blue-400 to-purple-500',
    },
    {
      id: 'educated',
      title: '지적이고 교양있는',
      description: '대졸 이상 학력. 교양있고 대화가 통하는 지적인 여성',
      traits: ['대졸', '지적', '교양있음', '대화 잘함'],
      imagePath: '/images/types/educated.jpg',
      gradient: 'from-indigo-400 to-blue-600',
    },
    {
      id: 'young-beautiful',
      title: '젊고 아름다운',
      description: '외모가 뛰어나고 젊은 매력적인 여성',
      traits: ['외모 우수', '젊음', '매력적', '스타일'],
      imagePath: '/images/types/beautiful.jpg',
      gradient: 'from-fuchsia-400 to-pink-600',
    },
  ];

  const toggleType = (typeId: string) => {
    if (selectedTypes.includes(typeId)) {
      setSelectedTypes(selectedTypes.filter(id => id !== typeId));
    } else {
      setSelectedTypes([...selectedTypes, typeId]);
    }
  };

  const handleMatching = () => {
    if (selectedTypes.length === 0) {
      alert('최소 1개 이상의 타입을 선택해주세요');
      return;
    }
    // 매칭 결과 페이지로 이동 (선택한 타입을 쿼리로 전달)
    router.push(`/matching/results?types=${selectedTypes.join(',')}`);
  };

  return (
    <>
      <Header />
      <FloatingButtons />
      <main className="min-h-screen bg-[#FAFAF8]">
        {/* Hero Section - Compact */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 py-8 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              선호하는 여성 타입을 <span className="text-[#C9A961]">선택하세요</span>
            </h1>
            <p className="text-sm text-gray-600">
              복수 선택 가능 · 선택한 타입에 맞는 회원을 매칭해드립니다
            </p>
          </div>
        </section>

        {/* Type Selection */}
        <section className="py-6 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {womanTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => toggleType(type.id)}
                  className={`cursor-pointer transition-all duration-300 rounded-xl overflow-hidden ${
                    selectedTypes.includes(type.id)
                      ? 'ring-4 ring-[#C9A961] shadow-2xl scale-105'
                      : 'shadow-lg hover:shadow-2xl hover:scale-[1.02] bg-white'
                  } relative group`}
                >
                  {/* 실제 이미지 영역 - 세로 사진 */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    {/* 실제 이미지 */}
                    <Image
                      src={type.imagePath}
                      alt={type.title}
                      fill
                      className="object-cover"
                      priority
                      unoptimized
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />

                    {/* 선택 시 오버레이 */}
                    {selectedTypes.includes(type.id) && (
                      <div className="absolute inset-0 bg-[#C9A961]/20"></div>
                    )}

                    {/* Checkmark */}
                    {selectedTypes.includes(type.id) && (
                      <div className="absolute top-4 right-4 w-12 h-12 bg-[#C9A961] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <span className="text-black font-bold text-2xl">✓</span>
                      </div>
                    )}
                  </div>

                  {/* 카드 내용 */}
                  <div className={`p-4 ${selectedTypes.includes(type.id) ? 'bg-[#2C3E50] text-white' : 'bg-white'}`}>
                    {/* Title */}
                    <h3 className="text-lg font-bold mb-2 text-center">{type.title}</h3>

                    {/* Description */}
                    <p className={`text-xs text-center mb-3 leading-relaxed ${selectedTypes.includes(type.id) ? 'text-gray-300' : 'text-gray-600'}`}>
                      {type.description}
                    </p>

                    {/* Traits */}
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {type.traits.map((trait, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-1 rounded-full font-medium ${
                            selectedTypes.includes(type.id)
                              ? 'bg-[#C9A961] text-black'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Count */}
            <div className="mt-10 mb-6 text-center">
              <p className="text-lg text-gray-600 mb-6">
                {selectedTypes.length > 0 ? (
                  <>
                    <span className="text-[#C9A961] font-bold text-2xl">{selectedTypes.length}개</span> 타입 선택됨
                  </>
                ) : (
                  '원하는 타입을 클릭해서 선택해주세요 (복수 선택 가능)'
                )}
              </p>

              <button
                onClick={handleMatching}
                disabled={selectedTypes.length === 0}
                className={`px-16 py-5 text-base font-bold rounded-xl transition-all duration-300 ${
                  selectedTypes.length > 0
                    ? 'bg-[#C9A961] text-black hover:bg-[#8B6F47] hover:shadow-2xl cursor-pointer transform hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                매칭 결과 보기 ({selectedTypes.length})
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
