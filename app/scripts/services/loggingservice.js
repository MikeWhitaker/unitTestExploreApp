'use strict';

/**
 * @ngdoc service
 * @name unitTestExploreApp.loggingService
 * @description
 * # loggingService
 * Service in the unitTestExploreApp.
 */
angular.module('unitTestExploreApp')
  .service('loggingService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {};
    service.start = function () {
      //console.log('from the service');
    };

    return service;
  });
