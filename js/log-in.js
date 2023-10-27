$(function(){
    
    $(".log-in input[type='submit']").click(function(e){
        e.preventDefault();
        let send_data = true;

        if($("#log-in").val() === "" || is.email($("#log-in").val()) === false){
            $("#log-in").addClass("-error");
            $("#log-in").next().addClass("-alert");
            send_data = false;
        }else{
            $("#log-in").removeClass("-error");
            $("#log-in").next().removeClass("-alert");
        }

        if($("#password").val() === ""){
            $("#password").addClass("-error");
            $("#password").next().addClass("-alert");
            send_data = false;
        }else{
            $("#password").removeClass("-error");
            $("#password").next().addClass("-alert");
        }

        if (send_data) {
            alert("登入成功");
            $(location).attr("href","index.html");
        }
    });
});