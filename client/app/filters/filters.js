import angular from 'angular';

import rate from './rateFilter.js';

let filtersModule = angular
  .module('app.filters', [])
  .filter({rate})
  ;
export default filtersModule