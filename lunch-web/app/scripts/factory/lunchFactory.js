'use strict';
/**
 * Created by Adam on 2014-07-09.
 */
var app = angular.module('app-factories');

app.factory('lunchFactory', function ($resource) {
  return $resource('http://localhost:8080/lunches-rs/lunch/search/',
      {callback: 'JSON_CALLBACK'},
      {post: {method: 'POST',isArray:true}
      }
  );
});