



// import { scrollAnimation, scrollAnimation2, scrollAnimationButton1 } from "./scrollAnimation"

import { burgerTL, burgerJumpTL, circleTL} from "./burgerAnimation"



var burgerButton = document.querySelector("#burger-svg")
let canISeeMenu = false;
let menuScrollable = true;




burgerButton.addEventListener("click", () =>{
    
    console.log("burger clicked");

    

    if(canISeeMenu === false) {
        burgerTL.play();
        circleTL.play();
        burgerJumpTL.play();
        screenLocker();
        canISeeMenu = true;
        
    }else{
        burgerTL.reverse();
        circleTL.reverse();
        burgerJumpTL.pause();
        screenLocker();
        canISeeMenu = false;

    }
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

