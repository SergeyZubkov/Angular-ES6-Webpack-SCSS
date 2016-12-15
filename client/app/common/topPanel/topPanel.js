import angular from 'angular';
import topPanelComponent from './topPanel.component';

let topPanelModule = angular.module('topPanel', [])

.component('topPanel', topPanelComponent)

.name;

export default topPanelModule;
