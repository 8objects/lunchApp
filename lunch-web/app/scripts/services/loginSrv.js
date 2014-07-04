'use strict';

var app = angular.module('lunchApp-services', ['ngResource']);

app.factory('LoginSrv', function ($resource) {

  return $resource('http://localhost:8080/lunches-rs/user/login/Adam/adam', {callback: 'JSON_CALLBACK'},{get: {method: 'JSONP'}});
});