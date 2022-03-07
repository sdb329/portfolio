import { gsap } from "gsap";


let sectionsAnimate = document.querySelectorAll(".sections-hover");

let typeWords = document.querySelectorAll(".type-words-total");

let clickMeSVG = document.querySelectorAll(".click-me-type");





console.log(sectionsAnimate.length + " is the length of the main sections");





const bottomTL = new gsap.timeline();
bottomTL.to("#bottom",{duration:0.25, drawSVG: "47% 100%"})
.to("#bottom",{duration:0.25});


function rotationSetting(){
    gsap.set(".click-me-type",{rotation:0});
    console.log("yo");

}

export function sectionListners(){

    
    console.log("working");
    if(window.innerWidth <= 1048){

        sectionsAnimate.forEach((link, i) =>{

            const clickMeTL = new gsap.timeline({paused:true});
            clickMeTL.to(clickMeSVG[i],{duration:8, scale: 1, rotate: 360, color: '#E3BCBA', transformOrigin: '50% 50%', ease: "none", background: "transparent", repeat: -1})


            const clickMeTL2 = new gsap.timeline({paused:true});
            clickMeTL2.set(clickMeSVG[i],{duration:.01, scale: 1, rotation: 0, color: '#E3BCBA', transformOrigin: '50% 50%', ease: "none", background: "transparent"})

                link.addEventListener("mouseenter", ()=>{
                    gsap.to(typeWords[i],{duration:.5, scale: 1.3, color: '#F5F5F5', transformOrigin: '50% 50%'})

                    clickMeTL.play();
                })
       
                link.addEventListener("mouseleave", ()=>{
                    gsap.to(typeWords[i],{duration:.5, scale: 1, stagger:.3, color: '#112E3E'})

                    clickMeTL.pause();
                    // clickMeTL2.play();
                    // gsap.set(".click-me-type",{rotation:0});
                    rotationSetting();

             
                })


               
            });

        }else{
            sectionsAnimate.forEach((link, i) =>{

                link.addEventListener("mouseenter", ()=>{
                    gsap.to(sectionsAnimate[i],{duration:.03, scale: 1, color: '#E3BCBA', transformOrigin: '50% 50%', ease: "elastic", background: "transparent"})

                })
        
                link.addEventListener("mouseleave", ()=>{
                    gsap.to(sectionsAnimate[i],{duration:.03, scale: 1, stagger:.3, background: "transparent", color: '#112E3E'})


                })
            });
        }



        


    }
