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
    // AngularJS will instantiate a singleton by calling "new" on this function

    var service = {};
    service.trackEvent = function () {
      Analytics.trackEvent(arguments[0],[1],[3]);
    };

    return service;
  });
