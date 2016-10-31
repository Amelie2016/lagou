app.service('homeService', ['$http', function($http) {

	this.buy = function(){
		return $http.get("data/home-bottom.json");
	}

}])