export default {
  settings: {
    title: 'الإعدادات',
    background: {
      title: 'الخلفية',
      type: 'نوع الخلفية',
      solid: 'لون واحد',
      gradient: 'تدرج',
      picture: 'صورة',
      video: 'فيديو',
      color: 'لون الخلفية',
      gradientColors: 'ألوان التدرج',
      gradientStart: 'البداية',
      gradientEnd: 'النهاية',
      gradientAngle: 'الزاوية',
      pictureFile: 'ملف الصورة',
      videoFile: 'ملف الفيديو',
      chooseImage: 'اختر صورة...',
      chooseVideo: 'اختر فيديو...',
      blurIntensity: 'شدة التمويه',
      noBlur: 'بدون تمويه',
      maxBlur: 'أقصى تمويه'
    },
    clock: {
      title: 'الساعة',
      type: 'نوع الساعة',
      digital: 'رقمية',
      analog: 'تناظرية',
      timeFormat: 'تنسيق الوقت'
    },
    search: {
      title: 'البحث',
      defaultEngine: 'محرك البحث الافتراضي',
      enabledEngines: 'محركات البحث المفعلة',
      atLeastOne: 'يجب تفعيل محرك بحث واحد على الأقل.'
    },
    weather: {
      title: 'الطقس',
      locationMode: 'وضع الموقع',
      automatic: 'تلقائي',
      manual: 'يدوي',
      autoInfo: 'سيتم اكتشاف موقع الطقس تلقائيًا عبر تحديد الموقع الجغرافي.',
      searchCity: 'البحث عن مدينة',
      searchPlaceholder: 'اكتب للبحث...',
      selected: 'المحدد',
      selectCity: 'ابحث واختر مدينة من الاقتراحات.',
      temperatureUnit: 'وحدة الحرارة'
    },
    news: {
      title: 'تغذية الأخبار',
      feedType: 'نوع التغذية',
      rssAtom: 'RSS / Atom',
      googleReader: 'Google Reader',
      rssUrl: 'رابط تغذية RSS / Atom',
      rssPlaceholder: 'https://example.com/feed.xml',
      rssHelp: 'رابط مباشر لتغذية RSS أو Atom.',
      apiUrl: 'رابط API (Google Reader)',
      apiPlaceholder: 'https://your-instance.com/api/greader.php',
      apiHelp: 'متوافق مع FreshRSS و Miniflux وغيرها.',
      username: 'اسم المستخدم',
      usernamePlaceholder: 'اسم-المستخدم',
      password: 'كلمة المرور / الرمز',
      passwordPlaceholder: 'كلمة-المرور-او-الرمز',
      refresh: 'تحديث المقالات',
      permissionRequired: 'مطلوب إذن للوصول إلى هذا الرابط',
      grantPermission: 'منح الوصول'
    },
    language: {
      title: 'اللغة',
      select: 'اختر اللغة'
    },
    attributions: {
      title: 'حول والمعلومات القانونية',
      legal: 'الخصوصية',
      legalText: 'يعمل هذا الملحق محليًا في متصفحك. لا يتم جمع أي بيانات شخصية أو إرسالها إلى خوادم خارجية، باستثناء الطلبات المجهولة للخدمات المدرجة أدناه والمطلوبة لميزات محددة (الطقس، اقتراحات البحث). يتم تخزين إعداداتك محليًا في متصفحك.',
      disclaimer: 'هذا الامتداد هو مشروع مستقل وليس تابعًا أو معتمدًا أو مدعومًا من قبل Google أو Bing أو Yahoo أو DuckDuckGo أو Perplexity أو ChatGPT أو أي خدمات خارجية أخرى مذكورة.',
      project: 'المشروع',
      sourceCode: 'الكود المصدري',
      starGitHub: 'امنحنا نجمة على GitHub',
      reportIssue: 'الإبلاغ عن مشكلة على GitHub',
      services: 'الخدمات والتراخيص',
      fontAwesome: 'FontAwesome (أيقونات) - CC BY 4.0, SIL OFL, MIT',
      simpleIcons: 'Simple Icons (أيقونات العلامات التجارية) - CC0 1.0 Universal',
      openMeteo: 'Open-Meteo (بيانات الطقس) - CC BY 4.0',
      duckDuckGo: 'DuckDuckGo (اقتراحات البحث)',
      openStreetMap: 'الترميز الجغرافي',
      license: 'الترخيص'
    }
  },
  search: {
    placeholder: 'البحث في الويب'
  },
  news: {
    loading: 'جار التحميل...',
    configure: 'تكوين RSS في الإعدادات',
    noArticles: 'لا توجد مقالات',
    cached: 'عرض المقالات المخزنة مؤقتًا'
  },
  weather: {
    unavailable: 'الطقس غير متاح',
    clear: 'سماء صافية',
    partlyCloudy: 'غائم جزئيًا',
    overcast: 'ملبد بالغيوم',
    foggy: 'ضبابي',
    drizzle: 'رذاذ',
    rain: 'مطر',
    snow: 'ثلج',
    rainShowers: 'زخات مطر',
    thunderstorm: 'عاصفة رعدية',
    unknown: 'غير معروف',
    now: 'الآن'
  },
  time: {
    minutesAgo: 'منذ {n} د',
    hoursAgo: 'منذ {n} س',
    daysAgo: 'منذ {n} ي'
  }
};
