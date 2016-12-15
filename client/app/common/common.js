import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Timer from './timer/timer';
import TopPanel from './topPanel/topPanel';



let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Timer,
  TopPanel
])
  
.name;

export default commonModule;
