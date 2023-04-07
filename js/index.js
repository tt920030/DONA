$(function () {
    // console.log($(window).scrollTop());

    // 判斷重整時在哪個位置,header是否變色
    (function () {
        let top = $(window).scrollTop();
        let target = $(".bg-words").offset().top;

        // console.log(top - target);
        if (top - target > 0) {
            $("header").addClass("pink");
            $("header").removeClass("-banner");

        } else {

            $("header").removeClass("pink");
            $("header").addClass("-banner");
        }
    })();


    // 超過banner之後，header變色
    $(window).scroll(function () {
        // console.log($(this).scrollTop());
        let top = $(this).scrollTop();
        let target = $(".bg-words").offset().top;

        // console.log(top - target);
        if (top - target > 0) {
            $("header").addClass("pink");
            $("header").removeClass("-banner");

        } else {

            $("header").removeClass("pink");
            $("header").addClass("-banner");
        }

    });


    // 按其他地方header變色
    $(".menu-bg").click(function () {
        let is_banner = $("header").hasClass('-banner');

        if (is_banner === true) {
            $("header").toggleClass("pink");
        }

    });

    // 按漢堡地方header變色
    $(".bar").click(function () {
        let is_banner = $("header").hasClass('-banner');
        // console.log(is_banner);

        if (is_banner === true) {
            $("header").toggleClass("pink");
        }

    });


    // 移動塔塔背景
    $(".line1").hover(
        function () {
            $(".comb").animate({ backgroundPosition: "0px" });
        },
        function () {
            // $(".comb").animate({backgroundPosition: "0px"});
        }
    );

    $(".line2").hover(
        function () {
            $(".comb").animate({ backgroundPosition: "-1200px" });
        },
        function () {
            // $(".comb").animate({backgroundPosition: "0px"});
        }
    );


    // 換甜甜圈資訊
    $(".product-sub li").hover(

        function () {
            let change_pic = $(this).find(".list img").attr("src");
            let change_title = $(this).find(".product-text h3").text();
            $(".big-picture img").attr("src", change_pic);
            $(".photo-text h2").text(change_title);


            $.get("../json/product.json", function (data) {

                $.each(data, function (index, item) {
                    if (change_title === item.name) {
                        $(".photo-text p").text(item.info);
                    }
                });
            });
        },
        function () {
            $(".big-picture img").attr("src", "img/element/choco.jpg");
            $(".photo-text h2").text("巧克碎片甜甜圈");
            $(".photo-text p").text("酥脆的巧克力碎片搭上絲滑如順的巧克力醬，形成了口感豐富、層次鮮明的味道，讓人上癮。每一口都能感受到碎片在口中破裂的聲音，並且感受到醬在嘴裡化開的滑順口感。");
        }
    );



});