'use strict';
/**
 * Created by Adam on 2014-07-04.
 */
var app = angular.module('app-controllers');

app.controller('mainController', ['$scope','$rootScope','loggedUser',function ($scope,$rootscope, loggedUser) {
  $scope.user = {
    data : null,
    isLogged : false
  };

  $scope.logout = function(){
    console.log('MainCtrl.logout invoked');
    loggedUser.logout();
  };

  $rootscope.$on('user.update', function(event){
    console.log('MainCtrl.on.user.update invoked');
    console.log(event);
    $scope.user = {};
    $scope.user.isLogged = loggedUser.isLogged;
    $scope.user.data = loggedUser.loggedUser;
  });


}]);
