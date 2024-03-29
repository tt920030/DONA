$(function () {

    // 換頁

    // $(".next-page ul li").click(function () {
    //     $(".next-page ul li a").removeClass("-on");
    //     $(this).find("a").addClass("-on");
    // });

    // 載入商品
    (function () {
        $.get("https://tt920030.github.io/DONA/json/product.json", function (data) {
            $(data).each(function (index, item) {

                
                    $(".container ul").append(`
                    <li data-no="${item.no}">
                        <a href="product-sub-list${item.no}.html">
                            <div class="bg" >
                                <div class="picture">
                                    <img src="${item.picture}" alt="">
                                </div>
                            </div>
                            
                            
                            <h2>${item.name}</h2>
                            <p>$${item.price}</p>
                        </a>
                    </li>
                    `);
                


            });
        });
    })();

    // 篩選
    $("#product-list").change(function () {
        let type = $(this).find("option:selected").text();
        $(".container ul").html("");

        if (type === "所有商品") {
            $.get("https://tt920030.github.io/DONA/json/product.json", function (data) {
                $(data).each(function (index, item) {

                    if (index) {
                        $(".container ul").append(`
                        <li data-no="${item.no}">
                            <a href="product-sub-list${item.no}.html">
                                <div class="bg">
                                    <div class="picture">
                                        <img src="${item.picture}" alt="">
                                    </div>
                                </div>
                                
                                
                                <h2>${item.name}</h2>
                                <p>$${item.price}</p>
                            </a>
                        </li>
                        `);
                    }


                });
            });
        } else {
            $.get("https://tt920030.github.io/DONA/json/product.json", function (data) {
                $(data).each(function (index, item) {

                    if (item.type === type) {
                        $(".container ul").append(`
                        <li data-no="${item.no}">
                            <a href="product-sub-list${item.no}.html">
                                <div class="bg">
                                    <div class="picture">
                                        <img src="${item.picture}" alt="">
                                    </div>
                                </div>
                                
                                
                                <h2>${item.name}</h2>
                                <p>$${item.price}</p>
                            </a>
                        </li>
                    `);
                    }
                });
            });
        }


    });

});