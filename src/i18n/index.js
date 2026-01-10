import { createI18n } from 'vue-i18n';
import en from './locales/en.js';
import fr from './locales/fr.js';
import it from './locales/it.js';
import de from './locales/de.js';
import es from './locales/es.js';
import ja from './locales/ja.js';
import ko from './locales/ko.js';
import zhTW from './locales/zh-TW.js';
import zhCN from './locales/zh-CN.js';
import pt from './locales/pt.js';
import ru from './locales/ru.js';
import tr from './locales/tr.js';
import ar from './locales/ar.js';

const messages = {
  en,
  fr,
  it,
  de,
  es,
  ja,
  ko,
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  pt,
  ru,
  tr,
  ar
};

const getBrowserLocale = () => {
  const browserLocale = navigator.language || navigator.userLanguage;
  
  if (browserLocale.startsWith('zh')) {
    if (browserLocale.includes('TW') || browserLocale.includes('HK') || browserLocale.includes('Hant')) {
      return 'zh-TW';
    }
    return 'zh-CN';
  }
  
  const locale = browserLocale.split('-')[0];
  return Object.keys(messages).includes(locale) ? locale : 'en';
};

const getSavedLocale = async () => {
  try {
    const result = await browser.storage.local.get('locale');
    return result.locale || getBrowserLocale();
  } catch {
    return getBrowserLocale();
  }
};

export const saveLocale = async (locale) => {
  try {
    await browser.storage.local.set({ locale });
  } catch (error) {
    console.error('Failed to save locale:', error);
  }
};

export const createI18nInstance = async () => {
  const locale = await getSavedLocale();
  
  return createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    messages
  });
};

export const availableLocales = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'it', name: 'Italiano' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es', name: 'Español' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'zh-TW', name: '繁體中文' },
  { code: 'zh-CN', name: '简体中文' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'ar', name: 'العربية' }
];
