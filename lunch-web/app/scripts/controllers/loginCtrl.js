'use strict';
/**
 * Created by Adam on 2014-07-04.
 */
var app = angular.module('lunchApp-controllers', []);

app.controller('LoginCtrl', ['$scope', 'LoginSrv', function ($scope, LoginSrv) {
  $scope.text = ' test';

  $scope.login = function () {
    $scope.text = ' login invkoed';
    LoginSrv.get({},function(success){
      $scope.text = success.token;
    },function(error){
      $scope.text = error;
    });
    //$scope.text = data.token;
  };

  $scope.forgotpasswotd = function(){
    $scope.text = '';
  };
}]);
