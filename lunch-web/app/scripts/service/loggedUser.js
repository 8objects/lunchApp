'use strict';
/**
 * Created by Adam on 2014-07-23.
 */
var app = angular.module('app-services', []);

app.service('loggedUser', ['$rootScope', function ($rootScope) {

  this.loggedUser = {};

  this.isLogged = function () {
    return this.isLogged;
  };

  this.getLoggedUser = function () {
    return this.loggedUser;
  };

  this.setUser = function (user) {
    console.log('loggeduser.setUser invoked');
    console.log(user);
    this.loggedUser = user;
    this.isLogged = true;
    console.log(this.loggedUser);
    $rootScope.$broadcast('user.update', user);
  };

  this.logout = function () {
    console.log('loggeduser.logout');
    this.loggedUser = null;
    this.isLogged = false;
    $rootScope.$broadcast('user.update', null);
  };

  return this;
}]);
