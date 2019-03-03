"use strict";

describe("Controller: HomeCtrl", function() {
  var PopularMovies;
  var $q;

  var results = {
    Search: [
      {
        Title: "Star wars: the empire strikes back"
      },
      {
        Title: "Dune: a better film"
      },
      {
        Title: "Dune2: an even betterer series"
      }
    ]
  };

  // load the controller's module
  beforeEach(module("unitTestExploreApp"));

  beforeEach(inject(function(_$q_, _PopularMovies_){
    PopularMovies = _PopularMovies_;
    spyOn(_PopularMovies_, "get").and.callFake(function(){
      var deferred = _$q_.defer();
      deferred.resolve(['tt00767559', 'tt0080684', 'tt0086190']);
      return deferred.promise;
    });
    $q = _$q_;
  }));

  beforeEach(inject(function(_$q_, _omdbApi_){
    spyOn(_omdbApi_, 'find').and.callFake(function(){
      var deferred = _$q_.defer();
      var args = _omdbApi_.find.calls.mostRecent().args[0];
      if (args === 'tt00767559') {
        deferred.resolve(results[0])
      } else if (args === 'tt0080684') {
        deferred.resolve(results[1])
      } else if (args === 'tt0086190') {
        deferred.resolve(results[2])
      } else {
        deferred.reject();
      }
    });

  }));

  var ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope,_$interval_, _omdbApi_, _PopularMovies_) {
    scope = $rootScope.$new();
    ctrl = $controller("HomeCtrl", {
      $scope: scope,
      $interval: _$interval_,
      omdbApi: _omdbApi_,
      PopularMovies: _PopularMovies_
      // place here mocked dependencies
    });
    $rootScope.apply();
  }));

  it("should have a variable on the controller named result", function() {
    expect(ctrl.result).toBeDefined;
  });

  it("should rotate the show movie data every 5 seconds", function() {
    expect(ctrl.result.Title).toBe(results[0].Title);
    //should update after 5 seconds
    expect(ctrl.result.Title).toBe(results[0].Title);
    //should update after 5 seconds
    expect(ctrl.result.Title).toBe(results[0].Title);
  });
});
