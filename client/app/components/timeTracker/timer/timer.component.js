import template from './timer.html';
import controller from './timer.controller';
import './timer.scss';

let timerComponent = {
  restrict: 'E',
  bindings: {
  	value: '<',
  	disabled: '<',
    work: "=",
  	onStart: '&',
  	onPause: '&',
  	onTick: '&'
  },
  template,
  controller
};

export default timerComponent;
