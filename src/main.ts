import './assets/style.scss';

import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import router from './router';
import { messages } from './locales';

const i18n = createI18n({
  locale: 'en-US',
  messages: messages
});

const app = createApp(App);
app.use(i18n).use(router);

app.mount('#app');
