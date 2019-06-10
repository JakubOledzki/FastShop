function checkPositionScroll(){
    
    var nav = document.querySelector(".navbar-own");
    
    console.log(document.documentElement.scrollTop);
    
    if(document.documentElement.scrollTop >= 100){
        nav.style.backgroundColor = "#000";
        nav.style.position = "sticky";
    }
    else if (document.documentElement.scrollTop === 0){
        nav.style.background = "transparent";
        nav.style.position = "relative";
    }
}
window.addEventListener("scroll", checkPositionScroll);