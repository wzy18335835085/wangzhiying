$(function(){
    $(window).resize(function() {
        if ($(window).width()<=736) {
            $(".header1").css("display", "none");
            $(".header2").css("display", "block");
            $(".footer1").css("display", "none");
            $(".footer2").css("display", "block");
        } else {
            $(".header1").css("display", "block");
            $(".header2").css("display", "none");
            $(".footer1").css("display", "block");
            $(".footer2").css("display", "none");
        }
    });
    $(window).resize();

    $(".cent-l").click(function(){
        $(window).finish();
        $(".menu").slideToggle(200);
    })
    $(".menu-title").click(function(){
        $(window).finish();
        $(this).children(".menu-con").slideToggle(200);
        $(".menu-title").css("font-weight","normal");
        $(this).css("font-weight","bold");
        $(".menu-con").css("font-weight","normal");
    })
    var num=0;
    setInterval(function(){
        num++;
        if(num==$(".lists").length-1){
            $(".banner").css({marginLeft:0});
            num=1;
        }else{
            $(".banner").animate({marginLeft:(-num)*100+"%"});
        }

    },3000);





    //----------------------------------------------
    var mLeft;
    touch.on(document,"dragstart",function(e){
        mLeft=$(".banner")[0].offsetLeft;
    })
    touch.on(document,"drag",function(e){
            $(".banner:eq(0)").css({marginLeft:mLeft+ e.x});

    })
    touch.on(document,"dragend",function(e){
        if(e.x>200 || e.factor<5){
            num++;
            $(".banner:eq(0)").css({marginLeft:(mLeft+num)*100+"%"});
        }

    })
    $(".banner").mousedown(function(e){
        e.preventDefault();
    })

});