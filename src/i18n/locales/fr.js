export default {
  settings: {
    title: 'Paramètres',
    background: {
      title: 'Arrière-plan',
      type: 'Type d\'arrière-plan',
      solid: 'Uni',
      gradient: 'Dégradé',
      picture: 'Image',
      video: 'Vidéo',
      color: 'Couleur d\'arrière-plan',
      gradientColors: 'Couleurs du dégradé',
      gradientStart: 'Début',
      gradientEnd: 'Fin',
      gradientAngle: 'Angle',
      pictureFile: 'Fichier image',
      videoFile: 'Fichier vidéo',
      chooseImage: 'Choisir une image...',
      chooseVideo: 'Choisir une vidéo...',
      blurIntensity: 'Intensité du flou',
      noBlur: 'Pas de flou',
      maxBlur: 'Flou maximum',
      opacity: 'Opacité'
    },
    clock: {
      title: 'Horloge',
      type: 'Type d\'horloge',
      digital: 'Numérique',
      analog: 'Analogique',
      timeFormat: 'Format de l\'heure'
    },
    search: {
      title: 'Recherche',
      defaultEngine: 'Moteur de recherche par défaut',
      enabledEngines: 'Moteurs de recherche activés',
      atLeastOne: 'Au moins un moteur de recherche doit être activé.'
    },
    weather: {
      title: 'Météo',
      locationMode: 'Mode de localisation',
      automatic: 'Automatique',
      manual: 'Manuel',
      autoInfo: 'La localisation météo sera détectée automatiquement via la géolocalisation.',
      searchCity: 'Rechercher une ville',
      searchPlaceholder: 'Tapez pour rechercher...',
      selected: 'Sélectionné',
      selectCity: 'Recherchez et sélectionnez une ville parmi les suggestions.',
      temperatureUnit: 'Unité de température'
    },
    news: {
      title: 'Fil d\'actualités',
      feedType: 'Type de flux',
      rssAtom: 'RSS / Atom',
      googleReader: 'Google Reader',
      rssUrl: 'URL du flux RSS / Atom',
      rssPlaceholder: 'https://exemple.com/feed.xml',
      rssHelp: 'Lien direct vers un flux RSS ou Atom.',
      apiUrl: 'URL de l\'API (Google Reader)',
      apiPlaceholder: 'https://votre-instance.com/api/greader.php',
      apiHelp: 'Compatible avec FreshRSS, Miniflux, etc.',
      username: 'Nom d\'utilisateur',
      usernamePlaceholder: 'votre-nom-utilisateur',
      password: 'Mot de passe / Jeton',
      passwordPlaceholder: 'votre-mot-de-passe-ou-jeton',
      refresh: 'Actualiser les articles',
      permissionRequired: 'Permission requise pour accéder à cette URL',
      grantPermission: 'Autoriser l\'accès'
    },
    language: {
      title: 'Langue',
      select: 'Sélectionner la langue'
    },
    attributions: {
      title: 'À propos & Légal',
      legal: 'Confidentialité',
      legalText: 'Cette extension fonctionne localement dans votre navigateur. Aucune donnée personnelle n\'est collectée ou envoyée à des serveurs externes, à l\'exception des requêtes anonymes vers les services listés ci-dessous nécessaires à certaines fonctionnalités (météo, suggestions de recherche). Vos paramètres sont stockés localement.',
      disclaimer: 'Cette extension est un projet indépendant et n\'est ni affiliée, ni soutenue, ni sponsorisée par Google, Bing, Yahoo, DuckDuckGo, Perplexity, ChatGPT ou tout autre service tiers mentionné.',
      project: 'Projet',
      sourceCode: 'Code source',
      starGitHub: 'Mettre une étoile sur GitHub',
      reportIssue: 'Signaler un problème sur GitHub',
      services: 'Services & Licences',
      fontAwesome: 'FontAwesome (Icônes) - CC BY 4.0, SIL OFL, MIT',
      simpleIcons: 'Simple Icons (Icônes de marques) - CC0 1.0 Universal',
      openMeteo: 'Open-Meteo (Données météo) - CC BY 4.0',
      duckDuckGo: 'DuckDuckGo (Suggestions de recherche)',
      openStreetMap: 'Géocodage',
      license: 'Licence'
    }
  },
  search: {
    placeholder: 'Rechercher sur le web'
  },
  news: {
    loading: 'Chargement...',
    configure: 'Configurer RSS dans les paramètres',
    noArticles: 'Aucun article',
    cached: 'Affichage des articles en cache'
  },
  weather: {
    unavailable: 'Météo indisponible',
    clear: 'Ciel dégagé',
    partlyCloudy: 'Partiellement nuageux',
    overcast: 'Couvert',
    foggy: 'Brumeux',
    drizzle: 'Bruine',
    rain: 'Pluie',
    snow: 'Neige',
    rainShowers: 'Averses',
    thunderstorm: 'Orage',
    unknown: 'Inconnu',
    now: 'Maintenant'
  },
  time: {
    minutesAgo: 'il y a {n}m',
    hoursAgo: 'il y a {n}h',
    daysAgo: 'il y a {n}j'
  }
};
