"use strict";

/* Module */

var homeModule = angular.module("homeModule",[]);

/* Config */

/* Controller */

homeModule.controller("HomeCtrl", ["$scope","$http",function($scope,$http) {
	$scope.cart = [];
	var jsonString = 
					'{"items": [{"name": "Red Hat Thermos","price": 14.95},\
								{"name": "Red Hat Golf Polo","price": 55.95},\
								{"name": "Paper Weight","price": 6.95},\
								{"name": "Swag Bag","price": 25.00}]}';

  	var itemData=JSON.parse(jsonString);
  	$scope.items=itemData.items;

  	$scope.addToCart = function(item){
  		if($scope.cart.indexOf(item)==-1){
  			$scope.cart.push(item);
  		}
  		
  	}
  	$scope.removeFromCart = function(item){
  		var i = $scope.cart.indexOf(item);
  		if (i > -1) {
    		$scope.cart.splice(i, 1);
		}
  	}

}]);



