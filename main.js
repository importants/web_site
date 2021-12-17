$(function(){
    $(".channel_section li").click(function(){
        if($(this).index()==0){  
            console.log()     
            $(".one").css("display","block");
            $(".two").css("display","none");
        }

    })
    $(".channel_section li").click(function(){
        if($(this).index()==3){      
            $(".two").css("display","block");
            $(".one").css("display","none");
        }

    })

})