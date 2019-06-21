(function(){
   'use strict';

   var app = angular.module('NarrowItDownApp');
   app.service('MenuSearchService',MenuSearchService);
   app.constant('apiUrl', "https://davids-restaurant.herokuapp.com/")

   MenuSearchService.inject = ['$http', '$q', 'apiUrl'];
   function MenuSearchService($http, $q, apiUrl) {
      var searchService = this;

      searchService.getAllMenuItems = function() {
         return $http({
            method:"GET",
            url: (apiUrl + "menu_items.json"),
            cache: true 
         });
      }
   }
})();