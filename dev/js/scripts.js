



// import { scrollAnimation, scrollAnimation2, scrollAnimationButton1 } from "./scrollAnimation"

import { burgerTL, burgerJumpTL, circleTL} from "./burgerAnimation"

import { displayWindowSize} from "./mobileResizing"

import { menuAnimation} from "./mobileMenu"

import { menuListners} from "./menu"

import { arrowJumpTL} from "./arrow-anim"




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

let navButtons = document.querySelectorAll(".nav-btns");
console.log(navButtons);

for (const button of navButtons){
    button.addEventListener("click", openCloseMenu)
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

window.addEventListener('load', menuListners);
window.addEventListener('resize', menuListners);

window.addEventListener('load', displayWindowSize)
window.addEventListener('resize', displayWindowSize)