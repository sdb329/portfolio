import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#burger",{transformOrigin:"center"});
// gsap.set("#top",{drawSVG: "0% 37%"});
gsap.set("#bottom",{drawSVG: "0% 48%"});
// gsap.set("#circle-svg",{scale: .2, transformOrigin:"right center", y: "-=400", x: ""});
gsap.set("#circle-svg",{scale: 0, y: "-=30", x: "+=30"});
    





// gsap.set("#burger",{rotate:90});




export const circleTL = new gsap.timeline({paused:true});
circleTL.to("#circle-svg", {duration:1, scale: 50});

const bottomTL = new gsap.timeline();
bottomTL.to("#bottom",{duration:0.25, drawSVG: "47% 100%"})
.to("#bottom",{duration:0.25});

export const burgerTL = new gsap.timeline({paused:true});

burgerTL
   
    .add(bottomTL,"burger")
    ;




    
export const burgerJumpTL = new gsap.timeline({paused:true});
burgerJumpTL.to("#bottom", {y:"12", repeat:-1, yoyo:true});









    
