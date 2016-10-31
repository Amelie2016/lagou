angular.module("lagou")
.controller("homeController",["$scope","homePageService",function($scope,homePageService){
     homePageService().success(function (res) {
     	// 获取商品列表里的数据
           $scope.companyList = res.result;
     })
     $scope.headerClass = "";
     document.getElementsByClassName('homePage')[0].onscroll = function () {
     	if(document.getElementsByClassName('homePage')[0].scrollTop >= 50) {
     		if($scope.headerClass == ""){
     			$scope.headerClass = "headerActive";
     			 $scope.$apply();
     		}
     	}else{
     		if($scope.headerClass == "headerActive"){
     			$scope.headerClass = "";
     			 $scope.$apply();
     		}
     	}
     }
}])