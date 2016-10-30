app.controller("homeCtrl", ['$scope', '$css', function ($scope, $css) {
    $css.removeAll();
    $css.add('./tab-bar.css');
    $css.add('./home/css/home.css');
    $scope.name = "哈哈";
}]);
