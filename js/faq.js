$(function(){


    
    $(".faq li a").click(function(e){
        e.preventDefault();
        $(this).toggleClass("-show");
        $(this).next().slideToggle();
    });

    
});