export default {
  settings: {
    title: 'Настройки',
    background: {
      title: 'Фон',
      type: 'Тип фона',
      solid: 'Сплошной',
      gradient: 'Градиент',
      picture: 'Изображение',
      video: 'Видео',
      color: 'Цвет фона',
      gradientColors: 'Цвета градиента',
      gradientStart: 'Начало',
      gradientEnd: 'Конец',
      gradientAngle: 'Угол',
      pictureFile: 'Файл изображения',
      videoFile: 'Видео файл',
      chooseImage: 'Выбрать изображение...',
      chooseVideo: 'Выбрать видео...',
      blurIntensity: 'Интенсивность размытия',
      noBlur: 'Без размытия',
      maxBlur: 'Максимальное размытие'
    },
    clock: {
      title: 'Часы',
      type: 'Тип часов',
      digital: 'Цифровые',
      analog: 'Аналоговые',
      timeFormat: 'Формат времени'
    },
    search: {
      title: 'Поиск',
      defaultEngine: 'Поисковая система по умолчанию',
      enabledEngines: 'Включенные поисковые системы',
      atLeastOne: 'Должна быть включена хотя бы одна поисковая система.'
    },
    weather: {
      title: 'Погода',
      locationMode: 'Режим местоположения',
      automatic: 'Автоматический',
      manual: 'Ручной',
      autoInfo: 'Местоположение для погоды будет определено автоматически через геолокацию.',
      searchCity: 'Поиск города',
      searchPlaceholder: 'Введите для поиска...',
      selected: 'Выбрано',
      selectCity: 'Найдите и выберите город из предложений.',
      temperatureUnit: 'Единица температуры'
    },
    news: {
      title: 'Новостная лента',
      feedType: 'Тип ленты',
      rssAtom: 'RSS / Atom',
      googleReader: 'Google Reader',
      rssUrl: 'URL ленты RSS / Atom',
      rssPlaceholder: 'https://example.com/feed.xml',
      rssHelp: 'Прямая ссылка на RSS или Atom ленту.',
      apiUrl: 'URL API (Google Reader)',
      apiPlaceholder: 'https://your-instance.com/api/greader.php',
      apiHelp: 'Совместимо с FreshRSS, Miniflux и т.д.',
      username: 'Имя пользователя',
      usernamePlaceholder: 'ваше-имя-пользователя',
      password: 'Пароль / Токен',
      passwordPlaceholder: 'ваш-пароль-или-токен',
      refresh: 'Обновить статьи',
      permissionRequired: 'Требуется разрешение для доступа к этому URL',
      grantPermission: 'Предоставить доступ'
    },
    language: {
      title: 'Язык',
      select: 'Выбрать язык'
    },
    attributions: {
      title: 'О программе и правовая информация',
      legal: 'Конфиденциальность',
      legalText: 'Это расширение работает локально в вашем браузере. Личные данные не собираются и не отправляются на внешние серверы, за исключением анонимных запросов к перечисленным ниже сервисам, необходимым для работы определенных функций (погода, поисковые подсказки). Ваши настройки хранятся локально в вашем браузере.',
      disclaimer: 'Это расширение является независимым проектом и не связано, не одобрено и не спонсируется Google, Bing, Yahoo, DuckDuckGo, Perplexity, ChatGPT или любыми другими упомянутыми сторонними сервисами.',
      project: 'Проект',
      sourceCode: 'Исходный код',
      starGitHub: 'Поставьте звезду на GitHub',
      reportIssue: 'Сообщить о проблеме на GitHub',
      services: 'Сервисы и лицензии',
      fontAwesome: 'FontAwesome (Иконки) - CC BY 4.0, SIL OFL, MIT',
      simpleIcons: 'Simple Icons (Брендовые иконки) - CC0 1.0 Universal',
      openMeteo: 'Open-Meteo (Данные о погоде) - CC BY 4.0',
      duckDuckGo: 'DuckDuckGo (Поисковые подсказки)',
      openStreetMap: 'Геокодирование',
      license: 'Лицензия'
    }
  },
  search: {
    placeholder: 'Искать в интернете'
  },
  news: {
    loading: 'Загрузка...',
    configure: 'Настроить RSS в настройках',
    noArticles: 'Нет статей',
    cached: 'Показ кэшированных статей'
  },
  weather: {
    unavailable: 'Погода недоступна',
    clear: 'Ясное небо',
    partlyCloudy: 'Переменная облачность',
    overcast: 'Пасмурно',
    foggy: 'Туманно',
    drizzle: 'Морось',
    rain: 'Дождь',
    snow: 'Снег',
    rainShowers: 'Ливни',
    thunderstorm: 'Гроза',
    unknown: 'Неизвестно',
    now: 'Сейчас'
  },
  time: {
    minutesAgo: '{n}м назад',
    hoursAgo: '{n}ч назад',
    daysAgo: '{n}д назад'
  }
};
