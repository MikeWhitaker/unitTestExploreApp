'use strict';

/**
 * @ngdoc service
 * @name unitTestExploreApp.myService
 * @description
 * # myService
 * Service in the unitTestExploreApp.
 */
angular.module('unitTestExploreApp')
  .service('myService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {};
    service.getLocation = function (locale) {
      console.log('this is the locale: ', locale);
    };

    return service;
  });
