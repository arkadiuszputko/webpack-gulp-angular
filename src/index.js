import angular from 'angular';
import 'angular-material';
import 'angular-ui-router';
import '../node_modules/angular-translate/dist/angular-translate.js';
import '../node_modules/angular-translate-loader-partial/angular-translate-loader-partial';

import {App} from './app/containers/App';
import common from './app/components/common/index';

import routesConfig from './routes';

import translateConfig from './translate.config';
import materialConfig from './material.config';

import './index.scss';

angular
  .module('app', [
    'ui.router',
    'ngAnimate',
    'ngMaterial',
    'pascalprecht.translate',
    common
  ])
  .constant('APP_LANGUAGES', [
    {
      name: 'LANGUAGES.ENGLISH',
      key: 'en'
    },
    {
      name: 'LANGUAGES.POLISH',
      key: 'pl'
    }
  ])
  .config(routesConfig)
  .config(translateConfig)
  .config(materialConfig)
  .component('app', App);
