'use strict';

/**
 * @ngdoc function
 * @name unitTestExploreApp.controller:SearchCtrl
 * @description 
 * # SearchCtrl
 * Controller of the unitTestExploreApp
 */
angular.module('unitTestExploreApp')
  .controller('SearchCtrl', function ($location) {
    var vm = this;
    vm.search = function() {
      if (vm.query) {
        $location.path('/results').search('q', vm.query);
      }
    };
  });
