(function(){
  'use strict';

  var app = angular.module('ShoppingListCheckOff');
  app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  function ShoppingListCheckOffService(){
     var service = this;

     var shoppingList = [
        {name:"Apple", quantity:500},
        {name:"Kale", quantity:2},
        {name:"Candy Bar", quantity:3},
        {name:"Tuna", quantity:5},
        {name:"Raw Meat", quantity:2},
        {name:"Peanuts", quantity:1},
        {name:"Pasta", quantity:3},
        {name:"Salt", quantity:2},
     ];

     var boughtList = [];

     service.getShoppingList = function() {
        return shoppingList;
     }

     service.getBoughtList = function() {
        return boughtList;
     }

     service.buyItem = function(index) {
         var item = shoppingList.splice(index, 1)[0];
         boughtList.push(item);
     }

     service.sellItem = function(index) {
         var item = boughtList.splice(index, 1)[0];
         shoppingList.push(item);
     }
  }

})();