import angular from 'angular';

import dropdown from './dropdown';

let directivesModule = angular
  .module('app.directives', [])
  .directive({
    dropdown
  })

  .name;

export default directivesModule