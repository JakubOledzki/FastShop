var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000
});
var easeInOutCubic = new SmoothScroll('[data-easing="easeInOutCubic"]', {easing: 'easeInOutCubic'});

$(function() {
    $('.nav-item a').on('click', function(){ 
        if($('.navbar-toggler').css('display') !='none'){
            $('.navbar-toggler').trigger( "click" );
        }
    });
});