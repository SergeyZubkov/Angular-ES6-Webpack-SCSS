import template from './timeTracker.html';
import controller from './TimeTracker.controller';
import './timeTracker.scss';

let timeTrackerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default timeTrackerComponent;
