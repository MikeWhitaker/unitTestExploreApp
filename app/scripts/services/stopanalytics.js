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

    var bufferAnalyticCall = [];
    service.trackEvent = function() {
      if (_(arguments).some(function(argument) {
          return !argument;
        }))
        throw ("invalid argument exception: ", arguments);

      if (!Analytics.trackEvent) {
        bufferAnalyticCall.push(arguments);
      } else {
        if(!_(bufferAnalyticCall).isEmpty()){
          bufferAnalyticCall.forEach(function(analyticsCall) {
            Analytics.trackEvent(analyticsCall);
          });
        }
        Analytics.trackEvent.apply(null, arguments);
      }
    };

    return service;
  });
