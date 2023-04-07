$(function () {

    // 商品數量加一
    let num = 1;
    $("#plus").click(function () {
        num++;
        $(".num").text(num);
    });

    $("#minus").click(function () {

        if (num == 0) {

        } else {
            num--;
            $(".num").text(num);
        }

    });

    // 商品列左右移
    let move = 0;
    $("#right").click(function(){
        move -= 450;

        if(move < -900){
            move += 450;
        }else{
            $("section ul").animate({translate: move});
        }
        
    });
    $("#left").click(function(){
        move += 450;
        if(move > 0){
            move -= 450;
        }else{
            $("section ul").animate({translate: move});
        }
        
    });

    // 商品列左右拖動
    // $("table").mousedown(function(e){
    //     
    // });
    $("section ul").on("taphold",function(){
        let start = e.pageX;
        
        console.log("qqq");
    });
});