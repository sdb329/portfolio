import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#why-nj", "#regions", "#places-to-visit", "#places-to-stay", "#dining-and-shopping"];




export function scrollPage(index){

gsap.to(window, {duration: 3, scrollTo:{y:idArray[index],offsetY: 120}});
}