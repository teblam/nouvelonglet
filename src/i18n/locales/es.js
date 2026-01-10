export default {
  settings: {
    title: 'Configuración',
    background: {
      title: 'Fondo',
      type: 'Tipo de fondo',
      solid: 'Sólido',
      gradient: 'Degradado',
      picture: 'Imagen',
      video: 'Vídeo',
      color: 'Color de fondo',
      gradientColors: 'Colores del degradado',
      gradientStart: 'Inicio',
      gradientEnd: 'Fin',
      gradientAngle: 'Ángulo',
      pictureFile: 'Archivo de imagen',
      videoFile: 'Archivo de vídeo',
      chooseImage: 'Elegir una imagen...',
      chooseVideo: 'Elegir un vídeo...',
      blurIntensity: 'Intensidad del desenfoque',
      noBlur: 'Sin desenfoque',
      maxBlur: 'Desenfoque máximo',
      opacity: 'Opacidad'
    },
    clock: {
      title: 'Reloj',
      type: 'Tipo de reloj',
      digital: 'Digital',
      analog: 'Analógico',
      timeFormat: 'Formato de hora'
    },
    search: {
      title: 'Búsqueda',
      defaultEngine: 'Motor de búsqueda predeterminado',
      enabledEngines: 'Motores de búsqueda activados',
      atLeastOne: 'Al menos un motor de búsqueda debe estar activado.'
    },
    weather: {
      title: 'Clima',
      locationMode: 'Modo de ubicación',
      automatic: 'Automático',
      manual: 'Manual',
      autoInfo: 'La ubicación del clima se detectará automáticamente mediante geolocalización.',
      searchCity: 'Buscar ciudad',
      searchPlaceholder: 'Escribe para buscar...',
      selected: 'Seleccionada',
      selectCity: 'Busca y selecciona una ciudad de las sugerencias.',
      temperatureUnit: 'Unidad de temperatura'
    },
    news: {
      title: 'Noticias',
      feedType: 'Tipo de feed',
      rssAtom: 'RSS / Atom',
      googleReader: 'Google Reader',
      rssUrl: 'URL del feed RSS / Atom',
      rssPlaceholder: 'https://ejemplo.com/feed.xml',
      rssHelp: 'Enlace directo a un feed RSS o Atom.',
      apiUrl: 'URL de la API (Google Reader)',
      apiPlaceholder: 'https://tu-instancia.com/api/greader.php',
      apiHelp: 'Compatible con FreshRSS, Miniflux, etc.',
      username: 'Nombre de usuario',
      usernamePlaceholder: 'tu-nombre-de-usuario',
      password: 'Contraseña / Token',
      passwordPlaceholder: 'tu-contraseña-o-token',
      refresh: 'Actualizar artículos'
    },
    language: {
      title: 'Idioma',
      select: 'Seleccionar idioma'
    },
    attributions: {
      title: 'Acerca de y Legal',
      legal: 'Privacidad',
      legalText: 'Esta extensión se ejecuta localmente en su navegador. No se recopilan ni envían datos personales a servidores externos, excepto las solicitudes anónimas a los servicios enumerados a continuación necesarios para funciones específicas (clima, sugerencias de búsqueda). Su configuración se almacena localmente en su navegador.',
      disclaimer: 'Esta extensión es un proyecto independiente y no está afiliada, respaldada ni patrocinada por Google, Bing, Yahoo, DuckDuckGo, Perplexity, ChatGPT ni ningún otro servicio de terceros mencionado.',
      project: 'Proyecto',
      sourceCode: 'Código fuente',
      starGitHub: 'Danos una estrella en GitHub',
      reportIssue: 'Reportar un problema en GitHub',
      services: 'Servicios y Licencias',
      fontAwesome: 'FontAwesome (Iconos) - CC BY 4.0, SIL OFL, MIT',
      simpleIcons: 'Simple Icons (Iconos de marca) - CC0 1.0 Universal',
      openMeteo: 'Open-Meteo (Datos meteorológicos) - CC BY 4.0',
      duckDuckGo: 'DuckDuckGo (Sugerencias de búsqueda)',
      openStreetMap: 'Geocodificación',
      license: 'Licencia'
    }
  },
  search: {
    placeholder: 'Buscar en la web'
  },
  news: {
    loading: 'Cargando...',
    configure: 'Configurar RSS en ajustes',
    noArticles: 'Sin artículos',
    cached: 'Mostrando artículos en caché'
  },
  weather: {
    unavailable: 'Clima no disponible',
    clear: 'Cielo despejado',
    partlyCloudy: 'Parcialmente nublado',
    overcast: 'Nublado',
    foggy: 'Con niebla',
    drizzle: 'Llovizna',
    rain: 'Lluvia',
    snow: 'Nieve',
    rainShowers: 'Chubascos',
    thunderstorm: 'Tormenta',
    unknown: 'Desconocido',
    now: 'Ahora'
  },
  time: {
    minutesAgo: 'hace {n}m',
    hoursAgo: 'hace {n}h',
    daysAgo: 'hace {n}d'
  }
};
