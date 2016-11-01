angular.module("lagou")
.controller('topicSquareController',['$scope','topicSquareService',function($scope,topicSquareService){
	// 点击事件
	$scope.isCurrent = function(index){
		// console.log(index);
		$scope.bg = [];
		$scope.bg[index] = 'current';

	}
	
	// 页面加载获取数据
	topicSquareService().success(function(res){
		$scope.proList = res;
		console.log(res);
	})



	// 点击关注
	$scope.addFocus = function (item) {
		var state = false;// 定义状态位,
		// 如果商品已经关注，则不再可点击
		for(var i = 0;i<$scope.result.length;i++){
			if(item == $scope.result[i]){
				state = true;//说明已经关注
			}
		}
		// 如果值没有改变则存储进去
		if(!state){
			// 点击关注后存储在全局变量中
			$scope.result.push(item);
			
			item.hasConcerned = true;

			console.log(item.hasConcerned);
		}
	}
			
}])












