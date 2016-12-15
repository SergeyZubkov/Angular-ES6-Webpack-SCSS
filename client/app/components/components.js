import angular from 'angular';
import TimeTracker from './timeTracker/timeTracker';

let componentModule = angular.module('app.components', [
  TimeTracker
])

.name;

export default componentModule;
