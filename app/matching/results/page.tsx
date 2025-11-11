'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ResultsContent() {
  const searchParams = useSearchParams();
  const types = searchParams.get('types')?.split(',') || [];

  // 타입별 매칭 프로필 데이터
  const matchedProfiles = [
    {
      id: 1,
      name: 'Nguyen Thi H***',
      nameKo: '응우옌 티 H***',
      age: 24,
      country: '베트남',
      city: '호치민',
      height: 162,
      type: ['young-cheerful'],
      image: '👩‍🦰',
      description: '밝고 활발한 성격으로 요리를 즐기며 가정을 소중히 여깁니다.',
      interests: ['요리', '음악', '운동'],
      matchScore: 95,
    },
    {
      id: 2,
      name: 'Tran Thi M***',
      nameKo: '쩐 티 M***',
      age: 26,
      country: '베트남',
      city: '하노이',
      height: 158,
      type: ['gentle-quiet'],
      image: '👰',
      description: '차분하고 조용한 성격으로 가족을 소중히 여깁니다.',
      interests: ['요리', '바느질', '독서'],
      matchScore: 92,
    },
    {
      id: 3,
      name: 'Le Thi A***',
      nameKo: '레 티 A***',
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
      nameKo: '바트뭉흐 O***',
      age: 25,
      country: '몽골',
      city: '울란바토르',
      height: 168,
      type: ['educated'],
      image: '👩‍🎓',
      description: '대졸 학력의 지적이고 교양있는 여성입니다.',
      interests: ['독서', '요리', '영어'],
      matchScore: 90,
    },
    {
      id: 5,
      name: 'Enkhjargal T***',
      nameKo: '엥흐자르갈 T***',
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
      nameKo: '팜 티 L***',
      age: 25,
      country: '베트남',
      city: '호치민',
      height: 160,
      type: ['gentle-quiet', 'educated'],
      image: '👩',
      description: '조용하고 차분한 성격으로 지적인 대화를 즐깁니다.',
      interests: ['독서', '원예', '음악'],
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
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 py-8 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              <span className="text-[#C9A961]">{filteredProfiles.length}명</span>의 매칭 결과
            </h1>
            <p className="text-sm text-gray-600">
              선택하신 타입에 맞는 회원들입니다
            </p>
          </div>
        </section>

        {/* Profiles Grid */}
        <section className="py-6 px-4">
          <div className="max-w-7xl mx-auto">
            {filteredProfiles.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-2xl text-gray-600 mb-8">매칭되는 회원이 없습니다</p>
                <a
                  href="/matching"
                  className="inline-block px-12 py-5 border-2 border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-black transition-all duration-500 text-sm tracking-[0.2em] font-medium uppercase"
                >
                  다시 선택하기
                </a>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {filteredProfiles.map((profile) => (
                    <div
                      key={profile.id}
                      className="bg-white border border-gray-200 hover:border-[#C9A961] transition-all duration-300 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl hover:scale-[1.02]"
                    >
                      {/* Profile Image */}
                      <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                        <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                          {profile.image}
                        </div>
                        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 text-xs">
                          {profile.country}
                        </div>
                      </div>

                      {/* Profile Info */}
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-[#2C3E50] mb-2 border-b border-gray-200 pb-2">
                          <div className="text-xs text-gray-500 font-normal mb-1">{profile.name}</div>
                          <div>{profile.nameKo}</div>
                        </h3>

                        <div className="space-y-1 mb-3 text-xs">
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

                        <p className="text-gray-700 text-xs leading-relaxed mb-3 h-10 overflow-hidden">
                          {profile.description}
                        </p>

                        {/* Interests */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {profile.interests.map((interest, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>

                        <button className="w-full bg-[#2C3E50] text-white py-2.5 hover:bg-[#C9A961] hover:text-black transition-all duration-300 font-semibold text-sm">
                          상세 프로필 보기
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="mt-10 bg-[#2C3E50] text-white p-8 text-center rounded-xl">
                  <h3 className="text-xl font-bold mb-3">
                    마음에 드는 회원이 있으신가요?
                  </h3>
                  <p className="text-base text-gray-300 mb-6">
                    지금 바로 상담 신청하시면 더 많은 프로필을 확인하실 수 있습니다
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="/#contact"
                      className="inline-block px-8 py-3 bg-[#C9A961] text-black hover:bg-[#8B6F47] transition-all duration-300 text-sm font-semibold rounded-lg"
                    >
                      상담 신청하기
                    </a>
                    <a
                      href="/matching"
                      className="inline-block px-8 py-3 border-2 border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-black transition-all duration-300 text-sm font-semibold rounded-lg"
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
      <Footer />
    </>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-600">로딩중...</div>}>
      <ResultsContent />
    </Suspense>
  );
}
