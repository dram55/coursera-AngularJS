(function(){
   'use strict';

   var app = angular.module('NarrowItDownApp', []);
   app.controller('NarrowItDownController',NarrowItDownController);

   NarrowItDownController.inject = ['MenuSearchService', '$filter'];
   function NarrowItDownController(MenuSearchService, $filter) {
      var ctrl = this;
      ctrl.menuFilter = "";
      ctrl.found = [];
      ctrl.message = null;

      ctrl.getMenu = function () {

         // if textbox is empty then report nothing found
         if (ctrl.menuFilter.trim().length === 0) {
            ctrl.reportNothingFound();
            return;
         }

         MenuSearchService.getAllMenuItems().then(function(result) {
            ctrl.found = $filter('filter')(result.data.menu_items, ctrl.menuFilter);
            if (ctrl.found && ctrl.found.length === 0) ctrl.reportNothingFound();
            else ctrl.message = null;

         }, function(error) {
            ctrl.reportNothingFound();
         });
      }

      ctrl.removeItem = function(itemIndex) {
         ctrl.found.splice(itemIndex,1);
      }

      ctrl.reportNothingFound = function() {
         ctrl.message = "Nothing Found!";
         ctrl.found = [];
      }
   }
})();