'use strict';

fdescribe('Controller: AnalyticscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('unitTestExploreApp'));

  var AnalyticscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnalyticscontrollerCtrl = $controller('AnalyticscontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have a parameter analyticsValue on the controller', function () {
    expect(AnalyticscontrollerCtrl.analyticsValue).toBeDefined()
  });

  it('should the value of analyticsValue on the controller should be in a certain format', function () {
    expect(AnalyticscontrollerCtrl.analyticsValue).toBe('Btn_Value1');
  });

});
