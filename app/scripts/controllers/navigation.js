'use strict';

/**
 * @ngdoc function
 * @name testTeachApp.controller:NavigationController
 * @description
 * # AboutCtrl
 * Controller of the testTeachApp
 */
angular.module('testTeachApp')
  .controller('NavigationController', function ($location) {

    this.isActive = function (path) {
      return $location.path() === path.slice(1);
    };

    this.links = [
      {href: '#/', label: 'Home'},
      {href: '#/profile', label: 'Profile'}
    ];

    return this;
  });
