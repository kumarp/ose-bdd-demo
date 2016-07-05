'use strict';

/* Bootstrapping app's modules */

var app = angular.module('coolstoreApp', [
	'homeModule',
	'ngRoute',
	'kie.server.service'
]);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl',
			controllerAs: 'homeCtrl'
		});
}])
