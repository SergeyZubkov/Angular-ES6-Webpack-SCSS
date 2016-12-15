import template from './projectList.html';
import controller from './projectList.controller';
import './projectList.scss';

let projectListComponent = {
  restrict: 'E',
  bindings: {
  	projects: '='
  },
  template,
  controller
};

export default projectListComponent;
