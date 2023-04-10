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

    // 手機板加上第四個甜甜圈
    (function () {
        if ($(window).width() < 428) {
            $(".product-sub ul").append(`
                <li>
                    <div class="list list-2">
                        <img src="img/products/product7.png" alt="">
                    </div>
                    <div class="product-text">
                        <h3>黑巧克甜甜圈</h3>
                        <p>$60</p>
                    </div>
                </li>
             `);
        }
    })();

    // 換甜甜圈資訊
    (function () {
        if ($(window).width() >= 1200) {
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
                    $(".big-picture img").attr("src", "img/products/product7.png");
                    $(".photo-text h2").text("黑巧克甜甜圈");
                    $(".photo-text p").text("黑巧克甜甜圈是一款結合了香濃黑巧克力與鬆軟甜甜圈口感的美食。它外皮金黃鬆軟，內部則是豐富的黑巧克力香氣和口感，入口即化，令人回味無窮。黑巧克甜甜圈不僅適合當做早餐或下午茶點心，也是一款完美的甜點選擇。");
                }
            );
        } else {
            $(".product-sub li").click(

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
                }
            );
        }

    })();



});

$(window).on("load", function () {
    // 輪播
    let slideIndex = 0;
    // showSlides();

    function showSlides() {

        $(".mySlides").css({ display: "none" });
        slideIndex++;

        if (slideIndex > $(".mySlides").length) {
            slideIndex = 1;
        }

        // if (n < 1) {
        //     slideIndex = $(".mySlides").length;
        // }

        // console.log(slideIndex);
        $(".mySlides").eq(slideIndex - 1).css({ display: "block" });

        $(".dot").removeClass("-active");
        $(".dot").eq(slideIndex - 1).addClass("-active");

        // setTimeout(showSlides, 6000);

    }

    let slides;

    function start() {
        slides = setInterval(function () {
            showSlides();
        }, 4000);
    }

    start();

    function change(n) {
        
        clearInterval(slides);
        slideIndex = n;
        start();
    }

    $(".dot1").click(function () {
        
        change(0);

    });

    $(".dot2").click(function () {
        change(1);

    });

    $(".dot3").click(function () {
        change(2);

    });
});