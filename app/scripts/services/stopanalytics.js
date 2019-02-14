'use strict';

/**
 * @ngdoc service
 * @name unitTestExploreApp.stopAnalytics
 * @description
 * # stopAnalytics
 * Service in the unitTestExploreApp.
 */
angular.module('unitTestExploreApp')
  .service('stopAnalytics', function (Analytics) {
    var service = {};
    
    service.trackEvent = function () {
      Analytics.trackEvent(arguments[0],[1],[3]);
    };

    return service;
  });
