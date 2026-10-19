// Language rule shared by index.html, about.html and 404.html: Polish when the browser's preferred language
// is Polish, otherwise English. A classic (non-module) script loaded in <head>, so the pages can pick their
// language before the first paint; its top-level names are globals for the pages' own scripts.

const SITE_LANGUAGES = ['en', 'pl'];

function detectSiteBrowserLanguage() {
    const preferred = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return preferred.toLowerCase().startsWith('pl') ? 'pl' : 'en';
}
