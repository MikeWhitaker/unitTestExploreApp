"use strict";

describe("Service: stopAnalytics", function() {
  var stopAnalytics;
  var Analytics;
  // load the service's module
  beforeEach(function() {
    module("unitTestExploreApp", function($provide) {
      $provide.value("Analytics", {
        trackEvent: jasmine.createSpy()
      });
    });
  });

  // instantiate service
  beforeEach(inject(function(_stopAnalytics_, _Analytics_) {
    stopAnalytics = _stopAnalytics_;
    Analytics = _Analytics_;
  }));

  it("Should call Analytic.trackEvent when stopAnalytics is called", function() {
    // Arrange
    // Act
    stopAnalytics.trackEvent("someData", 1, {});
    // Assert
    expect(Analytics.trackEvent).toHaveBeenCalledWith("someData", 1, {});
  });
});
