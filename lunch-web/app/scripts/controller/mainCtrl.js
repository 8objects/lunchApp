'use strict';
/**
 * Created by Adam on 2014-07-04.
 */
var app = angular.module('lunchApp-main', []);

app.controller('MainCtrl', ['$scope','$rootScope','LoggedUser',function ($scope,$rootscope, LoggedUser) {
  $scope.user = {
    data : null,
    isLogged : false
  };

  $scope.logout = function(){
    console.log('MainCtrl.logout invoked');
    LoggedUser.logout();
  };

  $rootscope.$on('user.update', function(event){
    console.log('MainCtrl.on.user.update invoked');
    console.log(event);
    $scope.user = {};
    $scope.user.isLogged = LoggedUser.isLogged;
    $scope.user.data = LoggedUser.loggedUser;
  });


}]);
