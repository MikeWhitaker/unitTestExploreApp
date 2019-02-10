"use strict";

describe("Search controller ->", function() {
  var vm;
  var $location;
  var $controller;
  beforeEach(module('unitTestExploreApp'));
  
  beforeEach(inject(function(_$controller_, _$location_) {
    $controller = _$controller_;
    $location = _$location_;
    vm = {};
  }));

   it("should redirect to the query results page for non-empty query", function() {
    // Arrange
    vm = $controller('SearchCtrl', {$location: $location}, {query: 'star wars'});

    // Act
    vm.search();

    // Assert
    expect($location.url()).toBe("/results?q=star%20wars");
  });

  it("should not do anything if the query is empty", function() {
    // Arrange
    vm = $controller('SearchCtrl', {$location: $location}, {query: ''});
    
    // Act
    vm.search();

    // Assert
    expect($location.url()).toBe("");
  });
});
