export default {
  settings: {
    title: 'Ayarlar',
    background: {
      title: 'Arka Plan',
      type: 'Arka Plan Türü',
      solid: 'Düz',
      gradient: 'Gradyan',
      picture: 'Resim',
      video: 'Video',
      color: 'Arka Plan Rengi',
      gradientColors: 'Gradyan Renkleri',
      gradientStart: 'Başlangıç',
      gradientEnd: 'Bitiş',
      gradientAngle: 'Açı',
      pictureFile: 'Resim Dosyası',
      videoFile: 'Video Dosyası',
      chooseImage: 'Resim seçin...',
      chooseVideo: 'Video seçin...',
      blurIntensity: 'Bulanıklık Yoğunluğu',
      noBlur: 'Bulanıklık yok',
      maxBlur: 'Maksimum bulanıklık',
      opacity: 'Opaklık'
    },
    clock: {
      title: 'Saat',
      type: 'Saat Türü',
      digital: 'Dijital',
      analog: 'Analog',
      timeFormat: 'Saat Formatı'
    },
    search: {
      title: 'Arama',
      defaultEngine: 'Varsayılan Arama Motoru',
      enabledEngines: 'Etkin Arama Motorları',
      atLeastOne: 'En az bir arama motoru etkinleştirilmelidir.'
    },
    weather: {
      title: 'Hava Durumu',
      locationMode: 'Konum Modu',
      automatic: 'Otomatik',
      manual: 'Manuel',
      autoInfo: 'Hava durumu konumu coğrafi konum ile otomatik olarak algılanacaktır.',
      searchCity: 'Şehir Ara',
      searchPlaceholder: 'Aramak için yazın...',
      selected: 'Seçili',
      selectCity: 'Önerilerden bir şehir arayın ve seçin.',
      temperatureUnit: 'Sıcaklık Birimi'
    },
    news: {
      title: 'Haber Akışı',
      feedType: 'Akış Türü',
      rssAtom: 'RSS / Atom',
      googleReader: 'Google Reader',
      rssUrl: 'RSS / Atom Akış URL\'si',
      rssPlaceholder: 'https://ornek.com/feed.xml',
      rssHelp: 'RSS veya Atom akışına doğrudan bağlantı.',
      apiUrl: 'API URL\'si (Google Reader)',
      apiPlaceholder: 'https://sunucunuz.com/api/greader.php',
      apiHelp: 'FreshRSS, Miniflux vb. ile uyumlu.',
      username: 'Kullanıcı Adı',
      usernamePlaceholder: 'kullanici-adiniz',
      password: 'Şifre / Token',
      passwordPlaceholder: 'sifreniz-veya-token',
      refresh: 'Makaleleri Yenile',
      permissionRequired: 'Bu URL\'ye erişmek için izin gerekli',
      grantPermission: 'Erişim ver'
    },
    language: {
      title: 'Dil',
      select: 'Dil Seçin'
    },
    attributions: {
      title: 'Hakkında & Yasal',
      legal: 'Gizlilik',
      legalText: 'Bu uzantı tarayıcınızda yerel olarak çalışır. Belirli özellikler (hava durumu, arama önerileri) için gerekli olan ve aşağıda listelenen hizmetlere yapılan anonim istekler dışında hiçbir kişisel veri toplanmaz veya harici sunuculara gönderilmez. Ayarlarınız tarayıcınızda yerel olarak saklanır.',
      disclaimer: 'Bu uzantı bağımsız bir projedir ve Google, Bing, Yahoo, DuckDuckGo, Perplexity, ChatGPT veya belirtilen diğer üçüncü taraf hizmetleriyle ilişkili değildir, bunlar tarafından desteklenmemekte veya sponsor olunmamaktadır.',
      project: 'Proje',
      sourceCode: 'Kaynak kodu',
      starGitHub: 'GitHub\'da yıldız verin',
      reportIssue: 'GitHub\'da sorun bildirin',
      services: 'Hizmetler & Lisanslar',
      fontAwesome: 'FontAwesome (İkonlar) - CC BY 4.0, SIL OFL, MIT',
      simpleIcons: 'Simple Icons (Marka İkonları) - CC0 1.0 Universal',
      openMeteo: 'Open-Meteo (Hava Durumu Verileri) - CC BY 4.0',
      duckDuckGo: 'DuckDuckGo (Arama Önerileri)',
      openStreetMap: 'Coğrafi Kodlama',
      license: 'Lisans'
    }
  },
  search: {
    placeholder: 'Web\'de ara'
  },
  news: {
    loading: 'Yükleniyor...',
    configure: 'Ayarlarda RSS yapılandırın',
    noArticles: 'Makale yok',
    cached: 'Önbelleğe alınmış makaleler gösteriliyor'
  },
  weather: {
    unavailable: 'Hava durumu mevcut değil',
    clear: 'Açık hava',
    partlyCloudy: 'Parçalı bulutlu',
    overcast: 'Kapalı',
    foggy: 'Sisli',
    drizzle: 'Çisenti',
    rain: 'Yağmur',
    snow: 'Kar',
    rainShowers: 'Sağanak yağmur',
    thunderstorm: 'Fırtına',
    unknown: 'Bilinmiyor',
    now: 'Şimdi'
  },
  time: {
    minutesAgo: '{n}dk önce',
    hoursAgo: '{n}sa önce',
    daysAgo: '{n}g önce'
  }
};
