// app.directive("myFooter",function(){
// 	return{
// 		templateUrl:"footer.html"
// 	}
// })

app.directive("myFooter",function(){
	return{
		controller:"footerController",	
		templateUrl:"app/directive/footer/footer.html"

		// 路径的问题 默认路径index.html
	}
})


