'use strict';

var app = angular.module('lunchWebApp', [
  'lunchWebApp-services',
  'lunchWebApp-controllers',
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
      });
  });