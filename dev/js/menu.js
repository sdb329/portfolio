import { gsap } from "gsap";


let navButtonsAnimate = document.querySelectorAll(".nav-grow");



console.log(navButtonsAnimate.length);











export function menuListners (){

    
    console.log("working");
    if(window.innerWidth <= 1048){

            navButtonsAnimate.forEach((link, i) =>{

                link.addEventListener("mouseenter", ()=>{
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 2.01, color: '#F5F5F5', transformOrigin: '50% 50%', ease: "elastic", background: "#E3BCBA"})
                })
       
                link.addEventListener("mouseleave", ()=>{
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, stagger:.3, background: "transparent", color: '#112E3E'})
             
                })


               
            });

        }else{
            navButtonsAnimate.forEach((link, i) =>{

                link.addEventListener("mouseenter", ()=>{
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, color: '#E3BCBA', transformOrigin: '50% 50%', ease: "elastic", background: "transparent"})

                })
        
                link.addEventListener("mouseleave", ()=>{
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, stagger:.3, background: "transparent", color: '#112E3E'})


                })
            });
        }


    }
