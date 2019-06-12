$(document).ready(function(){
    
    $('#phone').css("visibility","hidden");
    setTimeout(function(){
        $('#phone').css("visibility","visible");
        $('#phone').fadeOut(0, function() {
            $('#phone').fadeIn(1000);
        });    
    },2000);
    
    /*$("#navhome").click(function(){
        $('html, body').animate({
		  scrollTop: $("#offer").offset().top
	   },1000);                    
    });*/
});