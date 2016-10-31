	var app = angular.module("myApp",["ngRoute","angularCSS"])
	app.config(["$routeProvider",function($routeProvider){
		$routeProvider
		.when("/",{
			templateUrl:"view/home.html",
			controller:"homeController"
		})
		.when("/zhuanti",{
			templateUrl:"view/zhuanti.html",
			controller:"zhuantiController"
		})
		.when("/video",{
			templateUrl:"view/video.html",
			// controller:"videoController"
		})
		.when("/car",{
			controller:"carController",		
			templateUrl:"view/car.html"

		})
		.when("/mine",{
			templateUrl:"view/mine.html",
			// controller:"mineController"
		})
		.otherwise({
       		redirectTo: '/'
   		 });
	}])







	app.controller("indexController",["$scope","$css",'homeService',function($scope,$css,homeService){	
	// 自己的服务 homeService 不加$ 符号
	// 需要在controller 之前引入！！！！

	homeService.buy().success(function(res){
		$scope.items=res
		// 因为是异步请求！！！！
		// 必须写 在 里面！！！
		for(var i=0;i < $scope.items.length;i++){
			$scope.items[i].num=0
		}	
	})

	$scope.addnum=function(item){
		item.num+=1
		console.log(item.num)
	}

	// 这是给 footer 添加的点击事件 当跳转到购物车的时候储存数据！

	// $scope.all_ = [];
	// $scope.add_car=function(){
	// 	$scope.all=[]	
	// 	// 遍历数组！自己 num 大于0 存到数组！
	// 	for(var i=0;i < $scope.items.length;i++){
	// 		if($scope.items[i].num>0){
	// 			$scope.all_.push($scope.items[i])
	// 		}
	// 	}
	// 	for(each of $scope.all_){
	// 		if($scope.all.indexOf(each)==-1){
	// 			$scope.all.push(each)
	// 		}
	// 	}

	// 	console.log($scope.all)	
	// }



}])
