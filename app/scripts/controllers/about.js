'use strict';

/**
 * @ngdoc function
 * @name unitTestExploreApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the unitTestExploreApp
 */
angular.module('unitTestExploreApp')
  .controller('AboutCtrl', function ($resource) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
