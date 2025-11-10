'use client';

import { useState } from 'react';

interface Profile {
  id: number;
  name: string;
  age: number;
  country: string;
  city: string;
  height: number;
  education: string;
  occupation: string;
  religion: string;
  image: string;
  description: string;
}

export default function ProfileMatching() {
  const [selectedCountry, setSelectedCountry] = useState<string>('전체');
  const [ageRange, setAgeRange] = useState<string>('전체');
  const [education, setEducation] = useState<string>('전체');

  // 샘플 프로필 데이터
  const profiles: Profile[] = [
    {
      id: 1,
      name: 'Nguyen Thi H***',
      age: 24,
      country: '베트남',
      city: '호치민',
      height: 162,
      education: '대졸',
      occupation: '사무직',
      religion: '무교',
      image: '/images/profile-placeholder.jpg',
      description: '밝고 상냥한 성격으로 가정을 소중히 여깁니다. 요리를 좋아하며, 한국 문화에 관심이 많습니다. 헌신적이고 따뜻한 가정을 만들고 싶습니다.',
    },
    {
      id: 2,
      name: 'Tran Thi M***',
      age: 26,
      country: '베트남',
      city: '하노이',
      height: 158,
      education: '대졸',
      occupation: '교사',
      religion: '불교',
      image: '/images/profile-placeholder.jpg',
      description: '전통적인 가치관을 가지고 있으며 가족을 최우선으로 생각합니다. 요리와 집안일을 좋아하고, 남편을 잘 내조하고 싶습니다.',
    },
    {
      id: 3,
      name: 'Le Thi A***',
      age: 22,
      country: '베트남',
      city: '다낭',
      height: 165,
      education: '고졸',
      occupation: '회사원',
      religion: '무교',
      image: '/images/profile-placeholder.jpg',
      description: '성실하고 순수한 성격입니다. 아이를 좋아하며 따뜻한 가정을 꾸리는 것이 꿈입니다. 한국어를 열심히 공부하고 있습니다.',
    },
    {
      id: 4,
      name: 'Batmunkh O***',
      age: 25,
      country: '몽골',
      city: '울란바토르',
      height: 168,
      education: '대졸',
      occupation: '회계사',
      religion: '불교',
      image: '/images/profile-placeholder.jpg',
      description: '차분하고 가정적인 성격입니다. 남편을 존중하고 행복한 가정을 만들고 싶습니다. 요리 실력이 좋고 집안일을 즐깁니다.',
    },
    {
      id: 5,
      name: 'Enkhjargal T***',
      age: 23,
      country: '몽골',
      city: '울란바토르',
      height: 170,
      education: '대졸',
      occupation: '디자이너',
      religion: '무교',
      image: '/images/profile-placeholder.jpg',
      description: '밝고 활발하지만 가정적입니다. 한국 드라마를 좋아하며 한국 남성과의 결혼을 꿈꿔왔습니다. 아이를 무척 좋아합니다.',
    },
    {
      id: 6,
      name: 'Pham Thi L***',
      age: 25,
      country: '베트남',
      city: '호치민',
      height: 160,
      education: '대졸',
      occupation: '간호사',
      religion: '기독교',
      image: '/images/profile-placeholder.jpg',
      description: '따뜻하고 배려심이 많습니다. 헌신적인 성격으로 가족을 돌보는 것을 좋아합니다. 남편에게 충실하고 행복한 아내가 되고 싶습니다.',
    },
    {
      id: 7,
      name: 'Bayarmaa G***',
      age: 27,
      country: '몽골',
      city: '울란바토르',
      height: 166,
      education: '대졸',
      occupation: '은행원',
      religion: '불교',
      image: '/images/profile-placeholder.jpg',
      description: '안정적이고 현실적인 성격입니다. 가족 중심적이며 남편을 잘 섬기고 싶습니다. 전통적인 가정을 꾸리는 것이 목표입니다.',
    },
    {
      id: 8,
      name: 'Hoang Thi N***',
      age: 21,
      country: '베트남',
      city: '칸토',
      height: 163,
      education: '전문대졸',
      occupation: '미용사',
      religion: '무교',
      image: '/images/profile-placeholder.jpg',
      description: '밝고 순수한 성격으로 손재주가 좋습니다. 남편을 잘 보살피고 행복한 가정을 만들고 싶습니다. 요리와 청소를 좋아합니다.',
    },
  ];

  // 필터링된 프로필
  const filteredProfiles = profiles.filter((profile) => {
    const countryMatch = selectedCountry === '전체' || profile.country === selectedCountry;

    let ageMatch = true;
    if (ageRange === '20-25') ageMatch = profile.age >= 20 && profile.age <= 25;
    else if (ageRange === '26-30') ageMatch = profile.age >= 26 && profile.age <= 30;
    else if (ageRange === '31-35') ageMatch = profile.age >= 31 && profile.age <= 35;

    const educationMatch = education === '전체' || profile.education === education;

    return countryMatch && ageMatch && educationMatch;
  });

  return (
    <div className="max-w-7xl mx-auto">
      {/* 헤더 */}
      <div className="mb-8">
        <p className="text-center text-gray-600">
          현재 {filteredProfiles.length}명의 회원 프로필을 열람하실 수 있습니다
        </p>
      </div>

      {/* 필터 섹션 */}
      <div className="bg-white border border-gray-300 p-6 mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          {/* 국가 선택 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              국가
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 focus:border-blue-600 focus:outline-none"
            >
              <option value="전체">전체</option>
              <option value="베트남">베트남</option>
              <option value="몽골">몽골</option>
            </select>
          </div>

          {/* 연령대 선택 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              연령대
            </label>
            <select
              value={ageRange}
              onChange={(e) => setAgeRange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 focus:border-blue-600 focus:outline-none"
            >
              <option value="전체">전체</option>
              <option value="20-25">20-25세</option>
              <option value="26-30">26-30세</option>
              <option value="31-35">31-35세</option>
            </select>
          </div>

          {/* 학력 선택 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              학력
            </label>
            <select
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 focus:border-blue-600 focus:outline-none"
            >
              <option value="전체">전체</option>
              <option value="고졸">고졸</option>
              <option value="전문대졸">전문대졸</option>
              <option value="대졸">대졸</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            ※ 회원 정보는 개인정보 보호를 위해 일부만 공개됩니다
          </p>
          <button
            onClick={() => {
              setSelectedCountry('전체');
              setAgeRange('전체');
              setEducation('전체');
            }}
            className="text-blue-600 font-semibold hover:text-blue-700"
          >
            필터 초기화
          </button>
        </div>
      </div>

      {/* 프로필 그리드 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {filteredProfiles.map((profile) => (
          <div
            key={profile.id}
            className="bg-white border border-gray-300 overflow-hidden hover:border-blue-600 transition-all cursor-pointer"
          >
            {/* 프로필 이미지 */}
            <div className="relative h-64 bg-gray-100 flex items-center justify-center border-b border-gray-300">
              <div className="text-6xl text-gray-400">👤</div>
              <div className="absolute top-0 left-0 right-0 bg-blue-900 text-white px-3 py-2 text-center text-sm font-bold">
                {profile.country}
              </div>
            </div>

            {/* 프로필 정보 */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3 pb-2 border-b border-gray-200">
                {profile.name}
              </h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-16 font-semibold">나이:</span>
                  <span>{profile.age}세</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-16 font-semibold">지역:</span>
                  <span>{profile.city}</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-16 font-semibold">키:</span>
                  <span>{profile.height}cm</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-16 font-semibold">학력:</span>
                  <span>{profile.education}</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-16 font-semibold">직업:</span>
                  <span>{profile.occupation}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 h-10 overflow-hidden">
                {profile.description}
              </p>

              <button className="w-full bg-blue-600 text-white py-2.5 font-bold hover:bg-blue-700 transition-all">
                상세보기
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 결과 없음 메시지 */}
      {filteredProfiles.length === 0 && (
        <div className="text-center py-16 bg-white border border-gray-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            검색 결과가 없습니다
          </h3>
          <p className="text-gray-600 mb-6">
            다른 조건으로 다시 검색해 주세요
          </p>
          <button
            onClick={() => {
              setSelectedCountry('전체');
              setAgeRange('전체');
              setEducation('전체');
            }}
            className="bg-blue-600 text-white px-8 py-3 font-bold hover:bg-blue-700"
          >
            필터 초기화
          </button>
        </div>
      )}

      {/* 안내 문구 */}
      <div className="bg-blue-50 border border-blue-200 p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          더 많은 프로필을 보고 싶으신가요?
        </h3>
        <p className="text-gray-700 mb-6">
          상담 신청 시 고객님께 맞는 프로필을 추천해 드립니다<br />
          전문 상담사가 친절하게 안내해 드리겠습니다
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 font-bold hover:bg-blue-700 transition-all inline-block"
          >
            상담 신청하기
          </a>
          <a
            href="tel:1588-0000"
            className="bg-white text-blue-600 px-8 py-3 font-bold border-2 border-blue-600 hover:bg-blue-50 transition-all inline-block"
          >
            전화 상담
          </a>
        </div>
      </div>
    </div>
  );
}
