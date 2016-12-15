import angular from 'angular';

import projectsService from './projectsService';

let servicesModule = angular
  .module('app.services', [])
  .service({
    projectsService
  });

export default servicesModule