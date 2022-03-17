import { gsap } from "gsap";


let sectionsAnimate = document.querySelectorAll(".sections-hover");

let typeWords = document.querySelectorAll(".type-words-total");

let clickMeSVG = document.querySelectorAll(".click-me-type");

let colorsScale = document.querySelectorAll(".colors-work");

let imageAppear = document.querySelectorAll(".my-work-img");




console.log(sectionsAnimate.length + " is the length of the main sections");


gsap.set(".my-work-img",{alpha:0});

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
            clickMeTL.to(clickMeSVG[i],{duration:8, scale: 1, rotate: 360, color: '#E3BCBA', transformOrigin: '50% 50%', ease: "none", repeat: -1})



            const scaleSectionTL = new gsap.timeline({paused:true});
            scaleSectionTL.to(sectionsAnimate[i],{duration:.5, scale: 1.1})
            
            

            const clickMeTL2 = new gsap.timeline({paused:true});
            clickMeTL2.set(clickMeSVG[i],{duration:.01, scale: 1, rotation: 0, color: '#E3BCBA', transformOrigin: '50% 50%', ease: "none"})

                link.addEventListener("mouseenter", ()=>{
                    gsap.to(typeWords[i],{duration:.5, scale: 1, color: '#F5F5F5', transformOrigin: '50% 50%'})

                    clickMeTL.play();
                    scaleSectionTL.play();


                   
                })
       
                link.addEventListener("mouseleave", ()=>{
                    gsap.to(typeWords[i],{duration:.5, scale: 1, stagger:.3, color: '#112E3E'})

                    clickMeTL.pause();
                    scaleSectionTL.reverse();
                    rotationSetting();

             
                })


               
            });

        }else{


            

            sectionsAnimate.forEach((link, i) =>{

                const colorTL = new gsap.timeline({paused:true});
            colorTL.to(colorsScale[i], {duration:0.5, width: "100vw"});


            const clickMeTL = new gsap.timeline({paused:true});
            clickMeTL.to(clickMeSVG[i],{duration:8, scale: 1, rotate: 360, color: '#E3BCBA', transformOrigin: '50% 50%', ease: "none", repeat: -1})


            const scaleSectionTL = new gsap.timeline({paused:true});
            scaleSectionTL.to(sectionsAnimate[i],{duration:.5, scale: 1.1})

            const imageAppearTL = new gsap.timeline({paused:true});
            imageAppearTL.to(imageAppear[i],{duration:.5, alpha: 1})

                link.addEventListener("mouseenter", ()=>{
                    gsap.to(sectionsAnimate[i],{duration:.03, scale: 1, color: '#E3BCBA', transformOrigin: '50% 50%', ease: "elastic"})

                    colorTL.play();
                    clickMeTL.play();
                    scaleSectionTL.play();
                    imageAppearTL.play();
                })
        
                link.addEventListener("mouseleave", ()=>{
                    gsap.to(sectionsAnimate[i],{duration:.03, scale: 1, stagger:.3, color: '#112E3E'})

                    colorTL.reverse();
                    clickMeTL.pause();
                    scaleSectionTL.reverse();
                    imageAppearTL.reverse();
                    rotationSetting();
                })
            });
        }



        


    }
