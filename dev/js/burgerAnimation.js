import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#burger",{transformOrigin:"center"});
// gsap.set("#top",{drawSVG: "0% 37%"});
gsap.set("#bottom1",{drawSVG: "0% 48%"});
// gsap.set("#circle-svg",{scale: .2, transformOrigin:"right center", y: "-=400", x: ""});
gsap.set("#circle-svg",{scale: 0, y: "-=30", x: "+=30"});
gsap.set("#circle-cover",{y: "-=100vh"});
    






// gsap.set("#burger",{rotate:90});



// export const circleNone = new gsap.timeline({paused:true});
// circleNone.to("#circle-svg", {display: "none"});

// export const circleShow = new gsap.timeline({paused:true});
// circleShow.to("#circle-svg", {display: "list-item"});


export const circleTL = new gsap.timeline({paused:true},"burger");
circleTL.to("#circle-cover", {duration:.01, y: "+=100vh"});
circleTL.to("#circle-svg", {duration:1, scale: 50});
// this function is made so that the circle svg expands and shrinks when the burger is clicked





const bottomTL = new gsap.timeline();
bottomTL.to("#bottom1",{duration:0.25, drawSVG: "47% 100%"})
.to("#bottom1",{duration:0.25});

export const burgerTL = new gsap.timeline({paused:true});

burgerTL
   
    .add(bottomTL,"burger");
    
// this is made so that draw svg shanges the shape of the burger


    
export const burgerJumpTL = new gsap.timeline({paused:true});
burgerJumpTL.to("#bottom1", {y:"12", repeat:-1, yoyo:true});
// this function makes the bottom line of the burger jump continously when clicked









    
