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
                    scrub: true
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
                    scrub: true
                }
            });

}

export function scrollAnimation3(animationElement, triggerElement){

    
    const tl = new gsap.timeline();


    tl.fromTo(animationElement,
        

        { 

            scale: 1
        },
        
        
        {
                alpha: 1,
                scale: 1,
                rotate: 180,
                transformOrigin: "50% 50%",
                duration: 2,
       
                scrollTrigger: {
                    trigger: triggerElement,
                    toggleActions: "restart none resume none",
                    scrub: 3
                }
            });

}

export function scrollAnimation4(animationElement, triggerElement){

    
    const tl = new gsap.timeline();


    tl.fromTo(animationElement,
        

        { 
 




            // alpha: 0,
            scale: 1
        },
        
        
        {
                alpha: 1,
                scale: 1,
                rotate: 180,
                transformOrigin: "50% 50%",
                // stagger: 2,
                duration: 2,
       
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top 25%",
                    // end: "top 20%",
                    toggleActions: "restart none resume none",
                    // pin: true,
                    // markers: true,
                    scrub: 1
                }
            });

}


export function scrollAnimation5(animationElement, triggerElement){

    
    const tl = new gsap.timeline();


    tl.fromTo(animationElement,
        

        { 
 




            // alpha: 0,
            scale: 1
        },
        
        
        {
                alpha: 1,
                scale: 1,
                rotate: 180,
                transformOrigin: "50% 50%",
                // stagger: 2,
                duration: 2,
       
                scrollTrigger: {
                    trigger: triggerElement,
                    // start: "top 25%",
                    end: "top 20%",
                    toggleActions: "restart none resume none",
                    // pin: true,
                    // markers: true,
                    scrub: 1
                }
            });

}

export function scrollAnimation6(animationElement, triggerElement){

    const tl = new gsap.timeline();


    tl.fromTo(animationElement,
    
        { 
            alpha: 0,
            scale: .5,
            y: "-=100"
        },
        
        
        {
                alpha: 1.2,
                y: "+=100",
              
                scale: 1,
                transformOrigin: "50% 50%",
       
                scrollTrigger: {
                    trigger: triggerElement,
                    // start: "top 50%",
                    // end: "bottom 50%",
                    toggleActions: "restart none resume none",
                    // markers: true,
                    scrub: 1
                    // pin: true
                }
            });

}