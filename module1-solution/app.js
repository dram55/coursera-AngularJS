(function () {

   'use strict';

   var app = angular.module("lunchCheck", []);

   app.controller("LunchCheckController", LunchCheckController);
   LunchCheckController.$inject = ['$scope'];

   function LunchCheckController($scope) {
      var errorMessage = "Too Much!";
      var successMessage = "Enjoy";

      $scope.items = "";

      $scope.checkIfTooMuchFood = function () {
         var itemArray = $scope.items.split(",").filter(element => element.trim().length > 0);

         if (itemArray.length > 3) {
            $scope.message = errorMessage;
         } else if (itemArray.length > 0 && itemArray.length <= 3) {
            $scope.message = successMessage;
         } else {
            $scope.message = "Please enter data first";
         }
      }

      $scope.isSuccessMessage = function (message) {
         if (message === successMessage) return true;
         else return false;
      }
   }
})();