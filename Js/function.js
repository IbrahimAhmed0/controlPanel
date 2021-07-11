$(function(){
    $('[data-toggle="tooltip"]').tooltip();


    $('.View1').click(function(){
        $('.show1,.show2,.show3').toggle();
    });

    // $('.s_click').click(function(){
    //     $('.Mobile_skills').show();
    // });
    
    $("a.s_click").on("click",function(){
        $(".Mobile_skills").show();
        $(".web_skills").hide();
        $(".Desktop_skills").hide();
    });

    $("a.f_click").on("click",function(){
        $(".web_skills").show();
        $(".Mobile_skills").hide();
        $(".Desktop_skills").hide();
    });

    $("a.t_click").on("click",function(){
        $(".Desktop_skills").show();
        $(".Mobile_skills").hide();
        $(".web_skills").hide();
    });
});

