'use strict';

/**
 * @ngdoc overview
 * @name geoLocationApp
 * @description
 * # geoLocationApp
 *
 * Main module of the application.
 */
var geoLocationApp = angular.module('geoLocationApp', [
    'ngRoute',
    'ngResource',
    'uiGmapgoogle-maps'
  ]);

geoLocationApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      }).
     when('/about', {
       templateUrl: 'partials/about.html'
     }).
      otherwise({
        redirectTo: '/'
      });
  }]);
