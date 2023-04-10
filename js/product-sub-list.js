$(function () {

    // 商品數量加一
    let num = 1;
    $("#plus").click(function () {
        num++;
        $(".num").text(num);
    });

    $("#minus").click(function () {

        if (num == 1) {

        } else {
            num--;
            $(".num").text(num);
        }

    });

    // 商品列左右移
    let move = 0;
    $("#right").click(function () {

        if ($(window).width() < 428) {
            move -= 240;

            if (move < -960) {
                move += 240;
            } else {
                $("section ul").animate({ translate: move });
            }
        } else {
            move -= 415;

            if (move < -1660) {
                move += 415;
            } else {
                $("section ul").animate({ translate: move });
            }
        }


    });
    $("#left").click(function () {
        if ($(window).width() < 428) {
            move += 240;
            if (move > 0) {
                move -= 240;
            } else {
                $("section ul").animate({ translate: move });
            }
        } else {
            move += 415;
            if (move > 0) {
                move -= 415;
            } else {
                $("section ul").animate({ translate: move });
            }
        }



    });

    // 商品列左右拖動
    // let swipe = document.getElementsByClassName("swipe")[0];
    // let t_move = 0;
    // let t_start = 0;




    // swipe.addEventListener("touchstart", function (e) {
    //     t_start = e.touches[0].clientX;
    //     // console.log(t_start);

    //     swipe.addEventListener("touchmove", function (e) {
    //         t_move = e.touches[0].clientX;
    //         // console.log(t_move);

    //         let dis = t_move - t_start;
    //         console.log(dis);

    //         if (dis > 0) {
    //             move++
    //             $("section ul").animate({ translate: move });
    //         } else {
    //             move--
    //             $("section ul").animate({ translate: move });
    //         }

    //     });
    // });
});