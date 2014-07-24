'use strict';
/**
 * Created by Adam on 2014-07-04.
 */
var app = angular.module('lunchApp-controllers', []);

app.controller('LoginCtrl', ['$scope','$state', 'LoginSrv','LoggedUser', function ($scope,$state, LoginSrv, LoggedUser) {
  $scope.text = ' test';

  $scope.login = function () {
    //$log.info('login invoked');
    var User = LoginSrv.login();
    User.get($scope.credentials).$promise.then(
      function(success){
        if(success.status === 'OK'){
          console.log(success);
          LoggedUser.setUser(success);
          $state.transitionTo('menu');
        }
      }
    );
    /**.get({},function (success) {
      if(success.status === 'OK'){
        $state.transitionTo('menu');
      }
    }, function (error) {
      $scope.text = error;
    });
    **/
  };

  $scope.forgotpasswotd = function () {
    $scope.text = '';
  };
}]);
