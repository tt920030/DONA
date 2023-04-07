$(function () {
    $(".next-page ul li a").click(function (e) {
        e.preventDefault();

    });

    $(".next-page ul li").click(function () {
        $(".next-page ul li a").removeClass("-on");
        $(this).find("a").addClass("-on");
    });
});