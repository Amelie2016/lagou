angular.module("lagou")
.directive("myFooter",function(){
    return{
        controller:"footerController",
        templateUrl:"app/directive/footer/footer.html",
        css:["public/css/footer.css"]
    }
})
