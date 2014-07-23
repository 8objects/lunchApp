'use strict';
/**
 * Created by Adam on 2014-07-04.
 */
var app = angular.module('lunchApp-main', []);

app.controller('MainCtrl', ['loggeduser','$scope','$rootScope',function ($scope,$rootscope, LoggedUser) {
  $scope.text = 'adas ';

  $rootscope.$on('user.update', function(event,data){
    console.log('loggeduser.on.user.update invoked');
    console.log(event);
    console.log(data);
    console.log(LoggedUser);
    console.log(LoggedUser.loggedUser);
    $scope.user = {};
    $scope.user.isLogged = LoggedUser.isLogged;
    $scope.user.data = LoggedUser.loggedUser;
  });
}]);
