// SERVICES
weatherApp.service('locationService', function(){	
	
	this.city;	
	
	this.setCity = function(newCity){	
		this.city = newCity;	
	}	
	
	this.getCity = function(){	
		return this.city;	
	}	
	
});

weatherApp.service('weatherService', [ '$resource', function($resource){
	
	this.GetCurrentWeather = function(city){
		
		var currentWeatherAPI = $resource(
			'http://api.openweathermap.org/data/2.5/weather', { callback: "JSON_CALLBACK" }, {get: { method: "JSONP" }}
		);

		return currentWeatherAPI.get({
			q: city, appid: '1fa52f4a650a3c04900779e3d76448f4', units:'imperial'
		});		
		
	}
	
	this.GetForecast = function(city){
		
		var weatherForecastAPI = $resource(
			'http://api.openweathermap.org/data/2.5/forecast/daily', 
			{ callback: "JSON_CALLBACK" }, {get: { method: "JSONP" }}
		);

		return weatherForecastAPI.get({
			q: city, cnt: 7, appid: '1fa52f4a650a3c04900779e3d76448f4', units:'imperial'
		});
		
	}	
	
}]);

weatherApp.service('unitConversionService', [function(){
	
	this.roundTemp = function(temp){
		return Math.round(temp);
	}
	
	this.convertToDate = function(dt){
		return new Date(dt * 1000);
	}
	
}]);



