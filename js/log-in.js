$(function(){

    $(".log-in input[type='submit']").click(function(e){
        let send_data = true;

        if($("#log-in").val() === ""){
            $("#log-in").addClass("-error");
            send_data = false;
        }else{
            $("#log-in").removeClass("-error");
        }

        if($("#password").val() === ""){
            $("#password").addClass("-error");
            send_data = false;
        }else{
            $("#password").removeClass("-error");
        }

        if(is.email($("#log-in").val())){
            $("#log-in").removeClass("-error");
        }else{ // 不通過
            send_data = false;
            $("#log-in").addClass("-error");
        }

        if (!send_data) {
            e.preventDefault();
        }
    });
});