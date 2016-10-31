var app = angular.module("lagou",["ui.router","angularCSS"])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("homePage");
	$stateProvider.state("homePage",{
		    url : "/homePage",
            templateUrl:"view/homePage.html",
		    controller:"homeController",
		    css:["public/css/homePage.css"]
        })
        .state("message",{
            url : "/message",
            templateUrl:"view/message.html",
		    controller:"messageController",
		    css:["public/css/message.css"]
        })
        .state("speechHome",{
            url : "/speechHome",
            templateUrl:"view/speechHome.html",
		    controller:"speechHomeController",
		    css:["public/css/speechHome.css"]
        })
        .state("mine",{
            url : "/mine",
            templateUrl:"view/mine.html",
		    controller:"mineController",
		    css:["public/css/mine.css"]
        })
})