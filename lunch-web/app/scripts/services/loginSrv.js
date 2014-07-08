'use strict';

var app = angular.module('lunchApp-services', ['ngResource']);

app.factory('LoginSrv', function ($resource ) {

  return $resource('http://localhost:8080/lunches-rs/user/login/:username/:password',
    {callback: 'JSON_CALLBACK', username: '@username', password: '@password'},
      {get:
        {method: 'GET'}
      }
  );
});