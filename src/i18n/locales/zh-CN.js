export default {
  settings: {
    title: '设置',
    background: {
      title: '背景',
      type: '背景类型',
      solid: '纯色',
      gradient: '渐变',
      picture: '图片',
      video: '视频',
      color: '背景颜色',
      gradientColors: '渐变颜色',
      gradientStart: '开始',
      gradientEnd: '结束',
      gradientAngle: '角度',
      pictureFile: '图片文件',
      videoFile: '视频文件',
      chooseImage: '选择图片...',
      chooseVideo: '选择视频...',
      blurIntensity: '模糊强度',
      noBlur: '无模糊',
      maxBlur: '最大模糊',
      opacity: '透明度'
    },
    clock: {
      title: '时钟',
      type: '时钟类型',
      digital: '数字',
      analog: '模拟',
      timeFormat: '时间格式'
    },
    search: {
      title: '搜索',
      defaultEngine: '默认搜索引擎',
      enabledEngines: '已启用的搜索引擎',
      atLeastOne: '至少必须启用一个搜索引擎。'
    },
    weather: {
      title: '天气',
      locationMode: '位置模式',
      automatic: '自动',
      manual: '手动',
      autoInfo: '天气位置将通过地理位置自动检测。',
      searchCity: '搜索城市',
      searchPlaceholder: '输入以搜索...',
      selected: '已选择',
      selectCity: '从建议中搜索并选择城市。',
      temperatureUnit: '温度单位'
    },
    news: {
      title: '新闻源',
      feedType: '源类型',
      rssAtom: 'RSS / Atom',
      googleReader: 'Google Reader',
      rssUrl: 'RSS / Atom 源网址',
      rssPlaceholder: 'https://example.com/feed.xml',
      rssHelp: 'RSS 或 Atom 源的直接链接。',
      apiUrl: 'API 网址 (Google Reader)',
      apiPlaceholder: 'https://your-instance.com/api/greader.php',
      apiHelp: '兼容 FreshRSS、Miniflux 等。',
      username: '用户名',
      usernamePlaceholder: 'your-username',
      password: '密码 / 令牌',
      passwordPlaceholder: 'your-password-or-token',
      refresh: '刷新文章',
      permissionRequired: '需要权限才能访问此网址',
      grantPermission: '授予访问权限'
    },
    language: {
      title: '语言',
      select: '选择语言'
    },
    attributions: {
      title: '关于与法律',
      legal: '隐私',
      legalText: '此扩展程序在您的浏览器中本地运行。除了为特定功能（天气、搜索建议）而向下列服务发送的匿名请求外，不会收集任何个人数据，也不会将其发送到外部服务器。您的设置本地存储在浏览器中。',
      disclaimer: '此扩展程序是一个独立项目，与 Google、Bing、Yahoo、DuckDuckGo、Perplexity、ChatGPT 或提及的任何其他第三方服务无关，也未获得其认可或赞助。',
      project: '项目',
      sourceCode: '源代码',
      starGitHub: '在 GitHub 上给我们加星',
      reportIssue: '在 GitHub 上报告问题',
      services: '服务与许可',
      fontAwesome: 'FontAwesome (图标) - CC BY 4.0, SIL OFL, MIT',
      simpleIcons: 'Simple Icons (品牌图标) - CC0 1.0 Universal',
      openMeteo: 'Open-Meteo (天气数据) - CC BY 4.0',
      duckDuckGo: 'DuckDuckGo (搜索建议)',
      openStreetMap: '地理编码',
      license: '许可'
    }
  },
  search: {
    placeholder: '搜索网页'
  },
  news: {
    loading: '加载中...',
    configure: '在设置中配置 RSS',
    noArticles: '无文章',
    cached: '显示缓存的文章'
  },
  weather: {
    unavailable: '天气信息不可用',
    clear: '晴朗',
    partlyCloudy: '部分多云',
    overcast: '阴天',
    foggy: '有雾',
    drizzle: '细雨',
    rain: '雨',
    snow: '雪',
    rainShowers: '阵雨',
    thunderstorm: '雷雨',
    unknown: '未知',
    now: '现在'
  },
  time: {
    minutesAgo: '{n}分钟前',
    hoursAgo: '{n}小时前',
    daysAgo: '{n}天前'
  }
};
