"use strict";
describe("unitTestExploreApp config tests", function() {
  var $locationProvider;
  // beforeEach(function () {
  //     angular.module('locationProviderConfig', [])
  //         .config(function(_$locationProvider_) {
  //             $locationProvider= _$locationProvider_;
  //             spyOn($locationProvider, 'html5Mode');
  //         });
  //     module('locationProviderConfig');
  //     module('unitTestExploreApp');
  //     inject();
  // });
  
  beforeEach(function() {
    module(function(_$locationProvider_) {
      $locationProvider = _$locationProvider_;
      spyOn($locationProvider, "html5Mode");
    });
    module("unitTestExploreApp");
    inject();
  });

  it("should set html5 mode false ", function() {
    expect($locationProvider.html5Mode).toHaveBeenCalledWith(false);
  });
});

describe('unitTestExploreApp runfunc tests', function () {
    var loggingService;
    beforeEach(function () {
        module('unitTestExploreApp', function ($provide) {
            $provide.value('loggingService', {
                start: jasmine.createSpy()
            });
        });
        inject(function (_loggingService_) {
            loggingService = _loggingService_;
        });
    });
    it('should start logging service', function() {
        expect(loggingService.start).toHaveBeenCalled();
    });
});
