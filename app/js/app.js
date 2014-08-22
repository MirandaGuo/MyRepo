'use strict';

/* App Module */

var prodApp = angular.module('prodApp', [
  'ngRoute',
  'phonecatAnimations',

  'productsControllers',
  'phonecatFilters',
  'phonecatServices'
]);

prodApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/products', {
        templateUrl: 'partials/product_list.html',
        controller: 'ProductsListCtrl'
      }).
      when('/history',{
        templateUrl: 'partials/product_detail.html',
        controller: 'ProductsDetailCtrl'
      })
      .when('/products/:phoneId', {
        templateUrl: 'partials/product_detail.html',
        controller: 'ProductsDetailCtrl'
      }).
      otherwise({
        redirectTo: '/products'
      });
  }]);
