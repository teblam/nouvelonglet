export default {
  settings: {
    title: '설정',
    background: {
      title: '배경',
      type: '배경 유형',
      solid: '단색',
      gradient: '그라디언트',
      picture: '이미지',
      video: '동영상',
      color: '배경색',
      gradientColors: '그라디언트 색상',
      gradientStart: '시작',
      gradientEnd: '끝',
      gradientAngle: '각도',
      pictureFile: '이미지 파일',
      videoFile: '동영상 파일',
      chooseImage: '이미지 선택...',
      chooseVideo: '동영상 선택...',
      blurIntensity: '흐림 강도',
      noBlur: '흐림 없음',
      maxBlur: '최대 흐림'
    },
    clock: {
      title: '시계',
      type: '시계 유형',
      digital: '디지털',
      analog: '아날로그',
      timeFormat: '시간 형식'
    },
    search: {
      title: '검색',
      defaultEngine: '기본 검색 엔진',
      enabledEngines: '활성화된 검색 엔진',
      atLeastOne: '최소 하나의 검색 엔진을 활성화해야 합니다.'
    },
    weather: {
      title: '날씨',
      locationMode: '위치 모드',
      automatic: '자동',
      manual: '수동',
      autoInfo: '날씨 위치는 위치정보 서비스를 통해 자동으로 감지됩니다.',
      searchCity: '도시 검색',
      searchPlaceholder: '입력하여 검색...',
      selected: '선택됨',
      selectCity: '제안에서 도시를 검색하고 선택하세요.',
      temperatureUnit: '온도 단위'
    },
    news: {
      title: '뉴스 피드',
      feedType: '피드 유형',
      rssAtom: 'RSS / Atom',
      googleReader: 'Google Reader',
      rssUrl: 'RSS / Atom 피드 URL',
      rssPlaceholder: 'https://example.com/feed.xml',
      rssHelp: 'RSS 또는 Atom 피드로의 직접 링크.',
      apiUrl: 'API URL (Google Reader)',
      apiPlaceholder: 'https://your-instance.com/api/greader.php',
      apiHelp: 'FreshRSS, Miniflux 등과 호환.',
      username: '사용자 이름',
      usernamePlaceholder: 'your-username',
      password: '비밀번호 / 토큰',
      passwordPlaceholder: 'your-password-or-token',
      refresh: '기사 새로고침',
      permissionRequired: '이 URL에 액세스하려면 권한이 필요합니다',
      grantPermission: '액세스 허용'
    },
    language: {
      title: '언어',
      select: '언어 선택'
    },
    attributions: {
      title: '정보 및 법적 고지',
      legal: '개인정보 보호',
      legalText: '이 확장 프로그램은 브라우저에서 로컬로 실행됩니다. 특정 기능(날씨, 검색 제안)에 필요한 아래 나열된 서비스에 대한 익명 요청을 제외하고는 어떠한 개인 데이터도 수집되거나 외부 서버로 전송되지 않습니다. 설정은 브라우저에 로컬로 저장됩니다.',
      disclaimer: '이 확장 프로그램은 독립적인 프로젝트이며 Google, Bing, Yahoo, DuckDuckGo, Perplexity, ChatGPT 또는 언급된 기타 제3자 서비스와 제휴, 보증 또는 후원되지 않습니다.',
      project: '프로젝트',
      sourceCode: '소스 코드',
      starGitHub: 'GitHub에서 스타 주기',
      reportIssue: 'GitHub에서 문제 보고',
      services: '서비스 및 라이선스',
      fontAwesome: 'FontAwesome (아이콘) - CC BY 4.0, SIL OFL, MIT',
      simpleIcons: 'Simple Icons (브랜드 아이콘) - CC0 1.0 Universal',
      openMeteo: 'Open-Meteo (날씨 데이터) - CC BY 4.0',
      duckDuckGo: 'DuckDuckGo (검색 제안)',
      openStreetMap: '지오코딩',
      license: '라이선스'
    }
  },
  search: {
    placeholder: '웹 검색'
  },
  news: {
    loading: '로딩 중...',
    configure: '설정에서 RSS 구성',
    noArticles: '기사 없음',
    cached: '캐시된 기사 표시'
  },
  weather: {
    unavailable: '날씨 정보를 사용할 수 없습니다',
    clear: '맑음',
    partlyCloudy: '구름 조금',
    overcast: '흐림',
    foggy: '안개',
    drizzle: '이슬비',
    rain: '비',
    snow: '눈',
    rainShowers: '소나기',
    thunderstorm: '뇌우',
    unknown: '알 수 없음',
    now: '현재'
  },
  time: {
    minutesAgo: '{n}분 전',
    hoursAgo: '{n}시간 전',
    daysAgo: '{n}일 전'
  }
};
