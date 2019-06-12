function checkPositionScroll(){
    
    var nav = document.querySelector(".navbar-own");
    var navHeight = nav.style.height;
    
    console.log(document.documentElement.scrollTop);
    
    if(document.documentElement.scrollTop >= 200){
        nav.style.backgroundColor = "pink";
        nav.style.position = "sticky";
        nav.style.top = "0";
        nav.style.left = "0";
    }
    else if (document.documentElement.scrollTop === 0){
        nav.style.background = "transparent";
        nav.style.position = "relative";
    }
}
window.addEventListener("scroll", checkPositionScroll);