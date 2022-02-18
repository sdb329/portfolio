import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set(".burger-lines",{transformOrigin:"center"});
gsap.set("#top",{drawSVG: "0% 37%"});
gsap.set("#bottom",{drawSVG: "0% 37%"});

const topTL = new gsap.timeline();
topTL

.to(".burger-lines:nth-child(1)",{duration:0.25, drawSVG: "80% 100%"})
.to(".burger-lines:nth-child(1)",{duration:0.25});

const bottomTL = new gsap.timeline();
bottomTL.to(".burger-lines:nth-child(2)",{duration:0.25, drawSVG: "80% 100%"})
.to(".burger-lines:nth-child(2)",{duration:0.25});

export const burgerTL = new gsap.timeline({paused:true});

burgerTL.add(topTL,"burger")
    .add(bottomTL,"burger");



    
export const burgerJumpTL = new gsap.timeline({paused:true});
burgerJumpTL.to(".burger-lines", {x:"12", repeat:-1, yoyo:true});







    
