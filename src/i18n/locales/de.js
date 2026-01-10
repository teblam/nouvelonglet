export default {
  settings: {
    title: 'Einstellungen',
    background: {
      title: 'Hintergrund',
      type: 'Hintergrundtyp',
      solid: 'Einfarbig',
      gradient: 'Farbverlauf',
      picture: 'Bild',
      video: 'Video',
      color: 'Hintergrundfarbe',
      gradientColors: 'Verlaufsfarben',
      gradientStart: 'Start',
      gradientEnd: 'Ende',
      gradientAngle: 'Winkel',
      pictureFile: 'Bilddatei',
      videoFile: 'Videodatei',
      chooseImage: 'Bild auswählen...',
      chooseVideo: 'Video auswählen...',
      blurIntensity: 'Unschärfe-Intensität',
      noBlur: 'Keine Unschärfe',
      maxBlur: 'Maximale Unschärfe',
      opacity: 'Deckkraft'
    },
    clock: {
      title: 'Uhr',
      type: 'Uhrtyp',
      digital: 'Digital',
      analog: 'Analog',
      timeFormat: 'Zeitformat'
    },
    search: {
      title: 'Suche',
      defaultEngine: 'Standard-Suchmaschine',
      enabledEngines: 'Aktivierte Suchmaschinen',
      atLeastOne: 'Mindestens eine Suchmaschine muss aktiviert sein.'
    },
    weather: {
      title: 'Wetter',
      locationMode: 'Standortmodus',
      automatic: 'Automatisch',
      manual: 'Manuell',
      autoInfo: 'Der Wetterstandort wird automatisch per Geolokalisierung erkannt.',
      searchCity: 'Stadt suchen',
      searchPlaceholder: 'Zum Suchen eingeben...',
      selected: 'Ausgewählt',
      selectCity: 'Suchen und wählen Sie eine Stadt aus den Vorschlägen.',
      temperatureUnit: 'Temperatureinheit'
    },
    news: {
      title: 'Nachrichten-Feed',
      feedType: 'Feed-Typ',
      rssAtom: 'RSS / Atom',
      googleReader: 'Google Reader',
      rssUrl: 'RSS / Atom Feed-URL',
      rssPlaceholder: 'https://beispiel.com/feed.xml',
      rssHelp: 'Direkter Link zu einem RSS- oder Atom-Feed.',
      apiUrl: 'API-URL (Google Reader)',
      apiPlaceholder: 'https://ihre-instanz.com/api/greader.php',
      apiHelp: 'Kompatibel mit FreshRSS, Miniflux, usw.',
      username: 'Benutzername',
      usernamePlaceholder: 'ihr-benutzername',
      password: 'Passwort / Token',
      passwordPlaceholder: 'ihr-passwort-oder-token',
      refresh: 'Artikel aktualisieren'
    },
    language: {
      title: 'Sprache',
      select: 'Sprache auswählen'
    },
    attributions: {
      title: 'Über & Rechtliches',
      legal: 'Datenschutz',
      legalText: 'Diese Erweiterung wird lokal in Ihrem Browser ausgeführt. Es werden keine persönlichen Daten gesammelt oder an externe Server gesendet, mit Ausnahme von anonymen Anfragen an die unten aufgeführten Dienste, die für bestimmte Funktionen (Wetter, Suchvorschläge) erforderlich sind. Ihre Einstellungen werden lokal in Ihrem Browser gespeichert.',
      disclaimer: 'Diese Erweiterung ist ein unabhängiges Projekt und steht in keiner Verbindung zu Google, Bing, Yahoo, DuckDuckGo, Perplexity, ChatGPT oder anderen genannten Drittanbieterdiensten und wird von diesen weder unterstützt noch gesponsert.',
      project: 'Projekt',
      sourceCode: 'Quellcode',
      starGitHub: 'Gib uns einen Stern auf GitHub',
      reportIssue: 'Problem auf GitHub melden',
      services: 'Dienste & Lizenzen',
      fontAwesome: 'FontAwesome (Icons) - CC BY 4.0, SIL OFL, MIT',
      simpleIcons: 'Simple Icons (Marken-Icons) - CC0 1.0 Universal',
      openMeteo: 'Open-Meteo (Wetterdaten) - CC BY 4.0',
      duckDuckGo: 'DuckDuckGo (Suchvorschläge)',
      openStreetMap: 'Geokodierung',
      license: 'Lizenz'
    }
  },
  search: {
    placeholder: 'Im Web suchen'
  },
  news: {
    loading: 'Lädt...',
    configure: 'RSS in Einstellungen konfigurieren',
    noArticles: 'Keine Artikel',
    cached: 'Zwischengespeicherte Artikel anzeigen'
  },
  weather: {
    unavailable: 'Wetter nicht verfügbar',
    clear: 'Klarer Himmel',
    partlyCloudy: 'Teilweise bewölkt',
    overcast: 'Bedeckt',
    foggy: 'Neblig',
    drizzle: 'Nieselregen',
    rain: 'Regen',
    snow: 'Schnee',
    rainShowers: 'Regenschauer',
    thunderstorm: 'Gewitter',
    unknown: 'Unbekannt',
    now: 'Jetzt'
  },
  time: {
    minutesAgo: 'vor {n}m',
    hoursAgo: 'vor {n}h',
    daysAgo: 'vor {n}T'
  }
};
