'use strict';

/**
 * @ngdoc function
 * @name unitTestExploreApp.controller:SearchCtrl
 * @description 
 * # SearchCtrl
 * Controller of the unitTestExploreApp
 */
angular.module('unitTestExploreApp')
  .controller('SearchCtrl', function ($location, $timeout) {
    var vm = this;
    var timer;

    vm.keyUp = function(){
      timer = $timeout(vm.search(), 1000);
    };

    vm.cancelKeyUpTimeOutSearch = function () {
      $timeout.cancel(timer);
    }

    vm.search = function() {
      if (vm.query) {
        $timeout.cancel(timer);
        $location.path('/results').search('q', vm.query);
      }
    };
  });
