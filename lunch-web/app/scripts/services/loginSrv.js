'use strict';

var app  = angular.module('lunchWebApp-services', ['ngResource']);

app.factory('LoginSrv', function ($resource) {
  if (false) {
    return $resource('http://localhost:8080/lunches-rs/user/login/Adam/adam', {});
  }
  return '';
});