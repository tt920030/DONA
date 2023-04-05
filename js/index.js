$(function(){
    $(".bar").click(function(){
        $("header").toggleClass("pink");
    });

    $(".menu-bg").click(function(){
        $("header").toggleClass("pink");
    });

    $(".line1").hover(
        function(){
            $(".comb").animate({backgroundPosition: "0px"});
        },
        function(){
            // $(".comb").animate({backgroundPosition: "0px"});
        }
    );

    $(".line2").hover(
        function(){
            $(".comb").animate({backgroundPosition: "-1200px"});
        },
        function(){
            // $(".comb").animate({backgroundPosition: "0px"});
        }
    );

    $(".product-sub li").hover(
        
        function(){
            let change_pic = $(this).find(".list img").attr("src");
            let change_title = $(this).find(".product-text h3").text();
            $(".big-picture img").attr("src",change_pic);
            $(".photo-text h2").text(change_title);
        },
        function(){
            $(".big-picture img").attr("src","img/element/choco.jpg");
            $(".photo-text h2").text("巧克碎片甜甜圈");
        }
    );
});