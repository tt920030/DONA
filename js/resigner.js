$(function () {
    
    // 發送驗證碼
    $(".phone").click(function(e){
        e.preventDefault();
        let sent_CAPTCHA = true;
        let phoneNum = /^09[0-9]{8}$/;
        let taiwan = phoneNum.test($("#phone").val());

        if($("#phone").val() === "" || taiwan === false){
            $("#phone").addClass("-error");
            $("#phone").parent().next().addClass("-alert");
            sent_CAPTCHA = false;
        }else{
            $("#phone").removeClass("-error");
            $("#phone").parent().next().removeClass("-alert");
        }

        if (sent_CAPTCHA) {
            alert("驗證碼1234");
        }
    });
    

    // 驗證碼確認
    $(".CAPTCHA").click(function (e) {
        e.preventDefault();
        let correct = true;

        if ($("#CAPTCHA").val() === "") {
            $("#CAPTCHA").addClass("-error");
            $("#CAPTCHA").parent().next().addClass("-alert");
            correct = false;
            alert("驗證碼錯誤");
        } else if ($("#CAPTCHA").val() === "1234"){
            $("#CAPTCHA").removeClass("-error");
            $("#CAPTCHA").parent().next().removeClass("-alert");
        }

        if (correct) {
            alert("驗證碼正確");
        }
    });

    $(".resigner input[type='submit']").click(function (e) {
        e.preventDefault();
        let send_data = true;

        // 姓名不可空白
        if ($("#name").val() === "") {
            $("#name").addClass("-error");
            $("#name").next().addClass("-alert");
            send_data = false;
        } else {
            $("#name").removeClass("-error");
            $("#name").next().removeClass("-alert");
        }

        // email格式
        // email不可空白
        if ($("#email").val() === "" || is.email($("#email").val()) === false) {
            $("#email").addClass("-error");
            $("#email").next().addClass("-alert");
            send_data = false;
        } else {
            $("#email").removeClass("-error");
            $("#email").next().removeClass("-alert");
        }

        // 手機不可空白
        let phoneNum = /^09[0-9]{8}$/;
        let taiwan = phoneNum.test($("#phone").val());

        if ($("#phone").val() === "" || taiwan === false) {
            $("#phone").addClass("-error");
            $("#phone").parent().next().addClass("-alert");
            send_data = false;
        } else {
            $("#phone").removeClass("-error");
            $("#phone").parent().next().removeClass("-alert");
        }

        // 驗證碼不可空白
        if ($("#CAPTCHA").val() === "") {
            $("#CAPTCHA").addClass("-error");
            $("#CAPTCHA").parent().next().addClass("-alert");
            send_data = false;
        } else {
            $("#CAPTCHA").removeClass("-error");
            $("#CAPTCHA").parent().next().removeClass("-alert");
        }

        // 密碼格式 
        // 密碼不可空白
        let strongPass = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
        let ok = strongPass.test($("#password").val());

        if (ok) {
            $("#password").removeClass("-error");
            $("#password").next().removeClass("-alert");
        } else if ((ok === false && $("#password").val().length < 8) || $("#password").val() === "") {
            $("#password").addClass("-error");
            $("#password").next().addClass("-alert");
            send_data = false;
        } else {
            $("#password").addClass("-error");
            $("#password").next().text("*密碼須包含大小寫英文字母與數字");
            $("#password").next().addClass("-alert");
            send_data = false;
        }

        // 確認密碼不可空白
        // 二次密碼需相符 
        if ($("#password-comfirm").val() === "" || ($("#password").val() !== $("#password-comfirm").val())) {
            $("#password-comfirm").addClass("-error");
            $("#password-comfirm").next().addClass("-alert");
            send_data = false;
        } else {
            $("#password-comfirm").removeClass("-error");
            $("#password-comfirm").next().removeClass("-alert");
        }

        if (send_data) {
          alert("註冊成功!");
          $(location).attr("href","index.html");
        }
    });

});