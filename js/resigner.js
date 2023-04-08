$(function(){
    $(".phone").click(function(e){
        e.preventDefault();
    });

    $(".CAPTCHA").click(function(e){
        e.preventDefault();
    });

    $(".resigner input[type='submit']").click(function(e){
        let send_data = true;

        if($("#name").val() === ""){
            $("#name").addClass("-error");
            send_data = false;
        }else{
            $("#name").removeClass("-error");
        }

        if($("#email").val() === ""){
            $("#email").addClass("-error");
            send_data = false;
        }else{
            $("#email").removeClass("-error");
        }

        if(is.email($("#email").val())){
            $("#email").removeClass("-error");
        }else{
            send_data = false;
            $("#email").addClass("-error");
        }

        if($("#phone").val() === ""){
            $("#phone").addClass("-error");
            send_data = false;
        }else{
            $("#phone").removeClass("-error");
        }

        if($("#CAPTCHA").val() === ""){
            $("#CAPTCHA").addClass("-error");
            send_data = false;
        }else{
            $("#CAPTCHA").removeClass("-error");
        }

        if($("#password").val() === ""){
            $("#password").addClass("-error");
            send_data = false;
        }else{
            $("#password").removeClass("-error");
        }

        if($("#password-comfirm").val() === ""){
            $("#password-comfirm").addClass("-error");
            send_data = false;
        }else{
            $("#password-comfirm").removeClass("-error");
        }

        if($("#password").val() !== $("#password-comfirm").val()){
            $("#password-comfirm").addClass("-error");
            send_data = false;
        }

        if (!send_data) {
            e.preventDefault();
        }
    });
});