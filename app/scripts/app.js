'use strict';

/**
 * @ngdoc overview
 * @name testTeachApp
 * @description
 * # testTeachApp
 *
 * Main module of the application.
 */
angular
  .module('testTeachApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMessages'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
