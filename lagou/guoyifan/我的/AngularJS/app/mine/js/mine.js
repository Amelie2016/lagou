app.controller("mineCtrl", ['$scope', '$css', function ($scope, $css) {
    $css.removeAll();
    $css.add('./mine/css/mine.css');
    $scope.ages = [12, 23, 345, 7, 54, 34, 8, 54];
}]);
