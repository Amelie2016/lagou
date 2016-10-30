app.directive("tabbarDirective", function () {
    return {
        templateUrl: './tab-bar.html',
        controller: function ($scope, $css) {
            $css.add('./tab-bar.css');
            $scope.haha = 'haha';
        }
    };
});
