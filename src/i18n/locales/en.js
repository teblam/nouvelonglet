export default {
  settings: {
    title: 'Settings',
    background: {
      title: 'Background',
      type: 'Background Type',
      solid: 'Solid',
      gradient: 'Gradient',
      picture: 'Picture',
      video: 'Video',
      color: 'Background Color',
      gradientColors: 'Gradient Colors',
      gradientStart: 'Start',
      gradientEnd: 'End',
      gradientAngle: 'Angle',
      pictureFile: 'Picture File',
      videoFile: 'Video File',
      chooseImage: 'Choose an image file...',
      chooseVideo: 'Choose a video file...',
      blurIntensity: 'Blur Intensity',
      noBlur: 'No blur',
      maxBlur: 'Maximum blur',
      opacity: 'Opacity'
    },
    clock: {
      title: 'Clock',
      type: 'Clock Type',
      digital: 'Digital',
      analog: 'Analog',
      timeFormat: 'Time Format'
    },
    search: {
      title: 'Search',
      defaultEngine: 'Default Search Engine',
      enabledEngines: 'Enabled Search Engines',
      atLeastOne: 'At least one search engine must be enabled.'
    },
    weather: {
      title: 'Weather',
      locationMode: 'Location Mode',
      automatic: 'Automatic',
      manual: 'Manual',
      autoInfo: 'Weather location will be detected automatically via geolocation.',
      searchCity: 'Search City',
      searchPlaceholder: 'Type to search...',
      selected: 'Selected',
      selectCity: 'Search and select a city from the suggestions.',
      temperatureUnit: 'Temperature Unit'
    },
    news: {
      title: 'News Feed',
      feedType: 'Feed Type',
      rssAtom: 'RSS / Atom',
      googleReader: 'Google Reader',
      rssUrl: 'RSS / Atom Feed URL',
      rssPlaceholder: 'https://example.com/feed.xml',
      rssHelp: 'Direct link to an RSS or Atom feed.',
      apiUrl: 'API URL (Google Reader)',
      apiPlaceholder: 'https://your-instance.com/api/greader.php',
      apiHelp: 'Compatible with FreshRSS, Miniflux, etc.',
      username: 'Username',
      usernamePlaceholder: 'your-username',
      password: 'Password / Token',
      passwordPlaceholder: 'your-password-or-token',
      refresh: 'Refresh Articles'
    },
    language: {
      title: 'Language',
      select: 'Select Language'
    },
    attributions: {
      title: 'About & Legal',
      legal: 'Privacy',
      legalText: 'This extension runs locally in your browser. No personal data is collected or sent to external servers, except for anonymous requests to the services listed below required for specific features (weather, search suggestions). Your settings are stored locally in your browser.',
      disclaimer: 'This extension is an independent project and is not affiliated with, endorsed by, or sponsored by Google, Bing, Yahoo, DuckDuckGo, Perplexity, ChatGPT, or any other third-party services mentioned.',
      project: 'Project',
      sourceCode: 'Source code',
      starGitHub: 'Star us on GitHub',
      reportIssue: 'Report an issue on GitHub',
      services: 'Services & Licenses',
      fontAwesome: 'FontAwesome (Icons) - CC BY 4.0, SIL OFL, MIT',
      simpleIcons: 'Simple Icons (Brand Icons) - CC0 1.0 Universal',
      openMeteo: 'Open-Meteo (Weather Data) - CC BY 4.0',
      duckDuckGo: 'DuckDuckGo (Search Suggestions)',
      openStreetMap: 'Geocoding',
      license: 'License'
    }
  },
  search: {
    placeholder: 'Search the web'
  },
  news: {
    loading: 'Loading...',
    configure: 'Configure RSS in settings',
    noArticles: 'No articles',
    cached: 'Showing cached articles'
  },
  weather: {
    unavailable: 'Weather unavailable',
    clear: 'Clear sky',
    partlyCloudy: 'Partly cloudy',
    overcast: 'Overcast',
    foggy: 'Foggy',
    drizzle: 'Drizzle',
    rain: 'Rain',
    snow: 'Snow',
    rainShowers: 'Rain showers',
    thunderstorm: 'Thunderstorm',
    unknown: 'Unknown',
    now: 'Now'
  },
  time: {
    minutesAgo: '{n}m ago',
    hoursAgo: '{n}h ago',
    daysAgo: '{n}d ago'
  }
};
