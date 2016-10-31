app.controller("carController",["$scope","$css",function($scope,$css){	

	$css.add("public/css/car.css")

		$scope.all = []
		for(var i=0;i < $scope.items.length;i++){
			if($scope.items[i].num>0){
				$scope.all.push($scope.items[i])
			}
		}



	$scope.items = $scope.all
	// console.log($scope.items,"1111111111111")
	$scope.add_num=function(item){
		item.num+=1
	}
	$scope.dec_num=function(item){
		item.num-=1
	}


}])
