'use strict';

/**
 * @ngdoc overview
 * @name angularJsTestTeachApp
 * @description
 * # angularJsTestTeachApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsTestTeachApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
