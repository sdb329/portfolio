



import { scrollAnimation, scrollAnimation2, scrollAnimationButton1 } from "./scrollAnimation"

import { burgerTL, burgerJumpTL } from "./burgerAnimation"
import { displayWindowSize } from "./mobileResizing"
import { menuAnimation, searchJumpTL} from "./mobileMenu"
import { scrollPage } from "./pageScroll"
import { menuListners, oceanWavesMove } from "./menu"




var burgerButton = document.querySelector("#burger-container");

let canISeeMenu = false;

let menuScrollable = true;

    function openCloseMenu(){
        if(window.innerWidth <= 1048){
    
            if(canISeeMenu === false){
            burgerTL.play();
            burgerJumpTL.play();
           
            menuAnimation.play();
            canISeeMenu = true;
            screenLocker();
        }else{
            burgerJumpTL.pause();
          
            burgerTL.reverse();
            menuAnimation.reverse();
            canISeeMenu = false;
            screenLocker();
        }
        }
        
    }


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

burgerButton.addEventListener("click", openCloseMenu);

let navButtons = document.querySelectorAll(".nav-btns");


let searchJumpTest = document.querySelectorAll(".search-msg")



for(const glass of searchJumpTest){
    glass.addEventListener("mouseenter", iconJump);
    glass.addEventListener("mouseleave", iconJumpOut);
}


let waveMoveTest = document.querySelectorAll(".nav-btns")

for(const flow of waveMoveTest){
    flow.addEventListener("mouseenter", movingWavesStart);
    flow.addEventListener("mouseleave", movingWavesStop);
}


function movingWavesStart(){

    oceanWavesMove.play();


}

function movingWavesStop(){

    oceanWavesMove.pause();


}


function iconJump(){
        searchJumpTL.play();
 

}
function iconJumpOut(){
    searchJumpTL.reverse();
 

}


window.addEventListener("resize", function(){
    if(canISeeMenu === true){
        openCloseMenu();

    }
});



for(const button of navButtons){
    button.addEventListener("click", checkScrolling);
    button.addEventListener("click", openCloseMenu);
}



function checkScrolling(e) {


    const indexValue = [].indexOf.call(navButtons, e.target);
    e.stopPropagation();
    e.preventDefault();
    if (indexValue != -1) {
        scrollPage(indexValue - 1);
    }
}




window.addEventListener('load', function(){
 


    scrollAnimation("#region-1", "#region-1");

    scrollAnimation("#region-2", "#region-2");

    scrollAnimation("#region-3", "#region-3");

    scrollAnimation("#region-4", "#region-4");

    scrollAnimation("#region-5", "#region-5");

    scrollAnimation("#region-6", "#region-6");


    

    scrollAnimation2("#visit-1", "#visit-1");
    scrollAnimation2("#visit-2", "#visit-2");
    scrollAnimation2("#visit-3", "#visit-3");

    scrollAnimationButton1("#ds-button1", "#ds-button1");
    scrollAnimationButton1("#ds-button2", "#ds-button2");
    scrollAnimationButton1("#ds-button3", "#ds-button3");
    scrollAnimationButton1("#ds-button4", "#ds-button4");
    scrollAnimationButton1("#ds-button5", "#ds-button5");

});



window.addEventListener('load', displayWindowSize);
window.addEventListener('resize', displayWindowSize);


window.addEventListener('load', menuAnimation);
window.addEventListener('resize', menuAnimation);

window.addEventListener('load', menuListners);
window.addEventListener('resize', menuListners);



window.addEventListener('load', oceanWavesMove);
window.addEventListener('resize', oceanWavesMove);