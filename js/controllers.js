// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'locationService', function($scope, locationService){
	
	$scope.searchTerm;
	
	// Set container class to .container-home
	$scope.currentPage = 'home';
	
	// Pressing the Enter key fires the Get Weather button
	document.getElementById('searchField').onkeypress=function(e){
		if(e.keyCode==13){
			document.getElementById('getWeatherBtn').click();
		}
	}
	
	// Set the global city variable to the entered search term, proceed to weather page
	$scope.onGetWeatherClick = function(){
		locationService.setCity($scope.searchTerm);
		window.location.hash = '#/weather';
	}
	
}]);

weatherApp.controller('weatherController', ['$scope', 'weatherService', 'locationService', 'unitConversionService', function($scope, weatherService, locationService, unitConversionService){
	
	// Set container class to .container-weathers
	$scope.currentPage = 'weather';
	
	$scope.city = locationService.getCity();
	
	if($scope.city == null){
		window.location.hash = '#/';
	}
	
	$scope.currentWeatherResult = weatherService.GetCurrentWeather($scope.city);
	$scope.weatherForecastResult = weatherService.GetForecast($scope.city);
	
	// Unit conversions
	$scope.roundTemp = function(temp){
		return unitConversionService.roundTemp(temp);
	}
	
	$scope.convertToDate = function(dt){
		return unitConversionService.convertToDate(dt);
	}
	
}]);