// 获取AngularJS程序
var app = angular.module("myApp", ['ngRoute', 'angularCSS']);

// 写路由
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: './home/html/home.html',
        controller: 'homeCtrl'
    })
    .when('/mine', {
        templateUrl: './mine/html/mine.html',
        controller: 'mineCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
