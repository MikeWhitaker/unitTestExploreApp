'use strict';

/**
 * @ngdoc service
 * @name unitTestExploreApp.core
 * @description
 * # core
 * Factory in the unitTestExploreApp.
 */
angular.module('unitTestExploreApp')
  .factory('core', function ($resource) {
    var token = 'teadybear';
    
    return $resource(
      "popular/:movieId",
      { movieId: "@Id" },
      {
        update: {
          method: "PUT",
          headers: { authToken: token }
        },
        get: {
          method: "GET",
          headers: { authToken: token }
        },
        query: {
          method: "GET",
          headers: { authToken: token }
        },
        search: {
          method: "GET",
          headers: { authToken: token }
        },
        save: {
          method: "POST",
          headers: { authToken: token }
        },
        remove: {
          method: "DELETE",
          headers: { authToken: token }
        }
      }
    );
  });
