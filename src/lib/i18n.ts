// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        supportedLngs: ['en', 'ru', 'kz'],
        lng: 'ru',           // стартовый язык
        load: 'languageOnly',// <-- "ru-RU" -> "ru"
        ns: ['translation'],
        defaultNS: 'translation',
        interpolation: { escapeValue: false },
        backend: {
            // файлы лежат как /public/locales/ru.json, en.json, kz.json
            loadPath: '/locales/{{lng}}.json'
        },
        // удобно на dev
        debug: typeof import.meta !== 'undefined' && (import.meta as any).env?.DEV,
    });

export default i18n;