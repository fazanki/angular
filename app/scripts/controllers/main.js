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

    $scope.add = function() {
      if ($scope.new_name && $scope.new_position) {
        $scope.teamC.push({
          name: $scope.new_name,
          position: $scope.new_position
        });
        $scope.new_name = '';
        $scope.new_position = '';
      }
    };

    $scope.remove = function(index) {
      $scope.teamC.splice(index, 1);
    }
  });
