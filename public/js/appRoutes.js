angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/add', {
			templateUrl: 'views/add.html',
			controller: 'AddController'
		})

		.when('/delete', {
			templateUrl: 'views/delete.html',
			controller: 'DeleteController'	
		})
		.when('/view', {
			templateUrl: 'views/view.html',
			controller: 'ViewController'	
		});

	$locationProvider.html5Mode(true);

}]);