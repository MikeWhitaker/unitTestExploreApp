"use strict";

describe("Controller: headerCtrl", function() {
  // load the controller's module
  beforeEach(module("unitTestExploreApp"));

  var headerCtrl;
  var $location;
  var scope;
  var $scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _$location_) {
    scope = $rootScope.$new();
    $location = _$location_;
    headerCtrl = $controller("headerCtrl", {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  fdescribe("isActive ->", function() {
    
    it('should call $location.path', function() {
      spyOn($location, "path").and.callFake(function() {
        return "aString";
      });
      headerCtrl.isActive("aString");
      expect($location.path).toHaveBeenCalled();
    });
      
    it("Should return true when the current path matches the parameter", function() {
      spyOn($location, "path").and.callFake(function() {
        return "aString";
      });
      var expectedResult = headerCtrl.isActive("aString");
      expect(expectedResult).toBe(true);
    });

    it("Should return true when the current path matches the parameter", function() {
      spyOn($location, "path").and.callFake(function() {
        return "anOtherString";
      });
      var expectedResult = headerCtrl.isActive("aString");
      expect(expectedResult).toBe(false);
    });
  });
});
