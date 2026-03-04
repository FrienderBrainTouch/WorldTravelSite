# World Travel VR Site (세계여행 VR 학습도구)

세계여행 VR 콘텐츠에서 다루는 국가·문화 요소만을 기반으로 문제를 구성한 **세계여행 VR 전용 학습도구 웹 사이트**입니다.  
학생들은 VR로 여행한 나라를 다시 떠올리며, 관련 국기·음식·문화·랜드마크·OX 퀴즈를 풀면서 복습할 수 있습니다.

## 기술 스택

- **React 18** + **TypeScript**
- **Vite 6** (빌드·개발 서버)
- **React Router 6** (라우팅)
- CSS Modules (스타일)

## 실행 방법

### 요구 사항

- Node.js 18+ (권장: 20+)
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (기본: http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview
```

### 기타 스크립트

```bash
# 국기 이미지 다운로드 (public/flags)
npm run download-flags
```

## 프로젝트 구조

```
├── public/
│   ├── data/
│   │   ├── countries.json    # 국가 목록 (id, name, city, coverColor, flagCode)
│   │   └── questions/        # 국가별 퀴즈 (국기·음식·문화·랜드마크·OX)
│   └── flags/               # 국기 이미지 (ISO 코드별)
├── src/
│   ├── context/              # 인증 등 전역 상태
│   ├── pages/
│   │   ├── Login.tsx         # 로그인
│   │   ├── CountryList.tsx   # 국가 목록
│   │   ├── CountryActivityList.tsx  # 국가별 활동 선택
│   │   └── ActivityPlay.tsx  # 활동 플레이 (퀴즈·OX)
│   ├── types/                # TypeScript 타입
│   ├── utils/                # 유틸 (국기 URL 등)
│   └── App.tsx
├── scripts/                  # download-flags 등
├── package.json
└── vite.config.ts
```

## 활동 종류 (세계여행 VR 연계)

| 활동 | 설명 |
|------|------|
| 국기 찾기 | 세계여행 VR에서 방문한 국가의 국기 고르기 |
| 음식 찾기 | 10문제, VR에서 소개된 국가 대표 음식 고르기 |
| 대표 문화 | VR 콘텐츠에 등장한 해당 국가의 문화 요소 선택 |
| 랜드마크 찾기 | 10문제, VR에서 본 랜드마크·명소 고르기 |
| OX 퀴즈 | 10문제, VR 속 세계여행 내용을 기반으로 한 O/X 퀴즈 (설명 포함) |

## 데이터 형식 (세계여행 VR 전용)

- **countries.json**: `id`, `name`, `city`, `coverColor`, `flagCode`  
  - 세계여행 VR에 실제로 등장하는 국가만을 포함합니다.
- **questions/{countryId}.json**: `flagFind`, `foodFind`, `cultureFind`, `landmarkFind`, `oxQuiz`  
  - 각 항목은 세계여행 VR에서 다룬 장면·정보를 기반으로 구성된 `question`, `correctAnswer`, `options`(선택지), `explanation`(설명, 선택) 등으로 이루어집니다.

## 라이선스

Private project.
