



// import { scrollAnimation, scrollAnimation2, scrollAnimationButton1 } from "./scrollAnimation"

import { Carousel, Fancybox } from "@fancyapps/ui";

import { burgerTL, burgerJumpTL, circleTL} from "./burgerAnimation"

import { displayWindowSize} from "./mobileResizing"

import { menuAnimation} from "./mobileMenu"

import { menuListners} from "./menu"

import { arrowJumpTL} from "./arrow-anim"

import { sectionListners } from "./sectionMain"

import { scrollAnimation, scrollAnimation2, scrollAnimation3, scrollAnimation4, scrollAnimation5, scrollAnimation6} from "./scrollAnimation"





var burgerButton = document.querySelector("#burger-svg")
let canISeeMenu = false;
let menuScrollable = true;



function openCloseMenu(){
    if(canISeeMenu === false) {
        burgerTL.play();
        circleTL.play();
        burgerJumpTL.play();

        menuAnimation.play();
        screenLocker();
        canISeeMenu = true;
        
    }else{
        burgerTL.reverse();
        circleTL.reverse();
        burgerJumpTL.pause();
        menuAnimation.reverse();
        screenLocker();
        canISeeMenu = false;

    }
}

window.addEventListener("resize", function(){
    if(canISeeMenu === true){
        openCloseMenu();

    }
});

burgerButton.addEventListener("click", openCloseMenu)
burgerButton.addEventListener("click", sectionListners)
burgerButton.addEventListener("click", menuListners)

let navButtons = document.querySelectorAll(".nav-btns");
console.log(navButtons);

for (const button of navButtons){
    button.addEventListener("click", openCloseMenu)
    button.addEventListener("click", sectionListners)
    button.addEventListener("click", menuListners)
}

// for(let i = 0; i < navButtons.length; i++){
//     navButtons[i].addEventListener("click", openCloseMenu)
// }

// burgerButton.addEventListener("click", () =>{
    
//     console.log("burger clicked");

    

//     if(canISeeMenu === false) {
//         burgerTL.play();
//         circleTL.play();
//         burgerJumpTL.play();

//         menuAnimation.play();
//         screenLocker();
//         canISeeMenu = true;
        
//     }else{
//         burgerTL.reverse();
//         circleTL.reverse();
//         burgerJumpTL.pause();
//         menuAnimation.reverse();
//         screenLocker();
//         canISeeMenu = false;

//     }
// });









const mainCarousel = new Carousel(document.querySelector(".carousel"), {
    Dots: true,

    'center': false,
    slidesPerPage: 1

  });




function screenLocker(){

    if(menuScrollable === true){

        window.onscroll = function(){window.scrollTo(0,0);};
        menuScrollable = false
    }
    else{
        window.onscroll = function(){};
        menuScrollable = true;
    } 
    
}


window.addEventListener('load', arrowJumpTL);


window.addEventListener('load', sectionListners);
window.addEventListener('resize', sectionListners);




window.addEventListener('load', mainCarousel);
window.addEventListener('resize', mainCarousel);



window.addEventListener('load', menuListners);
window.addEventListener('resize', menuListners);

window.addEventListener('load', displayWindowSize)
window.addEventListener('resize', displayWindowSize)

window.addEventListener('load', Fancybox)


window.addEventListener('load', function(){
 


    scrollAnimation(".scroll1", ".scroll-parent1");
    scrollAnimation(".scroll2", ".scroll-parent2");

    scrollAnimation2(".scroll3", ".scroll3");
    scrollAnimation2(".scroll4", ".scroll4");
    scrollAnimation2(".scroll5", ".scroll5");
    scrollAnimation2(".scroll6", ".scroll6");
    scrollAnimation2(".scroll7", ".scroll7");
    scrollAnimation2(".scroll8", ".scroll8");
    scrollAnimation2(".scroll9", ".scroll9");
  

    scrollAnimation3(".scroll-scale", ".scroll-scale");
    scrollAnimation4(".scroll-scale2", ".scroll-scale2");
    scrollAnimation5(".scroll-scale3", ".scroll-scale3");


    scrollAnimation6(".scale-words", ".scale-words");
    scrollAnimation6(".scale-words2", ".scale-words2");
    scrollAnimation6(".scale-words3", ".scale-words3");
    scrollAnimation6(".scale-words4", ".scale-words4");
  

});