'use strict';

/**
 * @ngdoc function
 * @name angularJsTestTeachApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsTestTeachApp
 */
angular.module('angularJsTestTeachApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
