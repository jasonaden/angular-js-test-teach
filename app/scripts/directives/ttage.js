'use strict';

/**
 * @ngdoc directive
 * @name angularJsTestTeachApp.directive:ttAge
 * @description
 * # ttAge
 */
angular.module('testTeachApp')
  .directive('ttAge', function ($parse) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function postLink(scope, element, attrs, ngModel) {
        ngModel.$validators.age = function (modelValue) {
          var val = parseInt(modelValue), config = $parse(attrs.ttAge)(scope);
          if (!isNaN(val) &&
            (!('min' in config) || val >= config.min) &&
            (!('max' in config) || val <= config.max)) {
            return true;
          }
          return false;
        };
      }
    };
  });
