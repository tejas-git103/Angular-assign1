(function() {
  'use strict';
  angular.module("LunchCheck", []).
  controller("LunchCheckController",LunchCheckController);
  LunchCheckController.$project = ['$scope'];
  function LunchCheckController($scope)
  {
    $scope.name ="";
    $scope.error="";
    $scope.result="";
    $scope.checking =function () {
      if ($scope.name.localeCompare("")==0) {
        $scope.result="";
        $scope.error = "Please enter data first";
      }
      else {
        $scope.error ="";
        var array=$scope.name.split(",");

        if(array.length>3)
        {
          $scope.result="Too much!";
        }
        else {
          $scope.result="Enjoy!";
        }
      }
    }
  }

}());
