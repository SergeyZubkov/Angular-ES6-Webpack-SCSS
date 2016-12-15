import angular from 'angular';
import uiRouter from 'angular-ui-router';
import projectItemComponent from './projectItem.component';

let projectItemModule = angular.module('projectItem', [
  uiRouter
])

.component('projectItem', projectItemComponent)

.name;

export default projectItemModule;
