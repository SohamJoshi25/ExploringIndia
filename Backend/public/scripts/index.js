console.log("Hello")
let slide = -1;
changeHero(1);


function changeHero(inc){

    let hero_imgs = document.getElementsByClassName("slideshow");

    slide = ( slide + inc ) % hero_imgs.length;
    if(slide<0)slide+=hero_imgs.length;

    for(let i = 0; i<hero_imgs.length;i++){
        hero_imgs[i].style.display="none";
    }

    hero_imgs[slide].style.display = "block";
    
    console.log(slide);
}

