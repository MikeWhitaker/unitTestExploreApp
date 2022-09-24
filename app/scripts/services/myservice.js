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


    service.getDurationInMonths = function (startDate, endDate) {
      var startDateTime = new Date(startDate);
      var endDateTime = new Date(endDate);

      var months = (endDateTime.getFullYear() - startDateTime.getFullYear()) * 12;
      months -= startDateTime.getMonth();
      months += endDateTime.getMonth();

      return months <= 0 ? 0 : months;
    };

    service.getDurationInYears = function (startDate, endDate) {
      var startDateTime = new Date(startDate);
      var endDateTime = new Date(endDate);

      var years = (endDateTime.getFullYear() - startDateTime.getFullYear());

      return years <= 0 ? 0 : years;
    }

    service.getDurationInYearsWithMoment = function (startDate, endDate) {
      var startMoment = moment(new Date(startDate));
      var endMoment = moment(new Date(endDate));

      var durationInYears = endMoment.diff(startMoment, 'years');

      console.log('durationInYears: ', durationInYears);
      return durationInYears;
    };
    
    return service;
  });
