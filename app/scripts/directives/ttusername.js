'use strict';

/**
 * @ngdoc directive
 * @name testTeachApp.directive:ttUsername
 * @description
 * # ttUsername
 */
angular.module('testTeachApp')
  .factory('checkUsername', function ($timeout, $q) {
    return function (username) {
      var pending, badAddresses = ['test@test.com', 'me@me.com'];
      function randInt(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
      }
      return $q(function (resolve, reject) {
        if (pending) {
          $timeout.cancel(pending);
        }
        pending = $timeout(function () {
          if (badAddresses.indexOf(username) > -1) {
            reject('Username already in use!');
          } else {
            resolve();
          }
        }, randInt(300, 1200));
      });
    };
  })
  .directive('ttUsername', function (checkUsername) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function postLink(scope, element, attrs, ngModel) {
        ngModel.$asyncValidators.username = function (modelValue) {
          return checkUsername(modelValue);
        };
      }
    };
  });
