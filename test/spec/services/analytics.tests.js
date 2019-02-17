"use strict";

describe("Service: Analytics with functioning $window.ga", function() {
  var Analytics;
  var $window;
  // load the service's module
  beforeEach(function() {
    module("unitTestExploreApp", function() {
    });
  });

  // instantiate service
  beforeEach(inject(function(_Analytics_, _$window_) {
    Analytics = _Analytics_;
    $window = _$window_;
    $window.ga = jasmine.createSpy();
  }));

  it("Should call Analytic.trackEvent when stopAnalytics is called", function() {
    // Arrange
    // Act
    // dump(angular.mock.dump(Analytics));
    Analytics.trackEvent("someData");
    // Assert
    expect($window.ga).toHaveBeenCalled();
  });
});

describe("Service: stopAnalytics $window.ga not available", function() {
  var Analytics;
  var $windowProvider;
  var $window;
  // load the service's module
  beforeEach(module("unitTestExploreApp"));

  // instantiate service
  beforeEach(inject(function(_Analytics_) {
    Analytics = _Analytics_; 
  }));

  it("Should call Analytic.trackEvent when stopAnalytics is called", function() {
    // Assert
    expect(function(){
      // Act & Arrange
      Analytics.trackEvent("someData");
    } )
    .not.toThrow();
  });
  
  it('Should set some data in the global array bufferAnalyticsCall', function() {
    // Arrange & Act
    var tempGa = ga;
    ga = undefined;
    Analytics.trackEvent("some");
    Analytics.trackEvent("Data");
    // Assert
    expect(bufferAnalyticsCall.length).toBe(2);
    ga = tempGa; //reset the google analytics object
    bufferAnalyticsCall = []; //reset the bufferAnalyticsCall array
  });
});
