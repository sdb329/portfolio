



// import { scrollAnimation, scrollAnimation2, scrollAnimationButton1 } from "./scrollAnimation"

import { Carousel } from "@fancyapps/ui";

import { burgerTL, burgerJumpTL, circleTL} from "./burgerAnimation"

import { displayWindowSize} from "./mobileResizing"

import { menuAnimation} from "./mobileMenu"

import { menuListners} from "./menu"

import { arrowJumpTL} from "./arrow-anim"

import { sectionListners } from "./sectionMain"





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

  const mainCarousel2 = new Carousel(document.querySelector(".carousel2"), {
    Dots: true,

    'center': false,
    slidesPerPage: 1

  });

  window.addEventListener('load', mainCarousel);
  window.addEventListener('load', mainCarousel2);




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









window.addEventListener('load', menuListners);
window.addEventListener('resize', menuListners);

window.addEventListener('load', displayWindowSize)
window.addEventListener('resize', displayWindowSize)