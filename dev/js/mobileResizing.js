import {gsap} from "gsap";


export function displayWindowSize(){

    let menu = document.querySelector("#nav-container");
    let menuHeight = menu.offsetHeight; 
    console.log(menuHeight);



    if(document.documentElement.clientWidth <= 1024){
    gsap.set("#nav-container", {y:-menuHeight,
        alpha: 0
    
    })
    gsap.set(".stagger-in-nav", {
            
        alpha:0

    })
 
    
}else{
    gsap.set("#nav-container", {y:0,
        alpha: 1
    
    })
    gsap.set(".stagger-in-nav", {
            
        alpha:1
    
    })

}



  
}