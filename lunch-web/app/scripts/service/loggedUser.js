'use strict';
/**
 * Created by Adam on 2014-07-23.
 */
var app = angular.module('lunchApp-loggeduser', []);

app.service('loggeduser', ['$rootScope', function ($rootScope) {
  var service = {};
  service.loggedUser = {};
  service.isLogged = false;

  service.setUser = function(user)
  {
    console.log('loggeduser.setUser invoked');
    console.log(user);
    service.loggedUser = user;
    service.isLogged = true;
    console.log(service.loggedUser);
    $rootScope.$broadcast('user.update', user);
  };

  service.logout = function()
  {
    console.log('loggeduser.logout');
    service.loggedUser = null;
    service.isLogged = false;
    $rootScope.broadcast('user.update', null);
  };

  return service;
}]);
