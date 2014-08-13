'use strict';

var app = angular.module('lunchApp', [
  'app-services',
  'app-controllers',
  'app-factories',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
]);

app.config(function ($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'views/login.html',
      controller: 'loginController'
    })
    .state('menu', {
      url: '/menu',
      templateUrl: 'views/menu.html',
      controller: 'menuController'
    });
});