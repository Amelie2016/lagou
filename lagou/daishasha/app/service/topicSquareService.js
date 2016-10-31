angular.module("lagou")
.service("topicSquareService",["$http",function ($http) {
	 return topicSquareService = function (){
		return $http.get("data/all_topic.json");
	}
}])
