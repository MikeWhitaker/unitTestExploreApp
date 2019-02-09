'use strict';

describe('Search controller ->', function () {
  var $scope = {};
  var $location = {};

  beforeEach(function () {
    $location.url = "";
    $scope.search = function (query) {
      $location.url = '';
      if (query !== ''){
        $location.url = '/results?q=star%20wars';
      }
      return query;
    };
    
  });

  it('should redirect to the query results page for non-empty query', function () {
    // Arrange
    $scope.query = 'star wars';
    // Act 
    $scope.search();

    // Assert
    expect($location.url).toBe('/results?q=star%20wars');
  });

  it('should not do anything if the query is empty', function () {
    $scope.query = '';
    // Act 
    $scope.search($scope.query);

    // Assert
    expect($location.url).toBe('');
    
  });


});
