var app = angular.module("lagou",["ngRoute","angularCSS"]);
app.config(["$routeProvider",function ($routeProvider) {
   $routeProvider
   .when("/homePage",{
		templateUrl:"view/homePage.html",
		controller:"homeController",
		css:["public/css/swiper-3.3.1.min.css","public/css/homePage.css"]
	})
   .otherwise({
       	redirectTo: '/homePage'
    });
}])