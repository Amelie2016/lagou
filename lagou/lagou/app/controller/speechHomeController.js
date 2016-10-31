angular.module("lagou")
.controller("speechHomeController",["$scope","speechHomeService",function($scope,speechHomeService){
     speechHomeService().success(function (res) {
          // 获取商品列表里的数据
           // $scope.imgList = res;
           // console.log(res);
     })
}])