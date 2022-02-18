import gsap from "gsap/all";


let navButtonsAnimate = document.querySelectorAll(".nav-grow");

let navSvgOcean = document.querySelectorAll("#wave-width");

console.log(navButtonsAnimate.length);

console.log(navSvgOcean.width + " is the width of the svg");


export const oceanWavesMove = new gsap.timeline({paused:true});


const movingWaves = new gsap.timeline();

if(window.innerWidth <= 1048){
movingWaves.to(".ocean-clip",{duration:.7, x:"-=23", ease: "none", repeat:-1}, "start")}
else{
    movingWaves.to(".ocean-clip", {scale:1, duration:.7, x:"-=23", ease: "none", repeat:-1})
}


oceanWavesMove.add(movingWaves,"waves")




export function menuListners (){

    
    console.log("working");
    if(window.innerWidth <= 1048){

            navButtonsAnimate.forEach((link, i) =>{

                link.addEventListener("mouseenter", ()=>{
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1.01, color: '#15344F', transformOrigin: '50% 50%', ease: "elastic", background: "#B3ECFF"})
                })
                gsap.set(".ocean-clip", {alpha: 1})

        
                link.addEventListener("mouseleave", ()=>{
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, stagger:.3, background: "#15344F", color: '#B3ECFF'})
                    gsap.set(".ocean-clip", {alpha: 1})
                })
       

               
            });

        }else{
            navButtonsAnimate.forEach((link, i) =>{

                link.addEventListener("mouseenter", ()=>{
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, color: '#C8F8D6', transformOrigin: '50% 50%', ease: "elastic", background: "#15344F"})
                    gsap.set(".ocean-clip", {alpha: 1})
                })
        
                link.addEventListener("mouseleave", ()=>{
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, stagger:.3, background: "#15344F", color: '#B3ECFF'})

                    gsap.set(".ocean-clip", {alpha: 1})
                })
            });
        }


    }
