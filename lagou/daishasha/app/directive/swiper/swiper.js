angular.module("lagou")
.directive("mySwiper",function(){
    return{
        controller:"swiperController",
        templateUrl:"app/directive/swiper/swiper.html",
        css:["public/css/swipper.css","public/css/swiper-3.3.1.min.css"]
    }
})