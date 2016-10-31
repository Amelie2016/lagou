angular.module("lagou")
.controller("swiperController",["$scope","swiperService",function ($scope,swiperService) {
	swiperService().success(function (res) {
        	console.log(res);
        	$scope.list = res;
        }).error(function (msg){
                                
        })
}])