$(function () {
    let carts = [];
    let local = JSON.parse(localStorage.getItem("cart"));
    if (local === null) {

    } else {
        carts = local;
    }

    // 購物車數字出現
    function cartNumber() {
        
        let local = JSON.parse(localStorage.getItem("cart"));

        
        if (local === null || local.length === 0) {
            $(".right p").css({display: "none"});
        } else {
            
            $(".right p").css({display: "flex"});

            let num = 0;
            $(local).each(function(index, item){
                num = Number(num) + Number(item.number);
                // console.log(num);
            });

            $(".right p span").text(num);
        }
    }


    // 加入購物車
    $(".main").on("click", ".detail button",function () {
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
        cartNumber();
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
                        let no = item.no;


                        $(".cart tbody").append(`
                            <tr>
                                <td class="product">
                                    <div class="product-photo">
                                        <a href="product-sub-list${no}.html">
                                        <img src="${picture}" alt="">
                                        </a>
                                    </div>
                                    
                                    <div class="product-name">
                                        <a href="product-sub-list${no}.html">
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
                                        <li id="cart-minus">
                                            <i class="fa-solid fa-minus"></i>
                                        </li>
                                        <li class="num">${number}</li>
                                        <li id="cart-plus">
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

    // 總計


    function sum() {
        $.get("../json/product.json", function (data) {
            let total = 0;

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

        localStorage.setItem("cart", JSON.stringify(carts));
        sum();
        cartNumber();
    });

    // 增商品

    $("tbody").on("click", "#cart-plus", function () {
        let num = $(this).prev().text();
        num++;
        $(this).prev().text(num);

        let name = $(this).closest("tr").find(".product-name h2").text();
        for (let i = 0; i < carts.length; i++) {

            if (carts[i].name == name) {

                carts[i].number++;
                localStorage.setItem("cart", JSON.stringify(carts));
                sum();
                cartNumber();
            }
        };

    });

    // 減商品
    $("tbody").on("click", "#cart-minus", function () {
        let num = $(this).next().text();
        num--;

        if (num === 0) {
            let answer = confirm("確定移除商品?");
            if (answer) {
                $(this).closest("tr").prop("outerHTML", "");
                
                let del = $(this).closest("tr").find("h2").text();
                
                for (let i = 0; i < carts.length; i++) {
                    if (carts[i].name === del) {
                        carts.splice(i, 1);
                    }
                }

                localStorage.setItem("cart", JSON.stringify(carts));
                sum();
                cartNumber();
            } else {
                num++;
            }
        } else {
            $(this).next().text(num);

            let name = $(this).closest("tr").find(".product-name h2").text();
            for (let i = 0; i < carts.length; i++) {

                if (carts[i].name == name) {

                    carts[i].number--;
                    localStorage.setItem("cart", JSON.stringify(carts));
                    sum();
                    cartNumber();
                }
            };
            
        }






    });

});