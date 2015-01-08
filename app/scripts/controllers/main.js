'use strict';

/**
 * @ngdoc function
 * @name angularJsTestTeachApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsTestTeachApp
 */
angular.module('angularJsTestTeachApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
