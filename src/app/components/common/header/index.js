import angular from 'angular';
import {HeaderComponent} from './header.component';

export default angular.module('header', [])
  .component('headerComponent', HeaderComponent)
  .name;
