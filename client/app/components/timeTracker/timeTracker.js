import angular from 'angular';
import uiRouter from 'angular-ui-router';
import timeTrackerComponent from './timeTracker.component';
import Timer from './timer/timer';
import ProjectForm from './ProjectForm/ProjectForm';
import ProjectItem from './projectItem/projectItem';
import	common from '../../common/common';


let timeTrackerModule = angular.module('timeTracker', [
  uiRouter,
  common,
  Timer,
  ProjectForm,
  ProjectItem
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
