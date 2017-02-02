import angular from 'angular';

import dropdown from './dropdown/dropdown';

let directivesModule = angular
  .module('app.directives', [
  		dropdown
  ])


  .name;

export default directivesModule