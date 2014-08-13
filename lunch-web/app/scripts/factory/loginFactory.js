'use strict';

var app = angular.module('app-factories');

app.factory('loginFactory', function ($resource ) {

  var loginSrv = {};

  loginSrv.login = function(){
    return $resource ('http://localhost:8080/lunches-rs/user/login/:username/:password',
      {callback: 'JSON_CALLBACK', username: '@username', password: '@password'},
      {get:
      {method: 'GET'}
      }
    );
  };

  return loginSrv;

});