export default {
  settings: {
    title: '設定',
    background: {
      title: '背景',
      type: '背景タイプ',
      solid: '単色',
      gradient: 'グラデーション',
      picture: '画像',
      video: '動画',
      color: '背景色',
      gradientColors: 'グラデーションカラー',
      gradientStart: '開始',
      gradientEnd: '終了',
      gradientAngle: '角度',
      pictureFile: '画像ファイル',
      videoFile: '動画ファイル',
      chooseImage: '画像を選択...',
      chooseVideo: '動画を選択...',
      blurIntensity: 'ぼかしの強さ',
      noBlur: 'ぼかしなし',
      maxBlur: '最大ぼかし'
    },
    clock: {
      title: '時計',
      type: '時計タイプ',
      digital: 'デジタル',
      analog: 'アナログ',
      timeFormat: '時刻形式'
    },
    search: {
      title: '検索',
      defaultEngine: 'デフォルト検索エンジン',
      enabledEngines: '有効な検索エンジン',
      atLeastOne: '少なくとも1つの検索エンジンを有効にする必要があります。'
    },
    weather: {
      title: '天気',
      locationMode: '位置情報モード',
      automatic: '自動',
      manual: '手動',
      autoInfo: '天気の位置情報は位置情報サービスにより自動的に検出されます。',
      searchCity: '都市を検索',
      searchPlaceholder: '入力して検索...',
      selected: '選択済み',
      selectCity: '候補から都市を検索して選択してください。',
      temperatureUnit: '温度単位'
    },
    news: {
      title: 'ニュースフィード',
      feedType: 'フィードタイプ',
      rssAtom: 'RSS / Atom',
      googleReader: 'Google Reader',
      rssUrl: 'RSS / AtomフィードURL',
      rssPlaceholder: 'https://example.com/feed.xml',
      rssHelp: 'RSSまたはAtomフィードへの直接リンク。',
      apiUrl: 'API URL (Google Reader)',
      apiPlaceholder: 'https://your-instance.com/api/greader.php',
      apiHelp: 'FreshRSS、Minifluxなどに対応。',
      username: 'ユーザー名',
      usernamePlaceholder: 'your-username',
      password: 'パスワード / トークン',
      passwordPlaceholder: 'your-password-or-token',
      refresh: '記事を更新',
      permissionRequired: 'このURLへのアクセス許可が必要です',
      grantPermission: 'アクセスを許可'
    },
    language: {
      title: '言語',
      select: '言語を選択'
    },
    attributions: {
      title: 'アバウト & リーガル',
      legal: 'プライバシー',
      legalText: 'この拡張機能はブラウザ内でローカルに動作します。特定の機能（天気、検索候補）に必要な以下のサービスへの匿名リクエストを除き、個人データが収集されたり外部サーバーに送信されたりすることはありません。設定はブラウザにローカルに保存されます。',
      disclaimer: 'この拡張機能は独立したプロジェクトであり、Google、Bing、Yahoo、DuckDuckGo、Perplexity、ChatGPT、または言及されているその他のサードパーティサービスと提携、承認、または後援されていません。',
      project: 'プロジェクト',
      sourceCode: 'ソースコード',
      starGitHub: 'GitHubでスターを付ける',
      reportIssue: 'GitHubで問題を報告',
      services: 'サービス & ライセンス',
      fontAwesome: 'FontAwesome (アイコン) - CC BY 4.0, SIL OFL, MIT',
      simpleIcons: 'Simple Icons (ブランドアイコン) - CC0 1.0 Universal',
      openMeteo: 'Open-Meteo (気象データ) - CC BY 4.0',
      duckDuckGo: 'DuckDuckGo (検索候補)',
      openStreetMap: 'ジオコーディング',
      license: 'ライセンス'
    }
  },
  search: {
    placeholder: 'ウェブを検索'
  },
  news: {
    loading: '読み込み中...',
    configure: '設定でRSSを設定',
    noArticles: '記事なし',
    cached: 'キャッシュされた記事を表示'
  },
  weather: {
    unavailable: '天気情報を利用できません',
    clear: '晴天',
    partlyCloudy: '晴れ時々曇り',
    overcast: '曇り',
    foggy: '霧',
    drizzle: '霧雨',
    rain: '雨',
    snow: '雪',
    rainShowers: 'にわか雨',
    thunderstorm: '雷雨',
    unknown: '不明',
    now: '現在'
  },
  time: {
    minutesAgo: '{n}分前',
    hoursAgo: '{n}時間前',
    daysAgo: '{n}日前'
  }
};
