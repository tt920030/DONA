$(function () {
    let carts = [];
    let local = JSON.parse(localStorage.getItem("cart"));
    if (local === null) {

    } else {
        carts = local;
    }


    // 加入購物車
    $(".detail button").click(function () {
        let name = $(".detail h1").text();
        let number = $(".num").text();

        let list = { name, number };


        if (carts.length === 0) {
            carts.push(list);
            console.log("1");
        } else {
            let is_in = false;
            for (let i = 0; i < carts.length; i++) {

                if (carts[i].name !== name) {
                    continue;

                } else {
                    carts[i].number = Number(carts[i].number) + Number(number);
                    is_in = true;
                }
            };

            if (is_in === false) {
                carts.push(list);
            }

        }



        localStorage.setItem("cart", JSON.stringify(carts));

        // localStorage.clear();
    });


    // 購物車加入商品列
    (function () {
        $.get("../json/product.json", function (data) {
            $(data).each(function (index, item) {



                for (let i = 0; i < carts.length; i++) {

                    if (item.name === carts[i].name) {
                        let name = item.name;
                        let price = item.price;
                        let picture = item.picture;
                        let number = carts[i].number;


                        $(".cart tbody").append(`
                            <tr>
                                <td class="product">
                                    <div class="product-photo">
                                        <a href="product-sub-list.html">
                                        <img src="${picture}" alt="">
                                        </a>
                                    </div>
                                    
                                    <div class="product-name">
                                        <a href="product-sub-list.html">
                                            <h2>${name}</h2>
                                        </a>
                                        <a href="#" class="delete">
                                            <i class="fa-regular fa-trash-can"></i>
                                            <p>刪除</p>
                                        </a>
                                    </div>
                                </td>
                                
                                <td class="price">
                                    <div>$${price}</div>
                                </td>
                                <td class="number">
                                    <ul>
                                        <li>
                                            <i class="fa-solid fa-minus"></i>
                                        </li>
                                        <li class="num">${number}</li>
                                        <li>
                                            <i class="fa-solid fa-plus"></i>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        `);
                    }
                };
            });
        });
    })();

    // 刪除商品
    $("tbody").on("click", ".delete", function (e) {
        e.preventDefault();
        $(this).closest("tr").prop("outerHTML", "");
        // console.log($(this).closest("tr").prop("outerHTML"));
        let del = $(this).parent().find("h2").text();
        for (let i = 0; i < carts.length; i++) {
            if (carts[i].name === del) {
                carts.splice(i, 1);
            }
        }
        console.log(carts);
        localStorage.setItem("cart", JSON.stringify(carts));
    });

    // 增減商品

    // 總計
    let total = 0;

    function sum() {
        $.get("../json/product.json", function (data) {
            $(data).each(function (index, item) {

                for (let i = 0; i < carts.length; i++) {
                    if (item.name === carts[i].name) {
                        let price = item.price;
                        let number = carts[i].number;

                        total = total + (price * number);

                    }

                }

            });
            // console.log(total);
            $(".total p").text(`$${total}`);
        });
    }
    sum();

});