function autoscroll(div){
	$('html, body').animate({
		scrollTop: $(div).offset().top
	},1000);
}

function checkPositionScroll(){
    
    var nav = document.querySelector(".navbar-own");
    var container = document.querySelector(".container-fluid");
    var navHeight = nav.offsetHeight;
    var containerWidth = container.offsetWidth;
    
    //console.log(document.documentElement.scrollTop);
    //console.log(navHeight);
    
    if(document.documentElement.scrollTop >= navHeight+10){
        nav.style.backgroundColor = "#000";
        nav.style.color = "#f8f9fa";
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.left = "0";
        nav.style.width = containerWidth;
    }
    else if (document.documentElement.scrollTop === 0){
        nav.style.background = "rgba(0, 0, 0, 0.10)";
        nav.style.position = "absolute";
    }
}
window.addEventListener("scroll", checkPositionScroll);