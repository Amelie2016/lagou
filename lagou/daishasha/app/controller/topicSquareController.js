angular.module("lagou")
.controller('topicSquareController',['$scope','topicSquareService','$css',function($scope,topicSquareService,$css){
		// tab插件
		// console.log($css);
		// $css.add("public/css/jquery.tab.css");
		console.log(tab);
		$("#tab3").tab({
			animation : true,
			width : 200,
			height : 50,
			tipsPosition : "bottom",
			callback : function(index,text) {
				console.log(1);
				console.log(index,text);
			}
		});	

	topicSquareService().success(function(res){
		// 获取数据
		$scope.proList = res;
		// console.log(res);

	})
}])












