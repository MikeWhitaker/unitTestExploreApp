'use strict';

/**
 * @ngdoc function
 * @name unitTestExploreApp.controller:headerCtrl
 * @description
 * # headerCtrl
 * Controller of the unitTestExploreApp
 */
angular.module('unitTestExploreApp')
  .controller('headerCtrl', function ($scope, $location) {
    var vm = this;
    vm.isActive = function (queriedPath) {
      return (queriedPath === $location.path());
    };

    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
  });
