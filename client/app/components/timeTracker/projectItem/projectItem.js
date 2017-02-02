import angular from 'angular';
import projectItemComponent from './projectItem.component';

let projectItemModule = angular.module('projectItem', [])

.component('projectItem', projectItemComponent)

.name;

export default projectItemModule;
