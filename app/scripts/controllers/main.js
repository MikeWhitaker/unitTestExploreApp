'use strict';

/**
 * @ngdoc function
 * @name unitTestExploreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the unitTestExploreApp
 */
angular.module('unitTestExploreApp')
  .controller('MainCtrl', function (stopAnalytics) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    stopAnalytics.trackEvent('video', 'play', 'django.mp4');
  });
