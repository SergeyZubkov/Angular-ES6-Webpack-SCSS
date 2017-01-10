import template from './projectItem.html';
import controller from './projectItem.controller';
import './projectItem.scss';

let projectItemComponent = {
  restrict: 'E',
  bindings: {
  	projectData: '=',
  	isActive: '<',
  	onSelected: '&',
  	onDeselect: '&'
  },
  template,
  controller
};

export default projectItemComponent;
