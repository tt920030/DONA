$(function(){
    $(".bar").click(function(){
        $(".right li:first").toggleClass("js-open");
        $("nav").toggleClass("js-open");
        $(".footer-right ol > .social").toggleClass("js-open");
        $(".js-bg").css({display: "block"});
        $(".menu-bg").toggleClass("js-open");
    });

    $(".menu-bg").click(function(){
        $(".right li:first").removeClass("js-open");
        $("nav").removeClass("js-open");
        $(".footer-right ol > .social").removeClass("js-open");
        $(".js-bg").css({display: "none"});
        $(".menu-bg").removeClass("js-open");
    });
});