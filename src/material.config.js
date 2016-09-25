export default materialConfig;

/* @ngInject */
function materialConfig($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('purple')
    .accentPalette('indigo');
}
