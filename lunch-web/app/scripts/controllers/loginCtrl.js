'use strict';

var app = angular.module('lunchWebApp-controllers',[]);

app.controller('LoginCtrl', ['$scope', 'LoginSrv', function ($scope, LoginSrv) {
    $scope.text = 'test';

    $scope.login = function () {
      var data = LoginSrv.query();
      $scope.text = data.token;
    };
  }]);
