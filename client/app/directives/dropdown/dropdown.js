import angular from 'angular';
import Dropdown from './dropdown.directive';

let dropdownModule = angular.module('dropdown', [])
.directive('appDropdown', ($document, $timeout) => { 
  'ngInject'; 
  return new Dropdown($document, $timeout)})

.name;

export default dropdownModule;



