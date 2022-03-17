import { gsap } from "gsap";
// this function is made to make the navigation in the burger change color and grow when hovered over

let navButtonsAnimate = document.querySelectorAll(".nav-grow");



// console.log(navButtonsAnimate.length);











export function menuListners (){

    
    // console.log("working");
    if(window.innerWidth <= 1024){

        // when the width of the window is below 1048px, the navgiation will grow and change to 100vw

            navButtonsAnimate.forEach((link, i) =>{

                link.addEventListener("mouseenter", ()=>{
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale:1.7, color: '#F5F5F5', transformOrigin: '50% 50%', ease: "elastic", background: "#E3BCBA"},"burger")
                })
       
                link.addEventListener("mouseleave", ()=>{
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, stagger:.3, background: "transparent", color: '#112E3E'},"burger")
             
                })


               
            });

        }else{

            // when the width is above 1048
            navButtonsAnimate.forEach((link, i) =>{

                link.addEventListener("mouseenter", ()=>{
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, color: '#E3BCBA', transformOrigin: '50% 50%', ease: "elastic", background: "transparent"},"burger")

                })
        
                link.addEventListener("mouseleave", ()=>{
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, stagger:.3, background: "transparent", color: '#112E3E'},"burger")


                })
            });
        }


    }
