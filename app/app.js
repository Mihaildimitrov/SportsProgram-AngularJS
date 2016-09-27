'use strict';

angular.module('sportsProgram', [
	'ngRoute',
	'sportsProgram.calendar'
	])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/'});
	}]);