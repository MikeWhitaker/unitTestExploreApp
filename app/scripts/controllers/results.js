'use strict';

/**
 * @ngdoc function
 * @name unitTestExploreApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the unitTestExploreApp
 */
angular.module('unitTestExploreApp')
  .controller('ResultsCtrl', function ($scope, omdbApi, $location) {
    var results = {
      "Search": [{
        "Title": "Star wars: the empire strikes back"
      }, {
        "Title": "Dune: a better film"
      },{
        "Title": "Dune2: an even betterer series"
      }]
    };
    var query = $location.search().q;
    debugger;
    omdbApi.search(query)
      .then(function(data){
        $scope.results = data.Search;
      })
      .catch(function(){
        $scope.errorMessage = 'Something went wrong.';
      });
  });
