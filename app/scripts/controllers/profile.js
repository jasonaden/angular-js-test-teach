'use strict';

/**
 * @ngdoc function
 * @name testTeachApp.controller:ProfileController
 * @description
 * # ProfileController
 * Controller of the testTeachApp
 */
angular.module('testTeachApp')
  .controller('ProfileController', function () {
    this.displayTitle = function () {
      if (this.firstName && this.lastName) {
        return this.firstName + ' ' + this.lastName;
      }
      return 'User Profile Form';
    };
    return this;
  });
