'use strict';

angular.module('lunchWebApp')
  .controller('LoginCtrl', ['$scope', 'LoginSrv', function ($scope, LoginSrv) {
    $scope.text = 'test';

    $scope.login = function () {
      var data = LoginSrv.query();
      $scope.text = data.token;
    };
  }]);
