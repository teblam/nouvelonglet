export default {
  settings: {
    title: 'Configurações',
    background: {
      title: 'Fundo',
      type: 'Tipo de fundo',
      solid: 'Sólido',
      gradient: 'Gradiente',
      picture: 'Imagem',
      video: 'Vídeo',
      color: 'Cor de fundo',
      gradientColors: 'Cores do gradiente',
      gradientStart: 'Início',
      gradientEnd: 'Fim',
      gradientAngle: 'Ângulo',
      pictureFile: 'Arquivo de imagem',
      videoFile: 'Arquivo de vídeo',
      chooseImage: 'Escolher uma imagem...',
      chooseVideo: 'Escolher um vídeo...',
      blurIntensity: 'Intensidade do desfoque',
      noBlur: 'Sem desfoque',
      maxBlur: 'Desfoque máximo'
    },
    clock: {
      title: 'Relógio',
      type: 'Tipo de relógio',
      digital: 'Digital',
      analog: 'Analógico',
      timeFormat: 'Formato de hora'
    },
    search: {
      title: 'Pesquisa',
      defaultEngine: 'Mecanismo de pesquisa padrão',
      enabledEngines: 'Mecanismos de pesquisa ativados',
      atLeastOne: 'Pelo menos um mecanismo de pesquisa deve estar ativado.'
    },
    weather: {
      title: 'Clima',
      locationMode: 'Modo de localização',
      automatic: 'Automático',
      manual: 'Manual',
      autoInfo: 'A localização do clima será detectada automaticamente via geolocalização.',
      searchCity: 'Pesquisar cidade',
      searchPlaceholder: 'Digite para pesquisar...',
      selected: 'Selecionada',
      selectCity: 'Pesquise e selecione uma cidade das sugestões.',
      temperatureUnit: 'Unidade de temperatura'
    },
    news: {
      title: 'Feed de notícias',
      feedType: 'Tipo de feed',
      rssAtom: 'RSS / Atom',
      googleReader: 'Google Reader',
      rssUrl: 'URL do feed RSS / Atom',
      rssPlaceholder: 'https://exemplo.com/feed.xml',
      rssHelp: 'Link direto para um feed RSS ou Atom.',
      apiUrl: 'URL da API (Google Reader)',
      apiPlaceholder: 'https://sua-instancia.com/api/greader.php',
      apiHelp: 'Compatível com FreshRSS, Miniflux, etc.',
      username: 'Nome de usuário',
      usernamePlaceholder: 'seu-nome-de-usuario',
      password: 'Senha / Token',
      passwordPlaceholder: 'sua-senha-ou-token',
      refresh: 'Atualizar artigos',
      permissionRequired: 'Permissão necessária para acessar esta URL',
      grantPermission: 'Conceder acesso'
    },
    language: {
      title: 'Idioma',
      select: 'Selecionar idioma'
    },
    attributions: {
      title: 'Sobre e Jurídico',
      legal: 'Privacidade',
      legalText: 'Esta extensão é executada localmente no seu navegador. Nenhum dado pessoal é coletado ou enviado para servidores externos, exceto solicitações anônimas para os serviços listados abaixo necessários para recursos específicos (clima, sugestões de pesquisa). Suas configurações são armazenadas localmente no seu navegador.',
      disclaimer: 'Esta extensão é um projeto independente e não é afiliada, endossada ou patrocinada pelo Google, Bing, Yahoo, DuckDuckGo, Perplexity, ChatGPT ou quaisquer outros serviços de terceiros mencionados.',
      project: 'Projeto',
      sourceCode: 'Código fonte',
      starGitHub: 'Dê uma estrela no GitHub',
      reportIssue: 'Relatar um problema no GitHub',
      services: 'Serviços e Licenças',
      fontAwesome: 'FontAwesome (Ícones) - CC BY 4.0, SIL OFL, MIT',
      simpleIcons: 'Simple Icons (Ícones de marcas) - CC0 1.0 Universal',
      openMeteo: 'Open-Meteo (Dados meteorológicos) - CC BY 4.0',
      duckDuckGo: 'DuckDuckGo (Sugestões de pesquisa)',
      openStreetMap: 'Geocodificação',
      license: 'Licença'
    }
  },
  search: {
    placeholder: 'Pesquisar na web'
  },
  news: {
    loading: 'Carregando...',
    configure: 'Configurar RSS nas configurações',
    noArticles: 'Sem artigos',
    cached: 'Mostrando artigos em cache'
  },
  weather: {
    unavailable: 'Clima indisponível',
    clear: 'Céu limpo',
    partlyCloudy: 'Parcialmente nublado',
    overcast: 'Nublado',
    foggy: 'Nebuloso',
    drizzle: 'Garoa',
    rain: 'Chuva',
    snow: 'Neve',
    rainShowers: 'Chuvas',
    thunderstorm: 'Tempestade',
    unknown: 'Desconhecido',
    now: 'Agora'
  },
  time: {
    minutesAgo: 'há {n}m',
    hoursAgo: 'há {n}h',
    daysAgo: 'há {n}d'
  }
};
