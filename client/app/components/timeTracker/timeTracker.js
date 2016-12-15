import angular from 'angular';
import uiRouter from 'angular-ui-router';
import timeTrackerComponent from './timeTracker.component';
import	common from '../../common/common'

let timeTrackerModule = angular.module('timeTracker', [
  uiRouter,
  common
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('main', {
      url: '/',
      component: 'timeTracker'
    });
})

.component('timeTracker', timeTrackerComponent)
  
.name;

export default timeTrackerModule;
