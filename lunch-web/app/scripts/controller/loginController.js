'use strict';
/**
 * Created by Adam on 2014-07-04.
 */
var app = angular.module('app-controllers');

app.controller('loginController', ['$scope','$state', 'loginFactory','loggedUser', function ($scope,$state, loginFactory, loggedUser) {
  $scope.text = ' test';

  $scope.login = function () {
    //$log.info('login invoked');
    var User = loginFactory.login();
    User.get($scope.credentials).$promise.then(
      function(success){
        if(success.status === 'OK'){
          console.log(success);
          loggedUser.setUser(success);
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
