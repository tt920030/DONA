$(function () {
    (function () {
        if ($(this).width() < 428) {
            $(".shop-img img").attr("src", "../img/shop/shop-small.jpg");
        }
    })();



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

    $(".bar").click(function () {
        $(".right li:first").toggleClass("js-open");
        $("nav").toggleClass("js-open");
        $(".footer-right ol > .social").toggleClass("js-open");
        $(".js-bg").css({ display: "block" });
        $(".menu-bg").toggleClass("js-open");
    });

    $(".menu-bg").click(function () {
        $(".right li:first").removeClass("js-open");
        $("nav").removeClass("js-open");
        $(".footer-right ol > .social").removeClass("js-open");
        $(".js-bg").css({ display: "none" });
        $(".menu-bg").removeClass("js-open");
    });


});