/* eslint-disable */
export default translateConfig;

/* @ngInject */
function translateConfig($translateProvider, APP_LANGUAGES) {
    /**
     *  each module loads its own translation file - making it easier to create translations
     *  also translations are not loaded when they aren't needed
     *  each module will have a il8n folder that will contain its translations
     */
    $translateProvider.translations('pl', {
        TODOS: 'do zrobienia'
    });

    $translateProvider.translations('en', {
        TODOS: 'Todos'
    });

    const languageKeys = [];
    for (let lang = APP_LANGUAGES.length - 1; lang >= 0; lang--) {
        languageKeys.push(APP_LANGUAGES[lang].key);
    }

    /**
     *  try to detect the users language by checking the following
     *      navigator.language
     *      navigator.browserLanguage
     *      navigator.systemLanguage
     *      navigator.userLanguage
     */

    $translateProvider
        .registerAvailableLanguageKeys(languageKeys, {
            'en_US': 'en',
            'en_UK': 'en',
            'pl_PL': 'pl'
        })
        .use('pl');
    // store the users language preference in a cookie
    // $translateProvider.useLocalStorage();
}
