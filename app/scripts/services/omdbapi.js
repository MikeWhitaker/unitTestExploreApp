'use strict';

/**
 * @ngdoc service
 * @name unitTestExploreApp.omdbApi
 * @description
 * # omdbApi
 * Service in the unitTestExploreApp.
 */
angular.module('unitTestExploreApp')
  .service('omdbApi', function ($http, $q) {
    var self = this;
    self.aVariable = 'sometext';
    var baseUrl = 'http://www.omdbapi.com/?apikey=4293974&';
    var service = {};
    
    function httpPromise (url) {
      var deferred = $q.defer();
      $http.get(url)
        .then(function successCallback(response) {
          deferred.resolve(response);
        }, function errorCallback(response) {
          deferred.reject();
        });
			return deferred.promise;
    }
    
    service.search = function(query) { 
      return httpPromise(baseUrl + 's=' + encodeURIComponent(query));
    };
    
    service.find = function(id) {
			return httpPromise(baseUrl + 'i=' + id);
		};

    service.getData = function (){
      return self.aVariable;
    };

    return service;
  });
