"use strict";

/**
 * @ngdoc service
 * @name unitTestExploreApp.stopAnalytics
 * @description
 * # stopAnalytics
 * Service in the unitTestExploreApp.
 */
angular
  .module("unitTestExploreApp")
  .service("stopAnalytics", function(Analytics) {
    var service = {};

    var bufferAnalyticsCall = [];
    service.trackEvent = function() {
      if (_(arguments).some(function(argument) {
          return !argument;
        }))
        throw ("invalid argument exception: ", arguments);

      if (!Analytics.trackEvent) {
        bufferAnalyticsCall.push(arguments);
      } else {
        if(!_(bufferAnalyticsCall).isEmpty()){
          bufferAnalyticsCall.forEach(function(analyticsCall) {
            Analytics.trackEvent(analyticsCall);
          });
        }
        Analytics.trackEvent.apply(null, arguments);
      }
    };

    return service;
  });
