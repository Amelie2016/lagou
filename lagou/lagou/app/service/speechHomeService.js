angular.module("lagou")
.service("speechHomeService",["$http",function ($http) {
	 return speechHomeService = function (){
		return $http.get("data/speechHome.json");
	}
}])