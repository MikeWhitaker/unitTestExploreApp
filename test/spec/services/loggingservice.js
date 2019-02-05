'use strict';

describe('Service: loggingService', function () {

  // load the service's module
  beforeEach(module('unitTestExploreApp'));

  // instantiate service
  var loggingService;
  beforeEach(inject(function (_loggingService_) {
    loggingService = _loggingService_;
  }));

  it('should do something', function () {
    expect(!!loggingService).toBe(true);
  });

});
