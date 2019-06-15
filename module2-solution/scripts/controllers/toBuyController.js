(function(){
  'use strict';

  var app = angular.module('ShoppingListCheckOff');
  app.controller('ToBuyController', ToBuyController);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
      var toBuy = this;

      toBuy.shoppingList = ShoppingListCheckOffService.getShoppingList();

      toBuy.buyItem = function(index) {
         ShoppingListCheckOffService.buyItem(index);
      }

      toBuy.isEverythingBought = function() {
         return toBuy.shoppingList.length === 0;
      }
  }

})();