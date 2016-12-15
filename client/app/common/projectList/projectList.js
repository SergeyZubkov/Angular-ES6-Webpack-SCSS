import angular from 'angular';
import uiRouter from 'angular-ui-router';
import projectListComponent from './projectList.component';

let projectListModule = angular.module('projectList', [
  uiRouter
])

.component('projectList', projectListComponent)

.name;

export default projectListModule;
