"use strict";

describe("Controller: headerCtrl", function() {
  // load the controller's module
  beforeEach(module("unitTestExploreApp"));

  var headerCtrl;
  var $location;
  var scope;
  var $controller;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$controller_, $rootScope, _$location_) {
    $controller = _$controller_;
    $location = _$location_;
    scope = $rootScope.$new();
  }));

  beforeEach(function(){
    var headerCtrl = $controller("headerCtrl", {
      $scope: scope
    });
  });

  describe("isActive ->", function() {
    
    it('should call $location.path', function() {

      spyOn($location, "path").and.callFake(function() {
        return "aString";
      });

      scope.isActive("aString");

      
      expect($location.path).toHaveBeenCalled();
    });
      
    it("Should return true when the current path matches the parameter", function() {
      spyOn($location, "path").and.callFake(function() {
        return "aString";
      });
      var expectedResult = scope.isActive("aString");
      expect(expectedResult).toBe(true);
    });

    it("Should return true when the current path matches the parameter", function() {
      spyOn($location, "path").and.callFake(function() {
        return "anOtherString";
      });
      var expectedResult = scope.isActive("aString");
      expect(expectedResult).toBe(false);
    });
  });
});
