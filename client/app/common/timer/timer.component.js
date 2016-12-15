import template from './timer.html';
import controller from './timer.controller';
import './timer.scss';

let timerComponent = {
  restrict: 'E',
  bindings: {
  	value: '<'
  },
  template,
  controller
};

export default timerComponent;
