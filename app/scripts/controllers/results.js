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
    var query = $location.search().q;
    omdbApi.search(query)
      .then(function(data){
        data = data.data;
        $scope.results = data.Search;
      })
      .catch(function(){
        $scope.errorMessage = 'Something went wrong.';
      });
  });
