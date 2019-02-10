'use strict';

/**
 * @ngdoc function
 * @name unitTestExploreApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the unitTestExploreApp
 */
angular.module('unitTestExploreApp')
  .controller('SearchCtrl', function ($scope, $location) {
    $scope.search = function() {
      if ($scope.query) {
        $location.path('/results').search('q', $scope.query);
      }
    };
  });
