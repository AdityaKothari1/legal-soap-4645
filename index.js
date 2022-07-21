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

