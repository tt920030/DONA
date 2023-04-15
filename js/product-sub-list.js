$(function () {

    // 商品頁
    (function () {
        let no = $(".main").attr("data-no");

        $.get("https://tt920030.github.io/DONA/json/product.json", function (data) {
            $(data).each(function (index, item) {
                if (item.no === no) {
                    $(".main").html("");
                    $(".main").append(`
                    <div class="picture">
                        <div class="container">
                            <img src="img/products/product${no}.png" alt="">
                        </div>

                    </div>
                    <div class="detail">
                        <div class="block">
                            <h1>${item.name}</h1>
                            <p>$${item.price}</p>
                            <ul>
                                <li id="minus">
                                    <i class="fa-solid fa-minus"></i>
                                </li>
                                <li class="num">1</li>
                                <li id="plus">
                                    <i class="fa-solid fa-plus"></i>
                                </li>
                            </ul>
                            <button>加入購物車</button>
                        </div>

                        <div class="text">
                            <p>${item.info}</p>
                        </div>
                        
                        <table>
                            <thead>
                                <tr>
                                    <td colspan="2">營養成分</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>熱量</td>
                                    <td class="text-right">111大卡</td>
                                </tr>
                                <tr>
                                    <td>蛋白質</td>
                                    <td class="text-right">1.0公克</td>
                                </tr>
                                <tr>
                                    <td>脂肪</td>
                                    <td class="text-right">5.0公克</td>
                                </tr>
                                <tr>
                                    <td class="sub">飽和脂肪</td>
                                    <td class="text-right">2.4公克</td>
                                </tr>
                                <tr>
                                    <td class="sub">反式脂肪</td>
                                    <td class="text-right">0公克</td>
                                </tr>
                                <tr>
                                    <td>碳水化合物</td>
                                    <td class="text-right">15.5公克</td>
                                </tr>
                                <tr>
                                    <td class="sub">糖</td>
                                    <td class="text-right">6.5公克</td>
                                </tr>
                                <tr>
                                    <td>鈉</td>
                                    <td class="text-right">27毫克</td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                    `);
                }
            });
        });

        // 商品數量加一
        let num = 1;
        $(".main").on("click", "#plus",function () {
            num++;
            $(".num").text(num);
        });

        $(".main").on("click", "#minus",function () {

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

                if (move < -1245) {
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


    })();



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