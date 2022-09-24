'use strict';

describe('Service: myService', function () {

  // load the service's module
  beforeEach(module('unitTestExploreApp'));

  // instantiate service
  var myService;
  beforeEach(inject(function (_myService_) {
    myService = _myService_;
  }));

  it('should do something', function () {
    expect(!!myService).toBe(true);
  });

  describe('getDurationInMonths', function () {
    it('should return 0 if the start date is after the end date', function () {
      var duration = myService.getDurationInMonths('2014-01-01', '2013-01-01');
      expect(duration).toBe(0);
    });

    it('should return one when the for the difference between 2022-03-03 and 2022-04-04', function () {
      var duration = myService.getDurationInMonths('2022-03-03', '2022-04-04');
      expect(duration).toBe(1);
    });
  });

  describe('getDurationInYears', function () {
    it('should return 0 if the start date is after the end date', function () {
      var duration = myService.getDurationInYears('2014-01-01', '2013-01-01');
      expect(duration).toBe(0);
    });

    it('should return one when the for the difference between 2022-03-03 and 2023-04-04', function () {
      var duration = myService.getDurationInYears('2022-03-03', '2023-04-04');
      expect(duration).toBe(1);
    });

    it('should return one when the for the difference between 2022-03-03 and 2023-04-04', function () {
      var duration = myService.getDurationInYears('2022-11-03', '2023-01-04');
      expect(duration).toBe(1);
    });

    it('should return 10 when the for the difference between 2022-01-01 and 2032-10-01', function () {
      var duration = myService.getDurationInYears('2022-07-01', '2032-05-01');
      expect(duration).toBe(10);
    });
  });

  describe('getDurationInYearsWithMoment', function () {
    it('should return one when the for the difference between 2022-03-03 and 2023-04-04', function () {
      var duration = myService.getDurationInYearsWithMoment('2022-03-03', '2023-04-04');
      expect(duration).toBe(1);
    });

    it('should return one when the for the difference between 2022-03-03 and 2023-04-04', function () {
      var duration = myService.getDurationInYearsWithMoment('2022-11-03', '2023-01-04');
      expect(duration).toBe(0);
    });

    it('should return one when the for the difference between 2022-03-03 and 2023-04-04', function () {
      var duration = myService.getDurationInYearsWithMoment('2022-04-03', '2023-04-01');
      expect(duration).toBe(0);
    });

    it('should return 10 when the for the difference between 2022-01-01 and 2032-01-01', function () {
      var duration = myService.getDurationInYearsWithMoment('2022-01-01', '2032-01-01');
      expect(duration).toBe(10);
    });
  });
});
