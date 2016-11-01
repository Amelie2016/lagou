var app = angular.module("lagou",["ui.router","angularCSS"])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("topicSquare");
	$stateProvider
		// .state("homePage",{
		//     url : "/homePage",
  //           templateUrl:"view/homePage.html",
		//     controller:"homeController",
		//     css:["public/css/homePage.css"]
  //       })
  //       .state("message",{
  //           url : "/message",
  //           templateUrl:"view/message.html",
		//     controller:"messageController",
		//     css:["public/css/message.css"]
  //       })
  //       .state("message",{
  //           url : "/message",
  //           templateUrl:"view/message.html",
		//     controller:"messageController",
		//     css:["public/css/message.css"]
  //       })



// 戴莎莎跳转
        .state("topicSquare",{
			url : "/topicSquare",
			templateUrl : "view/topicSquare.html",
			controller : "topicSquareController",
			css:["public/css/topicSquare.css","public/css/jquery.tab.css"]
		})
		// .state("myTopicSquare",{
		// 	url : "/myTopicSquare",
		// 	templateUrl : "view/myTopicSquare.html",
		// 	// controller :"myTopicSquareController",
		// 	css:["public/css/myTopicSquare.css"]
		// })
		// .state("askAQuestion",{
		// 	url : "/askAQuestion",
		// 	templateUrl : "view/askAQuestion.html",
		// 	// controller : "askAQuestionController",
		// 	css:["public/css/askAQuestion.css"]
		// })
		// .state("setting",{
		// 	url : "/setting",
		// 	templateUrl : "view/setting.html",
		// 	// controller : "settingController",
		// 	css:["public/css/setting.css"]
		// })

})
