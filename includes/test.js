$(window).on('load', function(){
    
    setTimeout(
        function() {
            $("#loader-wrapper").fadeOut();
            $(".js-loading").css("-webkit-animation-play-state", "running");
         }, 3000);
});