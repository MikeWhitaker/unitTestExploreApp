"use strict";

fdescribe("Search controller ->", function() {
  var $scope;
  var $location;
  var $controller;

  beforeEach(inject(function(_$controller_, _$location_) {
    $scope = {};
    $controller = _$controller_;
    $location = _$location_;

    var ctrlCtor = function($scope) {
      
      $scope.search = function() {
        if ($scope.query) {
          $location.path('/results').search('q', $scope.query);
        }
      };
    };

    var ctrlLocals = {
      $scope: $scope,
      $location: $location
    };

    $controller(ctrlCtor, ctrlLocals);
  }));

   it("should redirect to the query results page for non-empty query", function() {
    // Arrange
    $scope.query = "star wars";
    // Act
    $scope.search();

    // Assert
    expect($location.url()).toBe("/results?q=star%20wars");
  });

  it("should not do anything if the query is empty", function() {
    $scope.query = "";
    // Act
    $scope.search();

    // Assert
    expect($location.url()).toBe("");
  });
});
