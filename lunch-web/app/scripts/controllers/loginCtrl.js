'use strict';
/**
 * Created by Adam on 2014-07-04.
 */
var app = angular.module('lunchApp-controllers', []);

app.controller('LoginCtrl', ['$scope','$state', 'LoginSrv', function ($scope,$state, LoginSrv) {
  $scope.text = ' test';

  $scope.login = function () {
    //$log.info('login invoked');
    LoginSrv.get({username: $scope.username, password: $scope.password}, function (success) {
      if(success.status === 'OK'){
        $state.transitionTo('menu');
      }
    }, function (error) {
      $scope.text = error;
    });

  };

  $scope.forgotpasswotd = function () {
    $scope.text = '';
  };
}]);
