import angular from 'angular';
import Navbar from './navbar/navbar';
import Timer from './timer/timer';
import TopPanel from './topPanel/topPanel';
import ProjectItem from './projectItem/projectItem';




let commonModule = angular.module('app.common', [
  Navbar,
  Timer,
  TopPanel,
  ProjectItem
])
  
.name;

export default commonModule;
