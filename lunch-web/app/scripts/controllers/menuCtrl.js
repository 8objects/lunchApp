'use strict';
/**
 * Created by Adam on 08.07.14.
 */
var app = angular.module('lunchApp-menu', []);

app.controller('MenuCtrl', ['$scope','LunchSrv', function ($scope, LunchSrv) {
  $scope.text = 'Menu Ctrl';
  $scope.data = {};
  LunchSrv.get({},function(success){
    $scope.data.events = success;

  });

  $scope.myEvents = function(){
    LunchSrv.get({},function(success){
      $scope.data.events = success;

    });
  };

  $scope.newEvent = function(){

  };

  $scope.viewProfile = function(){

  };



}]);