import { gsap } from "gsap";

// this is made so that the arrow on the page will jump continously 

gsap.set("#arrow", {y:"+=70"

})
// this gsap function sets the arrow a little higher than normal so that it is not going into other parts of the page

export const arrowJumpTL = new gsap.timeline();
arrowJumpTL.to("#arrow", {y:"-=60", repeat:-1, yoyo:true});
// this is the function that makes the arrow jump