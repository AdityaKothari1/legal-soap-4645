
// let infoArr = JSON.parse(localStorage.getItem("details")) 

// let log = (() =>{


//     if(infoArr == null){

//         setTimeout(() => {
            
//             window.location.href = "sign.html"
//             console.log("pp")

//         }, 5000);
       
//     }
    

// })

// log()

// console.log(infoArr)


// console.log("pp")

let i = 0;
function control(x) {
    i=i + x;
    slideshow(i);
}
function slideshow(num) {
    let slides = document.querySelectorAll(".slide");
    if (num == slides.length) {
        i=0;
        num=0;
    }
    if (num < 0) {
        i = slides.length - 1;
        num = slides.length - 1;
    }
    for (y of slides) {
        y.style.display = "none";
    }
    slides[num].style.display = "block";
}
slideshow(i);


let start=0
function change(a){
start=start+a
brandslide(start)
}
function brandslide(num){
    let slide=document.querySelectorAll(".carousel")
    console.log(slide);
    if (num == slide.length) {
        start=0;
        num=0;
    }
    if (num < 0) {
        start = slide.length - 1;
        num = slide.length - 1;
    }
    for (y of slide) {
        y.style.display = "none";
    }
    slide[num].style.display = "block";
}
brandslide(start)


let slider=document.querySelector("#packages")
let left=document.querySelector("#prev")
let right=document.querySelector("#next")
let index=0
right.addEventListener("click",function(){
    if(index<2){
        index=index+1
    }
    else{
        index=2
        index=0
    }
  slider.style.transform="translate("+index*-20.5+"%)"
})
left.addEventListener("click",function(){
    if(index>0){
        index=index-1
    }
    else{
        index=0
        index=2
    }
  slider.style.transform="translate("+index*-20.5+"%)"
})


let mover=document.querySelector("#newtrend")
let prev=document.querySelector("#pre")
let next=document.querySelector("#nex")
let inde=0
next.addEventListener("click",function(){
    if(inde<4){
        inde=inde+1
    }
    else{
        inde=4
        inde=0
    }
  mover.style.transform="translate("+inde*-12.5+"%)"
})
prev.addEventListener("click",function(){
    if(inde>0){
        inde=inde-1
    }
    else{
        inde=0
        inde=4
    }
  mover.style.transform="translate("+inde*-12.5+"%)"
})

let move=document.querySelector("#showall")
let pre=document.querySelector("#leftone")
let nex=document.querySelector("#rightone")
let startindex=0
nex.addEventListener("click",function(){
    if(startindex<4){
        startindex=startindex+1
    }
    else{
        startindex=4
        startindex=0
    }
  move.style.transform="translate("+startindex*-12.5+"%)"
})
pre.addEventListener("click",function(){
    if(startindex>0){
        startindex=startindex-1
    }
    else{
        startindex=0
        startindex=4
    }
  move.style.transform="translate("+startindex*-12.5+"%)"
})

document.querySelector("#mail").addEventListener("click",function(){
    let x=document.querySelector("#mail")
    x.style.border="thick solid #00FFFF"
})

document.querySelector("#men").addEventListener("click",function(){
    document.querySelector("#wo").style.display="none"
    document.querySelector("#me").style.display="block"
})
document.querySelector("#women").addEventListener("click",function(){
    document.querySelector("#wo").style.display="block"
    document.querySelector("#me").style.display="none"
})

