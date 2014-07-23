'use strict';
/**
 * Created by Adam on 2014-07-09.
 */
var app = angular.module('lunchApp-lunches', ['ngResource']);

app.factory('LunchSrv', function ($resource) {
  return $resource('http://localhost:8080/lunches-rs/lunches/listEvents/123123',
      {callback: 'JSON_CALLBACK'},
      {get: {method: 'GET',isArray:true}
      }
  );
});