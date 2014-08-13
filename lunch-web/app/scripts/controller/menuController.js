'use strict';
/**
 * Created by Adam on 08.07.14.
 */
var app = angular.module('app-controllers');

app.controller('menuController', ['$scope','lunchFactory', function ($scope, lunchFactory) {
  $scope.text = 'Menu Ctrl';
  $scope.data = {};
  lunchFactory.post({},function(success){
    $scope.data.events = success;

  });

  $scope.myEvents = function(){
    lunchFactory.post({},function(success){
      $scope.data.events = success;

    });
  };

  $scope.newEvent = function(){

  };

  $scope.viewProfile = function(){

  };



}]);