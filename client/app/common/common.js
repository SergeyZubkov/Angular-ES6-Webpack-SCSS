import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import Timer from './timer/timer';
import TopPanel from './topPanel/topPanel';
import ProjectList from './projectList/projectList'



let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  Timer,
  TopPanel,
  ProjectList
])
  
.name;

export default commonModule;
