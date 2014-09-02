'use strict';

/* Controllers */

var productsControllers = angular.module('productsControllers', ['ngGrid']);

productsControllers.controller('ProductsListCtrl', ['$scope', '$http', function($scope, $http){

   $scope.products =[];
   $http.get('phones/products.json').success(function(data){

        $scope.products = data;

    });
   $scope.gridOptions = {
    data: 'products',
    columnDefs: [
    { field: 'imageUrl', width: 80, displayName: 'Image', cellTemplate: '<img ng-src="{{ row.getProperty(col.field) }}">'},
    { field: 'id', width: 40, displayName: 'Id'},
    { field: 'name', width: 260, displayName: 'Name'},
    { field: 'snippet', width: 420, displayName: 'Snippet'},
    { field: 'price', width: 60, displayName: 'Price'},
    { field: 'qty', width: 60, displayName: 'Qty'}

    ]
  };


   }

  ]);

productsControllers.controller('ProductsDetailCtrl', ['$scope', '$routeParams', '$c',
  function($scope, $routeParams, $http) {
  
  }

  ]);

productsControllers.controller('ProductsHistoryCtrl', ['$scope', '$routeParams', '$c',
  function($scope, $routeParams, $http) {
 
  }

  ]);
