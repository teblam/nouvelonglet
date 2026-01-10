export default {
  settings: {
    title: 'Impostazioni',
    background: {
      title: 'Sfondo',
      type: 'Tipo di sfondo',
      solid: 'Solido',
      gradient: 'Gradiente',
      picture: 'Immagine',
      video: 'Video',
      color: 'Colore dello sfondo',
      gradientColors: 'Colori del gradiente',
      gradientStart: 'Inizio',
      gradientEnd: 'Fine',
      gradientAngle: 'Angolo',
      pictureFile: 'File immagine',
      videoFile: 'File video',
      chooseImage: 'Scegli un\'immagine...',
      chooseVideo: 'Scegli un video...',
      blurIntensity: 'Intensità sfocatura',
      noBlur: 'Nessuna sfocatura',
      maxBlur: 'Sfocatura massima'
    },
    clock: {
      title: 'Orologio',
      type: 'Tipo di orologio',
      digital: 'Digitale',
      analog: 'Analogico',
      timeFormat: 'Formato ora'
    },
    search: {
      title: 'Ricerca',
      defaultEngine: 'Motore di ricerca predefinito',
      enabledEngines: 'Motori di ricerca abilitati',
      atLeastOne: 'Almeno un motore di ricerca deve essere abilitato.'
    },
    weather: {
      title: 'Meteo',
      locationMode: 'Modalità posizione',
      automatic: 'Automatica',
      manual: 'Manuale',
      autoInfo: 'La posizione meteo verrà rilevata automaticamente tramite geolocalizzazione.',
      searchCity: 'Cerca città',
      searchPlaceholder: 'Digita per cercare...',
      selected: 'Selezionata',
      selectCity: 'Cerca e seleziona una città dai suggerimenti.',
      temperatureUnit: 'Unità di temperatura'
    },
    news: {
      title: 'Feed notizie',
      feedType: 'Tipo di feed',
      rssAtom: 'RSS / Atom',
      googleReader: 'Google Reader',
      rssUrl: 'URL feed RSS / Atom',
      rssPlaceholder: 'https://esempio.com/feed.xml',
      rssHelp: 'Link diretto a un feed RSS o Atom.',
      apiUrl: 'URL API (Google Reader)',
      apiPlaceholder: 'https://tua-istanza.com/api/greader.php',
      apiHelp: 'Compatibile con FreshRSS, Miniflux, ecc.',
      username: 'Nome utente',
      usernamePlaceholder: 'tuo-nome-utente',
      password: 'Password / Token',
      passwordPlaceholder: 'tua-password-o-token',
      refresh: 'Aggiorna articoli'
    },
    language: {
      title: 'Lingua',
      select: 'Seleziona lingua'
    },
    attributions: {
      title: 'Informazioni e Note legali',
      legal: 'Privacy',
      legalText: 'Questa estensione viene eseguita localmente nel tuo browser. Nessun dato personale viene raccolto o inviato a server esterni, ad eccezione delle richieste anonime ai servizi elencati di seguito necessari per funzionalità specifiche (meteo, suggerimenti di ricerca). Le tue impostazioni sono memorizzate localmente nel tuo browser.',
      disclaimer: 'Questa estensione è un progetto indipendente e non è affiliata, approvata o sponsorizzata da Google, Bing, Yahoo, DuckDuckGo, Perplexity, ChatGPT o da altri servizi di terze parti menzionati.',
      project: 'Progetto',
      sourceCode: 'Codice sorgente',
      starGitHub: 'Metti una stella su GitHub',
      reportIssue: 'Segnala un problema su GitHub',
      services: 'Servizi e Licenze',
      fontAwesome: 'FontAwesome (Icone) - CC BY 4.0, SIL OFL, MIT',
      simpleIcons: 'Simple Icons (Icone dei marchi) - CC0 1.0 Universal',
      openMeteo: 'Open-Meteo (Dati meteo) - CC BY 4.0',
      duckDuckGo: 'DuckDuckGo (Suggerimenti di ricerca)',
      openStreetMap: 'Geocodifica',
      license: 'Licenza'
    }
  },
  search: {
    placeholder: 'Cerca nel web'
  },
  news: {
    loading: 'Caricamento...',
    configure: 'Configura RSS nelle impostazioni',
    noArticles: 'Nessun articolo',
    cached: 'Mostrando articoli in cache'
  },
  weather: {
    unavailable: 'Meteo non disponibile',
    clear: 'Cielo sereno',
    partlyCloudy: 'Parzialmente nuvoloso',
    overcast: 'Coperto',
    foggy: 'Nebbioso',
    drizzle: 'Pioggerella',
    rain: 'Pioggia',
    snow: 'Neve',
    rainShowers: 'Rovesci',
    thunderstorm: 'Temporale',
    unknown: 'Sconosciuto',
    now: 'Ora'
  },
  time: {
    minutesAgo: '{n}m fa',
    hoursAgo: '{n}h fa',
    daysAgo: '{n}g fa'
  }
};
