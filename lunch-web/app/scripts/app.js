'use strict';

var app = angular.module('lunchApp', [
  'lunchApp-services',
  'lunchApp-controllers',
  'lunchApp-main',
  'lunchApp-menu',
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
      controller: 'LoginCtrl'
    })
    .state('menu', {
      url: '/menu',
      templateUrl: 'views/menu.html',
      controller: 'MenuCtrl'
    });
});