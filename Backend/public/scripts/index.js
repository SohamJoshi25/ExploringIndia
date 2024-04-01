console.log("Hello")
let slide = 0;



function changeHero(inc){

    let hero_imgs = document.getElementsByClassName("slideshow");
    hero_imgs[slide].style.display="none";
    slide = ( slide + inc ) % hero_imgs.length;
    if(slide<0)slide+=hero_imgs.length;
    hero_imgs[slide].style.display = "block";
    
}

