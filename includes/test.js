$(window).on('load', function(){
    setTimeout(
        function() {
            $("#loader-wrapper").fadeOut();
            
            $('#phone').css("visibility","hidden");
            setTimeout(function(){
                $('#phone').css("visibility","visible");
                $('#phone').fadeOut(0, function() {
                    $('#phone').fadeIn(1000);
                });    
            },1000);
        }, 3000);
});