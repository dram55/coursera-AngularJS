(function(){
   'use strict';
 
   var app = angular.module('ShoppingListCheckOff');
   app.controller('AlreadyBoughtController', AlreadyBoughtController);
 
   AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
   function AlreadyBoughtController(ShoppingListCheckOffService) {
      var bought = this;

      bought.boughtList = ShoppingListCheckOffService.getBoughtList();

      bought.sellItem = function(index) {
         ShoppingListCheckOffService.sellItem(index);
      }

      bought.isNothingBought = function() {
         return bought.boughtList.length === 0;
      }
   }
 
 })();