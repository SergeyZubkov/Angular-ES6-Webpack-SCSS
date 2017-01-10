import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import AppServices from './services/services';
import AppFilters from './filters/filters';
import Directives from './directives/directives';
import angularLocalStorage from 'angular-local-storage'


angular.module('app', [
    uiRouter,
    Common,
    Components,
    AppServices.name,
    AppFilters.name,
    Directives,
    angularLocalStorage
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .config((localStorageServiceProvider) => {
    "ngInject"
    localStorageServiceProvider
      .setPrefix('projectTracker');
  })
  .component('app', AppComponent);
