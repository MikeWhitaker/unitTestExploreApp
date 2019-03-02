'use strict';

describe('Service: omdbApi', function () {
  var expectedData = "sometext";
  var responseData = "someOtherData";

  // load the service's module
  beforeEach(module("unitTestExploreApp"));

  // instantiate service
  var omdbApi;
  var $httpBackend;
  var $rootScope;

  beforeEach(inject(function(_omdbApi_, _$httpBackend_, _$rootScope_) {
    omdbApi = _omdbApi_;
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
  }));

  it("should do something", function() {
    expect(!!omdbApi).toBe(true);
  });

  it("should have a function get data that returns some data", function() {
    // Arrange
    var expectedData = "sometext";

    // ACt
    var actualResult = omdbApi.getData();

    // Assert
    expect(actualResult).toEqual(expectedData);
  });

  it("should return the data form the http backend", function() {
    // Arrange
    var actualResult;
    var expectedUrl = "http://www.omdbapi.com/?apikey=4293974&s=star%20wars";
    $httpBackend.when("GET", "views/main.html").respond(200);

    $httpBackend.when("GET", expectedUrl).respond(200, responseData);

    // Act
    omdbApi.search("star wars").then(function(data) {
      actualResult = data;
    });
    $httpBackend.flush();
    // Assert

    var actualRequestJson = angular.fromJson(actualResult);

    expect(actualRequestJson.data).toEqual(responseData);
  });
});
