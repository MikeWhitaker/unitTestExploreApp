'use strict';

describe('Controller: ResultsCtrl ->', function () {
  var ResultsCtrl;
  var $controller;
  var scope;
  var omdbApi;
  var $q;
  var $httpBackend;
  var $location;


  var results = {
    "Search": [{
      "Title": "Star wars: the empire strikes back"
    }, {
      "Title": "Dune: a better film"
    },{
      "Title": "Dune2: an even betterer series"
    }]
  };

  // load the controller's module
  beforeEach(module('unitTestExploreApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope, _$controller_, _$httpBackend_, _$location_, _$q_, _omdbApi_) {
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    $location = _$location_;
    $q = _$q_;
    omdbApi = _omdbApi_;
    scope = $rootScope.$new();
  }));

  beforeEach(function(){
    $httpBackend.expectGET("views/main.html").respond(200);
  });

  it('should have an array on the scope with movie data', function () {
    // Arrange
    var expectedResult = "Star wars: the empire strikes back"; 
    $location.search('q', 'star wars');

    spyOn(omdbApi, 'search').and.callFake(function () {
      // interesting piece of code here. We will be resolving the promise with $q resolve.
      var deferred = $q.defer();
      deferred.resolve(results);
      return deferred.promise;
    });

    ResultsCtrl = $controller('ResultsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });

    scope.$apply();
    expect(scope.results[0].Title).toBe(expectedResult);
  });

  it('should have an property on the scope called errorMessage', function () {
    // Arrange
    var expectedErrorMessage = 'Something went wrong.';
    $location.search('q', 'star wars');

    spyOn(omdbApi, 'search').and.callFake(function () {
      // interesting piece of code here. We will be resolving the promise with $q resolve.
      var deferred = $q.defer();
      deferred.reject();
      return deferred.promise;
    });

    ResultsCtrl = $controller('ResultsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });

    scope.$apply();
    expect(scope.errorMessage).toBe(expectedErrorMessage);
  });
});
