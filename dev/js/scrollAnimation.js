import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export function scrollAnimation(animationElement, triggerElement){

    const tl = new gsap.timeline();


    tl.fromTo(animationElement,
    
        { 
            alpha: 0,
            y: "-=100"
        },
        
        
        {
                alpha: 1,
                y: "+=100",
                stagger: 2,
       
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top 60%",
                    end: "bottom 70%",
                    toggleActions: "restart none resume none",
                    scrub: true,
                    markers: true
                }
            });

}


export function scrollAnimation2(animationElement, triggerElement){

    const tl = new gsap.timeline();


    tl.fromTo(animationElement,
    
        { 
            alpha: 0,
            y: "-=100"
        },
        
        
        {
                alpha: 1,
                y: "+=100",
                stagger: 2,
                duration: 2,
       
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top 40%",
                    end: "bottom 50%",
                    toggleActions: "restart none resume none",
                    scrub: true,
                    markers: true
                }
            });

}