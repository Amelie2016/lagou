$(function(){
//获取首页轮播图，菜单数据
$.ajax({
    url: "../json/speechHome.json",
    type: "get",
    // dataType: "json",
    success: function(res){
        swiper(res);
    }
})

// 轮播图函数
    function swiper(res){
        //创建容器
        for (var j = 0; j < 2; j++) {
           var div=$("<div class='swiper-slide'/>" ).appendTo($(".swiper-wrapper"));
           for(var i=0;i<res.length;i++){
            var div1 =$("<div class='swiper-div'/>" ).appendTo($(div));
                $("<img/>" ).attr({
                    src: res[i ].img
                } ).addClass("f").appendTo($(div1));
                $("<p/>").html(res[i].name).appendTo($(div1));
            }
        }
        // 第三页
         var div=$("<div class='swiper-slide'/>" ).appendTo($(".swiper-wrapper"));
           for(var i=0;i<3;i++){
            var div1 =$("<div class='swiper-div'/>" ).appendTo($(div));
                $("<img/>" ).attr({
                    src: res[i ].img
                } ).appendTo($(div1));
                $("<p/>").html(res[i].name).appendTo($(div1));
            }
        //利用swiper让图片动起来
        var mySwiper = new Swiper('.swiper-container',{
            // 如果需要分页器
            pagination: '.swiper-pagination',
        })
        // 图片的点击事件
        $("swiper-slide").on()
        $(".swiper-div").click(function(){
            if ($(this).children("img").hasClass("f")) {
                $(this).children("img").removeClass("f").attr({
                    src: res[$(this).index()].imgClick
                } )
            }else{
                $(this).children("img").addClass("f").attr({
                    src: res[$(this).index()].img
                } )
            }
            
        })
    }
});