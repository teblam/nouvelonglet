export default {
  settings: {
    title: '設定',
    background: {
      title: '背景',
      type: '背景類型',
      solid: '純色',
      gradient: '漸層',
      picture: '圖片',
      video: '影片',
      color: '背景顏色',
      gradientColors: '漸層顏色',
      gradientStart: '開始',
      gradientEnd: '結束',
      gradientAngle: '角度',
      pictureFile: '圖片檔案',
      videoFile: '影片檔案',
      chooseImage: '選擇圖片...',
      chooseVideo: '選擇影片...',
      blurIntensity: '模糊強度',
      noBlur: '無模糊',
      maxBlur: '最大模糊',
      opacity: '透明度'
    },
    clock: {
      title: '時鐘',
      type: '時鐘類型',
      digital: '數位',
      analog: '類比',
      timeFormat: '時間格式'
    },
    search: {
      title: '搜尋',
      defaultEngine: '預設搜尋引擎',
      enabledEngines: '已啟用的搜尋引擎',
      atLeastOne: '至少必須啟用一個搜尋引擎。'
    },
    weather: {
      title: '天氣',
      locationMode: '位置模式',
      automatic: '自動',
      manual: '手動',
      autoInfo: '天氣位置將透過地理位置自動偵測。',
      searchCity: '搜尋城市',
      searchPlaceholder: '輸入以搜尋...',
      selected: '已選擇',
      selectCity: '從建議中搜尋並選擇城市。',
      temperatureUnit: '溫度單位'
    },
    news: {
      title: '新聞提要',
      feedType: '提要類型',
      rssAtom: 'RSS / Atom',
      googleReader: 'Google Reader',
      rssUrl: 'RSS / Atom 提要網址',
      rssPlaceholder: 'https://example.com/feed.xml',
      rssHelp: 'RSS 或 Atom 提要的直接連結。',
      apiUrl: 'API 網址 (Google Reader)',
      apiPlaceholder: 'https://your-instance.com/api/greader.php',
      apiHelp: '相容於 FreshRSS、Miniflux 等。',
      username: '使用者名稱',
      usernamePlaceholder: 'your-username',
      password: '密碼 / 權杖',
      passwordPlaceholder: 'your-password-or-token',
      refresh: '重新整理文章'
    },
    language: {
      title: '語言',
      select: '選擇語言'
    },
    attributions: {
      title: '關於與法律',
      legal: '隱私',
      legalText: '此擴充功能在您的瀏覽器中本地執行。除了為特定功能（天氣、搜尋建議）而向下列服務發送的匿名請求外，不會收集任何個人數據，也不會將其發送到外部伺服器。您的設定本地儲存在瀏覽器中。',
      disclaimer: '此擴充功能是一個獨立專案，與 Google、Bing、Yahoo、DuckDuckGo、Perplexity、ChatGPT 或提及的任何其他第三方服務無關，也未獲得其認可或贊助。',
      project: '專案',
      sourceCode: '原始碼',
      starGitHub: '在 GitHub 上給我們加星',
      reportIssue: '在 GitHub 上回報問題',
      services: '服務與許可',
      fontAwesome: 'FontAwesome (圖標) - CC BY 4.0, SIL OFL, MIT',
      simpleIcons: 'Simple Icons (品牌圖標) - CC0 1.0 Universal',
      openMeteo: 'Open-Meteo (天氣數據) - CC BY 4.0',
      duckDuckGo: 'DuckDuckGo (搜尋建議)',
      openStreetMap: '地理編碼',
      license: '許可'
    }
  },
  search: {
    placeholder: '搜尋網頁'
  },
  news: {
    loading: '載入中...',
    configure: '在設定中配置 RSS',
    noArticles: '無文章',
    cached: '顯示快取的文章'
  },
  weather: {
    unavailable: '天氣資訊無法使用',
    clear: '晴朗',
    partlyCloudy: '部分多雲',
    overcast: '陰天',
    foggy: '有霧',
    drizzle: '細雨',
    rain: '雨',
    snow: '雪',
    rainShowers: '陣雨',
    thunderstorm: '雷雨',
    unknown: '未知',
    now: '現在'
  },
  time: {
    minutesAgo: '{n}分鐘前',
    hoursAgo: '{n}小時前',
    daysAgo: '{n}天前'
  }
};
