import angular from 'angular';
import 'angular-material';
import 'angular-ui-router';
import '../node_modules/angular-translate/dist/angular-translate.js';

import {TodoService} from './app/todos/todos';
import {App} from './app/containers/App';
import {Header} from './app/components/Header';
import {MainSection} from './app/components/MainSection';
import {TodoTextInput} from './app/components/TodoTextInput';
import {TodoItem} from './app/components/TodoItem';
import {Footer} from './app/components/Footer';
import routesConfig from './routes';

import translateConfig from './translate.config';

import './index.scss';

angular
    .module('app', [
        'ui.router',
        'ngAnimate',
        'ngMaterial',
        'pascalprecht.translate'
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
    .service('todoService', TodoService)
    .component('app', App)
    .component('headerComponent', Header)
    .component('footerComponent', Footer)
    .component('mainSection', MainSection)
    .component('todoTextInput', TodoTextInput)
    .component('todoItem', TodoItem);
