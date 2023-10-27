$(function () {

    // 商店圖片在 428px 換成小圖
    // (function () {
    //     if ($(window).width() < 428) {
    //         $(".shop-img img").attr("src", "https://tt920030.github.io/DONA/img/shop/shop-small.jpg");
    //     }
    // })();


    // 打開子選單
    let is_open = false;

    $(".left > li > a:first").click(function (e) {
        e.preventDefault();

        if (is_open === false) {
            $(".select").slideDown();
            $(".left > li:first-child").addClass('-open');
            $(".footer-right ol>.social").addClass('-open');
            is_open = true;
        } else {
            $(".select").slideUp();
            $(".left > li:first-child").removeClass('-open');
            $(".footer-right ol>.social").removeClass('-open');
            is_open = false;
        }

    });


    // 按漢堡條打開MENU
    $(".bar").click(function () {
        $(".right li:first").toggleClass("js-open");
        $("nav").toggleClass("js-open");
        $(".footer-right ol > .social").toggleClass("js-open");
        $(".js-bg").css({ display: "block" });
        $(".menu-bg").toggleClass("js-open");
    });


    // 按其他地方條打開MENU 
    $(".menu-bg").click(function () {
        $(".right li:first").removeClass("js-open");
        $("nav").removeClass("js-open");
        $(".footer-right ol > .social").removeClass("js-open");
        $(".js-bg").css({ display: "none" });
        $(".menu-bg").removeClass("js-open");
    });

    // 購物車數字出現
    function cartNumber() {

        let local = JSON.parse(localStorage.getItem("cart"));


        if (local === null || local.length === 0) {

        } else {

            $(".right p").css({ display: "flex" });

            let num = 0;
            $(local).each(function (index, item) {
                num = Number(num) + Number(item.number);
                // console.log(num);
            });

            $(".right p span").text(num);
        }
    }
    cartNumber();

    // 訂閱
    $(".email input[type='submit']").click(function (e) {

        let send_data = true;

        if ($("#subscribe").val() === "" || is.email($("#subscribe").val()) === false) {
            alert("email格式錯誤");
            send_data = false;
        } else {
            alert("註冊成功!");
        }

        if (!send_data) {
            e.preventDefault();
        }
    });

    // header上縮
    let lastScrollY = 0;


    $(window).scroll(function (e) {
        let current = $(window).scrollTop();

        if ($(this).width() > 1200) {
            if (current > lastScrollY) {
                $("header").slideUp();

            } else {
                $("header").slideDown();


            }

            lastScrollY = current;
        }


    });

    



});