"use strict";

/**
 * @ngdoc function
 * @name unitTestExploreApp.controller:AnalyticscontrollerCtrl
 * @description
 * # AnalyticscontrollerCtrl
 * Controller of the unitTestExploreApp
 */
angular
  .module("unitTestExploreApp")
  .controller("AnalyticscontrollerCtrl", function() {
    var vm = this;

    function itterate(interations) {
      for (let index = 1; index < interations; index++) {
        counter = index;
      }
      updateAnalyticsValue(value);
    }

    function updateAnalyticsValue(value) {
      if (!vm.analyticsValue) {
        let analyticPrefix = "Btn_Value";
        vm.analyticsValue = analyticPrefix.concat(value);
      }
    }

    function run(){
      itterate(30);
    }

    run();
  });
