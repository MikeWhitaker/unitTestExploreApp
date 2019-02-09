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

    function iterate(interations) {
      for (var index = 1; index < interations; index++) {
        updateAnalyticsValue(index);
      }
    }

    function updateAnalyticsValue(counter) {
      if (!vm.analyticsValue) {
        var analyticPrefix = "Btn_Value";
        vm.analyticsValue = analyticPrefix.concat(counter);
      }
    }

    function run(){
      iterate(30);
    }

    run();
  });