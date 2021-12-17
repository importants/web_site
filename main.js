$(function(){
    $(".channel_section nav ul li").click(function(){
        
        if($(this).index()==0){  
            $(".channel_section li").removeClass("active");
         
            $(".one").css("display","block");
            $(".two").css("display","none");
            
            $(this).addClass("active")
        }

    })
    
    $(".channel_section nav ul li").click(function(){

        if($(this).index()==3){      
            $(".channel_section li").removeClass("active");
            $(".two").css("display","block");
            $(".one").css("display","none");
            
            $(this).addClass("active");
        }
    })
})