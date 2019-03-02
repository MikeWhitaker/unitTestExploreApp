"use strict";

describe("Search controller ->", function() {
  var vm;
  var $location;
  var $controller;
  var $timeout;
  var $httpBackend;
  beforeEach(module('unitTestExploreApp'));
  
  beforeEach(inject(function(_$controller_, _$location_, _$timeout_, _$httpBackend_) {
    $controller = _$controller_;
    $location = _$location_;
    $timeout = _$timeout_;
    $httpBackend = _$httpBackend_
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

  
  it("should redirect to the results page after 1 second passes after last occurrence of keyup event", function() {
    $httpBackend.expectGET("views/results.html").respond(200);
    vm = $controller('SearchCtrl', {$location: $location});
    
    vm.query = 'star wars';
    vm.keyUp();
    $timeout.flush();
    expect($timeout.verifyNoPendingTasks).not.toThrow();
    expect($location.url()).toBe('/results?q=star%20wars');
  });

  
  it('should cancel the timeout if any key is pressed in the 1000 ms timeout frame', function() {
    $httpBackend.expectGET("views/results.html").respond(200);
    vm = $controller('SearchCtrl', {$location: $location});
    
    vm.query = 'star wars';
    vm.keyUp();
    vm.cancelKeyUpTimeOutSearch();
    expect($timeout.verifyNoPendingTasks).not.toThrow();
  });
    
    
});
