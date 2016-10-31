app.controller("homeController",["$scope","$css",function($scope,$css){	
	// // 自己的服务 homeService 不加$ 符号
	// // 需要在controller 之前引入！！！！
	// $scope.name = "admin",
	$css.add("public/css/home.css")
	// homeService.buy().success(function(res){
	// 	$scope.items=res
	// 	// 因为是异步请求！！！！
	// 	// 必须写 在 里面！！！
	// 	for(var i=0;i < $scope.items.length;i++){
	// 		$scope.items[i].num=0
	// 		// $scope.items[i].id=i
	// 	}	
	// })

	// $scope.addnum=function(item){
	// 	item.num+=1
	// 	console.log(item.num)
	// }

	// // 这是给 footer 添加的点击事件 当跳转到购物车的时候储存数据！
	// $scope.all = [];
	// $scope.add_car=function(){
	// 	// 遍历数组！自己 num 大于0 存到数组！
	// 	for(var i=0;i < $scope.items.length;i++){
	// 		if($scope.items[i].num>0){
	// 			$scope.all.push($scope.items[i])
	// 		}
	// 	}	
	// 	alert("ok")
	// 	console.log($scope.all)	
	// }



}])

// app.controller("homeController",["$scope","$css","$http",function($scope,$css,$http){	
// 	$scope.name = "admin",
// 	$css.add("public/css/home.css")
// 	$http.get("data/home-banner-1.json").success(function(res){
// 		$scope.items = res;
// 		for(each of $scope.items){
// 			console.log(each.imgUrl)
// 		}
// 	})
// }])