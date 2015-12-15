// ROUTES
weatherApp.config(['$routeProvider', function($routeProvider){
	
	$routeProvider
		
		.when('/', {
			templateUrl: 'pages/home.htm',
			controller: 'homeController'
		})
	
		.when('/weather', {
			templateUrl: 'pages/weather.htm',
			controller: 'weatherController'
		})
	
}]);