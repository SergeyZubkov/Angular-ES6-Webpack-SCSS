import angular from 'angular';
import Navbar from './navbar/navbar';
import Timer from './timer/timer';
import TopPanel from './topPanel/topPanel';
import ProjectList from './projectList/projectList';
import ProjectItem from './projectItem/projectItem';




let commonModule = angular.module('app.common', [
  Navbar,
  Timer,
  TopPanel,
  ProjectList,
  ProjectItem
])
  
.name;

export default commonModule;
