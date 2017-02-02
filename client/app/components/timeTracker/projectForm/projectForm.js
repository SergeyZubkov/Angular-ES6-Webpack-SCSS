import angular from 'angular';
import projectFormComponent from './projectForm.component';

let projectFormModule = angular.module('projectForm', [])

.component('projectForm', projectFormComponent)

.name;

export default projectFormModule;
