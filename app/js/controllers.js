'use strict';

/* Controllers */

var productsControllers = angular.module('productsControllers', []);

productsControllers.controller('ProductsListCtrl', ['$scope', '$http', function($scope, $http){
   $http.get('phones/products.json').success(function(data){

        $scope.products = data;
    });
   }
   /* function($scope, Phone) {
      $scope.phones = Phone.query();
      $scope.orderProp = 'age';
    }*/
   

  ]);

productsControllers.controller('ProductsDetailCtrl', ['$scope', '$routeParams', '$c',
  function($scope, $routeParams, $http) {
  /*  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }*/
  }

  ]);

productsControllers.controller('ProductsHistoryCtrl', ['$scope', '$routeParams', '$c',
  function($scope, $routeParams, $http) {
  /*  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }*/
  }

  ]);
