# nouvelonglet

A beautiful, modern replacement for Firefox's default new tab page built with Vue 3, Vite, and Tailwind CSS.

## Features

### Background Customization
- **Solid Color**: Choose any color for your background
- **Gradient**: Create beautiful gradients with two colors and adjustable angle
- **Picture**: Upload and display a custom image with adjustable blur (0-20px) and opacity
- **Video**: Use video backgrounds with thumbnail support, adjustable blur and opacity
- **Blur Effect**: Apply blur to any background type (0-20px)

### Search Bar
- **Multi-Engine Support**
- **Customizable**: Choose which search engines to display and set your default
- **Quick Access**: Icons for fast search engine switching

### Widgets


#### Clock Widget
- **Digital or Analog**: Choose your preferred clock style
- **Time Format**: 12h or 24h format
- **Date Display**: Shows current date with localization support


#### Weather Widget
- **Auto-Location**: Automatically detects your location
- **Manual Location**: Search and select any city worldwide
- **Current Weather**: Temperature, conditions, and weather icon
- **Forecast**: 7-day weather forecast with min/max temperatures
- **Offline Support**: Cached weather data
- **Free API**: Uses Open-Meteo (no API key required)


#### News Widget
- **Simple RSS**: Support for any RSS/Atom feed
- **Google Reader API**: Compatible with FreshRSS, Miniflux, and other RSS readers
- **Customizable Layout**: Grid display of news articles
- **Offline Support**: Cached news data


### Internationalization (i18n)
- **13 Languages Supported**: English, French, Spanish, German, Italian, Portuguese, Russian, Arabic, Turkish, Japanese, Korean, Chinese (Simplified), Chinese (Traditional)
- **Auto-Detection**: Automatically detects browser language
- **Manual Selection**: Choose your preferred language in settings

### Widget Management
- **Toggle Visibility**: Show/hide any widget (clock, weather, news, search)
- **Reorder Widgets**: Drag and drop to customize widget order
- **Responsive Design**: Adapts to different screen sizes

## Installation

### Development Setup

1. Install dependencies:
```bash
npm install
```

2. Build the extension:
```bash
npm run build
```

3. Load in Firefox:
   - Open Firefox
   - Navigate to `about:debugging#/runtime/this-firefox`
   - Click "Load Temporary Add-on"
   - Select the `manifest.json` file from the `dist/` directory

### Production Build

```bash
npm run build
```

The built extension will be in the `dist/` folder.

### Linting

```bash
npm run lint
```

### Development Mode

```bash
npm run dev
```

Then load the extension from the `dist/` folder in Firefox.

## Configuration

Click the gear icon (⚙️) to access settings:

### Background Settings
- **Type**: Choose between color, gradient, picture, or video
- **Color**: Pick any solid color
- **Gradient**: Choose two colors and adjust the angle (0-360°)
- **Picture**: Upload an image file, adjust blur (0-20px) and opacity (0-100%)
- **Video**: Upload a video file with optional thumbnail, adjust blur and opacity
- **Blur**: Apply blur effect to any background type (0-20px)

### Search Settings
- **Enable/Disable**: Toggle search bar visibility
- **Search Engines**: Select which engines to display
- **Default Engine**: Set your preferred default search engine

### Widget Settings
- **Clock**: Toggle visibility, choose digital/analog style, select 12h/24h format
- **Weather**: Toggle visibility, set location mode (auto/manual), search for cities
- **News**: Toggle visibility, configure RSS feed or Google Reader API
- **Order**: Drag and drop to reorder widgets

### News Feed Configuration
- **Simple RSS**: Enter any RSS/Atom feed URL
- **Google Reader API**: 
  - API URL (e.g., `https://your-freshrss.com`)
  - Username
  - Password/Token

### Language Settings
- **Auto-Detect**: Uses browser language
- **Manual Selection**: Choose from 13 supported languages

## Project Structure

```
.
├── assets/
│   └── README.md
├── dist/                   # Built extension (generated)
├── public/
│   └── manifest.json       # Extension manifest
├── src/
│   ├── components/
│   │   ├── BackgroundVideo.vue    # Background management
│   │   ├── ClockWidget.vue        # Clock widget (digital/analog)
│   │   ├── NewsGrid.vue           # News feed display
│   │   ├── SearchBar.vue          # Multi-engine search
│   │   ├── SettingsModal.vue      # Settings interface
│   │   └── WeatherWidget.vue      # Weather widget
│   ├── i18n/
│   │   ├── index.js               # i18n configuration
│   │   └── locales/               # Translation files (13 languages)
│   ├── App.vue                    # Main application
│   ├── main.js                    # Application entry point
│   └── style.css                  # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Using Custom Backgrounds

### Picture Background
1. Open settings (⚙️)
2. Select "Picture" as background type
3. Click "Choose File" and select an image
4. Adjust blur (0-20px) and opacity (0-100%) as desired
5. Click "Save"

### Video Background
1. Open settings (⚙️)
2. Select "Video" as background type
3. Click "Choose Video File" and select a video
4. Optionally, upload a thumbnail image for faster loading
5. Adjust blur (0-20px) and opacity (0-100%) as desired
6. Click "Save"

## Tech Stack

### Core
- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Libraries
- **Vue I18n** - Internationalization support
- **Font Awesome** - Icons
- **Simple Icons** - Brand icons for search engines

### APIs
- **Open-Meteo** - Free weather API (no key required)
- **Google Reader API** - RSS feed aggregation (compatible with FreshRSS, Miniflux, etc.)

### Browser APIs
- **IndexedDB** - Local storage for videos and pictures
- **Storage API** - Settings persistence
- **Geolocation API** - Auto-location for weather

## Development

### Build Commands

```bash
# Install dependencies
npm install

# Development mode with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint extension
npm run lint

# Run in Firefox
npm run start:firefox
```

### Adding Translations

To add a new language:

1. Create a new file in `src/i18n/locales/` (e.g., `nl.js` for Dutch)
2. Copy the structure from `en.js` and translate all strings
3. Import and add the locale in `src/i18n/index.js`

## Browser Compatibility

- **Firefox**: 142.0 or higher
- Requires support for:
  - Manifest V2
  - IndexedDB
  - Storage API
  - Geolocation API (optional, for weather)

## Permissions

The extension requires the following permissions:

- `storage` - Save settings and preferences
- `geolocation` - Auto-detect location for weather (optional)
- `https://api.open-meteo.com/*` - Fetch weather data
- `https://duckduckgo.com/*` - DuckDuckGo search
- `<all_urls>` - Access RSS feeds and search engines

## Privacy

- All settings are stored locally in your browser
- Videos and pictures are stored in IndexedDB (local storage)
- Weather data is cached locally
- News feed data is cached locally
- No data is sent to external servers except:
  - Weather API calls to Open-Meteo
  - RSS feed requests to your configured sources
  - Search queries to your selected search engine

## Credits

- Built with [Vue.js](https://vuejs.org/)
- Icons by [Font Awesome](https://fontawesome.com/) and [Simple Icons](https://simpleicons.org/)
- Weather data from [Open-Meteo](https://open-meteo.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)