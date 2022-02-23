import { gsap } from "gsap";


gsap.set(".ocean-clip", {

    transformOrigin: "50%, 50%"
})

gsap.set("#search-bar-open", {
            
    alpha:0

})

gsap.set(".ocean-clip", {alpha: 1})


export function displayWindowSize(){

    let menu = document.querySelector("#nav-container");
    let menuHeight = menu.offsetHeight; 



    if(document.documentElement.clientWidth <= 1024){
        gsap.set(".nav-btns-li", {x:menuHeight,
            
            alpha:0
        
        })
        gsap.set("#nav-container", {x:menuHeight,
            alpha: 1
        
        })
        gsap.set(".stagger-in-nav", {
            
            alpha:0
        
        })
        gsap.set(".nav-svg-full", {
            
            alpha:1
        
        })

        gsap.set(".arrow-svg",{
            alpha: 0
        })
    
        
    }else{
        gsap.set(".nav-btns-li",{x:0,
        alpha:1})

        gsap.set("#nav-container", {x:0
        
        })

        gsap.set(".stagger-in-nav", {
            alpha:1
        })
        gsap.set(".nav-svg-full", {
            
            alpha:1
        
        })
    }
}

