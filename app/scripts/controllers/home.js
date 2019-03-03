"use strict";

/**
 * @ngdoc function
 * @name unitTestExploreApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the unitTestExploreApp
 */
angular
  .module("unitTestExploreApp")
  .controller("HomeCtrl", function($interval, omdbApi, PopularMovies) {
    var vm = this;
    vm.results = {
      Search: [
        {
          Title: "Star wars: the empire strikes back"
        },
        {
          Title: "Dune: a better film"
        },
        {
          Title: "Dune2: an even betterer series"
        }
      ]
    };
    vm.result = {};

    vm.findMovie = function(id) {
      omdbApi.find(id).then(function(data) {
        vm.result = data;
      });
    };

    PopularMovies.get().then(function(data) {
      vm.results = data;
      findMovie(vm.results[0]);
      var index = 0;
      $interval(function() {
        index++;
        var calculatedIndex = index % results.length;
        vm.result = findMovie(results[calculatedIndex]);
      }, 5000);
    });
  });
