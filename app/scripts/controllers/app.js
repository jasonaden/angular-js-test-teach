'use strict';

/**
 * @ngdoc function
 * @name testTeachApp.controller:AppController
 * @description
 * # AppController
 * Controller of the testTeachApp
 */
angular.module('testTeachApp')
  .controller('AppController', function ($scope, $location) {
    $scope.$watch(function () {return $location.search();}, function (newSearch) {
      if (newSearch.debug) {
        $scope.showAppDebug = true;
      }
    });
  });
