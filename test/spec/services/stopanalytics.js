'use strict';

describe('Service: stopAnalytics', function () {

  // load the service's module
  beforeEach(module('unitTestExploreApp'));

  // instantiate service
  var stopAnalytics;
  beforeEach(inject(function (_stopAnalytics_) {
    stopAnalytics = _stopAnalytics_;
  }));

  it('should do something', function () {
    expect(!!stopAnalytics).toBe(true);
  });

});
