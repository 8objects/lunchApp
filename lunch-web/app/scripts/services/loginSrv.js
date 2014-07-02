'use strict';
/**
 * Created by Adam on 30.06.14.
 */
angular.module('lunchWebApp', [
    'ngResource'
  ]).factory('LoginSrv', function ($resource) {
    return $resource('http://localhost:8080/lunches-rs/user/login/Adam/adam', {});
  });