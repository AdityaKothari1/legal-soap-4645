
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
