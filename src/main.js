import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createI18nInstance } from './i18n/index.js';

createI18nInstance().then(i18n => {
  createApp(App).use(i18n).mount('#app');
});

