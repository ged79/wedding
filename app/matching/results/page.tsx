'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../../components/Header';

function ResultsContent() {
  const searchParams = useSearchParams();
  const types = searchParams.get('types')?.split(',') || [];

  // 타입별 매칭 프로필 데이터
  const matchedProfiles = [
    {
      id: 1,
      name: 'Nguyen Thi H***',
      age: 24,
      country: '베트남',
      city: '호치민',
      height: 162,
      type: ['young-cheerful', 'homely'],
      image: '👩‍🦰',
      description: '밝고 활발한 성격으로 요리를 즐기며 가정을 소중히 여깁니다.',
      interests: ['요리', '음악', '운동'],
      matchScore: 95,
    },
    {
      id: 2,
      name: 'Tran Thi M***',
      age: 26,
      country: '베트남',
      city: '하노이',
      height: 158,
      type: ['traditional', 'homely'],
      image: '👰',
      description: '전통적인 가치관을 가지고 있으며 남편을 잘 내조하고 싶습니다.',
      interests: ['요리', '바느질', '독서'],
      matchScore: 92,
    },
    {
      id: 3,
      name: 'Le Thi A***',
      age: 22,
      country: '베트남',
      city: '다낭',
      height: 165,
      type: ['young-beautiful', 'gentle-quiet'],
      image: '💃',
      description: '차분하고 아름다운 외모. 한국 문화를 좋아합니다.',
      interests: ['영화', '음악', '여행'],
      matchScore: 88,
    },
    {
      id: 4,
      name: 'Batmunkh O***',
      age: 25,
      country: '몽골',
      city: '울란바토르',
      height: 168,
      type: ['educated', 'homely'],
      image: '👩‍🎓',
      description: '대졸 학력의 지적이고 가정적인 여성입니다.',
      interests: ['독서', '요리', '영어'],
      matchScore: 90,
    },
    {
      id: 5,
      name: 'Enkhjargal T***',
      age: 23,
      country: '몽골',
      city: '울란바토르',
      height: 170,
      type: ['young-cheerful', 'young-beautiful'],
      image: '👩',
      description: '활발하고 매력적인 외모를 가진 여성입니다.',
      interests: ['춤', 'K-POP', '패션'],
      matchScore: 87,
    },
    {
      id: 6,
      name: 'Pham Thi L***',
      age: 25,
      country: '베트남',
      city: '호치민',
      height: 160,
      type: ['gentle-quiet', 'traditional'],
      image: '👩',
      description: '조용하고 헌신적인 성격으로 가족을 최우선으로 생각합니다.',
      interests: ['요리', '원예', '봉사'],
      matchScore: 93,
    },
  ];

  // 선택한 타입과 일치하는 프로필 필터링 및 매칭 스코어 정렬
  const filteredProfiles = matchedProfiles
    .filter(profile => profile.type.some(t => types.includes(t)))
    .sort((a, b) => b.matchScore - a.matchScore);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAFAF8]">
        {/* Results Header */}
        <section className="bg-[#1a1a1a] text-white py-20 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <span className="text-[#D4AF37] text-sm tracking-[0.3em] font-light uppercase mb-4 block">
              Your Matches
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#D4AF37]">{filteredProfiles.length}명</span>의
              <br />
              매칭 결과
            </h1>
            <p className="text-xl text-gray-300">
              선택하신 타입에 맞는 회원들입니다
            </p>
          </div>
        </section>

        {/* Profiles Grid */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            {filteredProfiles.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-2xl text-gray-600 mb-8">매칭되는 회원이 없습니다</p>
                <a
                  href="/matching"
                  className="inline-block px-12 py-5 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 text-sm tracking-[0.2em] font-medium uppercase"
                >
                  다시 선택하기
                </a>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProfiles.map((profile) => (
                    <div
                      key={profile.id}
                      className="bg-white border border-gray-200 hover:border-[#D4AF37] transition-all duration-300 overflow-hidden group cursor-pointer"
                    >
                      {/* Match Score Badge */}
                      <div className="bg-[#D4AF37] text-black text-center py-3 font-bold">
                        매칭률 {profile.matchScore}%
                      </div>

                      {/* Profile Image */}
                      <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                        <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                          {profile.image}
                        </div>
                        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 text-sm">
                          {profile.country}
                        </div>
                      </div>

                      {/* Profile Info */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 border-b border-gray-200 pb-2">
                          {profile.name}
                        </h3>

                        <div className="space-y-2 mb-4 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">나이:</span>
                            <span className="font-semibold">{profile.age}세</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">지역:</span>
                            <span className="font-semibold">{profile.city}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">키:</span>
                            <span className="font-semibold">{profile.height}cm</span>
                          </div>
                        </div>

                        <p className="text-gray-700 text-sm leading-relaxed mb-4 h-12 overflow-hidden">
                          {profile.description}
                        </p>

                        {/* Interests */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {profile.interests.map((interest, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 text-gray-700 px-3 py-1"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>

                        <button className="w-full bg-[#1a1a1a] text-white py-3 hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-semibold">
                          상세 프로필 보기
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 bg-[#1a1a1a] text-white p-12 text-center">
                  <h3 className="text-3xl font-bold mb-4">
                    마음에 드는 회원이 있으신가요?
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    지금 바로 상담 신청하시면 더 많은 프로필을 확인하실 수 있습니다
                  </p>
                  <div className="flex gap-4 justify-center">
                    <a
                      href="/#contact"
                      className="inline-block px-12 py-5 bg-[#D4AF37] text-black hover:bg-[#B8942F] transition-all duration-500 text-sm tracking-[0.2em] font-medium uppercase"
                    >
                      상담 신청하기
                    </a>
                    <a
                      href="/matching"
                      className="inline-block px-12 py-5 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 text-sm tracking-[0.2em] font-medium uppercase"
                    >
                      다시 선택하기
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsContent />
    </Suspense>
  );
}
