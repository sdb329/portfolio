import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#burger",{transformOrigin:"center"});
// gsap.set("#top",{drawSVG: "0% 37%"});
gsap.set("#bottom",{drawSVG: "0% 48%"});


// gsap.set("#burger",{rotate:90});






const bottomTL = new gsap.timeline();
bottomTL.to("#bottom",{duration:0.25, drawSVG: "80% 100%"})
.to("#bottom",{duration:0.25});

export const burgerTL = new gsap.timeline({paused:true});

burgerTL
    .add(bottomTL,"burger");



    
export const burgerJumpTL = new gsap.timeline({paused:true});
burgerJumpTL.to("#bottom", {y:"12", repeat:-1, yoyo:true});









    
