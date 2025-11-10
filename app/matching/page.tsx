'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';

export default function MatchingPage() {
  const router = useRouter();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const womanTypes = [
    {
      id: 'young-cheerful',
      title: '밝고 활발한',
      description: '에너지 넘치는 밝은 성격. 외향적이고 사교적이며 긍정적인 여성',
      traits: ['활발함', '사교적', '밝은 성격', '긍정적'],
      image: '👩‍🦰',
    },
    {
      id: 'gentle-quiet',
      title: '조용하고 차분한',
      description: '침착하고 신중한 성격. 조용하지만 따뜻한 마음을 가진 여성',
      traits: ['차분함', '신중함', '배려심', '조용함'],
      image: '👩',
    },
    {
      id: 'homely',
      title: '가정적인',
      description: '요리와 집안일을 즐기고 가족을 최우선으로 생각하는 여성',
      traits: ['요리 잘함', '가정적', '헌신적', '가족 중심'],
      image: '👩‍🍳',
    },
    {
      id: 'educated',
      title: '지적이고 교양있는',
      description: '대졸 이상 학력. 교양있고 대화가 통하는 지적인 여성',
      traits: ['대졸', '지적', '교양있음', '대화 잘함'],
      image: '👩‍🎓',
    },
    {
      id: 'traditional',
      title: '전통적 가치관',
      description: '전통적인 가치관을 가지고 남편을 존중하고 섬기는 여성',
      traits: ['전통적', '순종적', '존중', '헌신'],
      image: '👰',
    },
    {
      id: 'young-beautiful',
      title: '젊고 아름다운',
      description: '외모가 뛰어나고 젊은 매력적인 여성',
      traits: ['외모 우수', '젊음', '매력적', '스타일'],
      image: '💃',
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
      <main className="min-h-screen bg-[#FAFAF8]">
        {/* Hero Section */}
        <section className="bg-[#1a1a1a] text-white py-24 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <span className="text-[#D4AF37] text-sm tracking-[0.3em] font-light uppercase mb-4 block">
              Find Your Match
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              선호하는 여성 타입을
              <br />
              <span className="text-[#D4AF37]">선택하세요</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              선택하신 타입에 맞는 여성 회원들을 매칭해드립니다
              <br />
              <span className="text-sm text-gray-400">복수 선택 가능</span>
            </p>
          </div>
        </section>

        {/* Type Selection */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {womanTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => toggleType(type.id)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedTypes.includes(type.id)
                      ? 'bg-[#1a1a1a] text-white border-[#D4AF37] border-4 scale-105'
                      : 'bg-white text-[#1a1a1a] border-gray-200 border hover:border-[#D4AF37]'
                  } p-8 relative overflow-hidden group`}
                >
                  {/* Checkmark */}
                  {selectedTypes.includes(type.id) && (
                    <div className="absolute top-4 right-4 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                      <span className="text-black font-bold">✓</span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="text-6xl mb-6 text-center">{type.image}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-center">{type.title}</h3>

                  {/* Description */}
                  <p className={`text-center mb-6 leading-relaxed ${selectedTypes.includes(type.id) ? 'text-gray-300' : 'text-gray-600'}`}>
                    {type.description}
                  </p>

                  {/* Traits */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {type.traits.map((trait, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1 ${
                          selectedTypes.includes(type.id)
                            ? 'bg-[#D4AF37] text-black'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Count */}
            <div className="mt-16 text-center">
              <p className="text-xl text-gray-600 mb-8">
                {selectedTypes.length > 0 ? (
                  <>
                    <span className="text-[#D4AF37] font-bold">{selectedTypes.length}개</span> 타입 선택됨
                  </>
                ) : (
                  '원하는 타입을 선택해주세요'
                )}
              </p>

              <button
                onClick={handleMatching}
                disabled={selectedTypes.length === 0}
                className={`px-16 py-5 text-sm tracking-[0.2em] font-medium uppercase transition-all duration-500 ${
                  selectedTypes.length > 0
                    ? 'bg-[#D4AF37] text-black hover:bg-[#B8942F] cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                매칭 시작하기 ({selectedTypes.length})
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
