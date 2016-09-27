angular.module('sportsProgram.calendar', [])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/calendar', {
			templateUrl: '/calendar/calendar.html',
			controller: 'CalendarCtrl'
		})
	}])
	.controller('CalendarCtrl', ['$scope', 
		function ($scope) {
			
		}]);