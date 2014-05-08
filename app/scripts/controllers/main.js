'use strict';

angular.module('learningAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.teamC = [
      {name:"Gareth", position:"back end developer" },
      {name:"Aman", position:"qa" },
      {name:"Karl", position:"ux" },
      {name:"Franco", position:"front end develper" },
      {name:"Jaky", position:"product owner" }
    ];
  });
