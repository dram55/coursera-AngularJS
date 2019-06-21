(function(){
   'use strict';

   var app = angular.module('NarrowItDownApp');
   app.directive('menuItems', MenuItemsDirective);

   MenuItemsDirective.inject = [];
   function MenuItemsDirective() {
      return {
         restrict: 'E',
         templateUrl: 'menuitems.template.html',
         scope: {
            foundItems: '<',
            removeItem: '&'
         }
      };
   }
})();