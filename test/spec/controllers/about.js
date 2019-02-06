"use strict";

describe("Controller: AboutCtrl", function() {
  // load the controller's module
  var AboutCtrl;
  var scope;
  var $window;
  beforeEach(module("unitTestExploreApp"));


  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _$window_) {
    $window = _$window_;
    scope = $rootScope.$new();
    AboutCtrl = $controller("AboutCtrl", {
      $scope: scope
      // place here mocked dependencies
    });
    spyOn($window, 'alert');
  }));

  it("should attach a list of awesomeThings to the scope", function() {
    expect(AboutCtrl.awesomeThings.length).toBe(3);
  });

  fit("should have a $window object", function() {

    $window.alert('some text');
    expect($window.alert).toHaveBeenCalled();
  });
});
