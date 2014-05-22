'use strict';

angular
  .module('learningAngularApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
       /// controller: 'MainCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add_new_member.html',
        controller: 'AddCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
