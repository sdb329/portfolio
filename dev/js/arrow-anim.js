import { gsap } from "gsap";


gsap.set("#arrow", {y:"+=70"

})
export const arrowJumpTL = new gsap.timeline();
arrowJumpTL.to("#arrow", {y:"-=60", repeat:-1, yoyo:true});