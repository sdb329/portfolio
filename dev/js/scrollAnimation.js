import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export function scrollAnimation(animationElement, triggerElement){

    const tl = new gsap.timeline();


    tl.fromTo(animationElement,
    
        { 
            alpha: 0
        },
        
        
        {
                alpha: 1,
       
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top 40%",
                    end: "bottom 80%",
                    toggleActions: "restart none resume none",
                    scrub: true
                }
            });

}

export function scrollAnimation2(animationElement, triggerElement){
    const tl = new gsap.timeline();


    tl.fromTo(animationElement,
    
        { 
            alpha: 0
        },
        
        
        {
                alpha: 1,
                x: "-=20",
       
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top 50%",
                    end: "bottom 70%",
                    toggleActions: "restart none resume none",
                    scrub: true
                }
            });

}

export function scrollAnimationButton1(animationElement, triggerElement){

    const tl = new gsap.timeline();


    tl.fromTo(animationElement,
    
        { 
            alpha: 0,
            y: "-=50"
        },
        
        
        {
                alpha: 1,
                y: "+=50",
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top 60%",
                    end: "bottom 70%",
                    toggleActions: "restart none resume none",
                    scrub: true
                }
            });

}



