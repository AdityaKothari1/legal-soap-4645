

let infoArr = JSON.parse(localStorage.getItem("details")) || [];


document.querySelector("form").addEventListener("submit", signupSAVEDATA)


let formTag = document.querySelector("form")

function signupSAVEDATA(event) {
  event.preventDefault();


  let name = formTag.name.value
  let email = formTag.email.value
  let pass = formTag.password.value

  if (name === "" || email === "" || pass === "") {

    alert("Please Fill All Detais")

  } else {

    let obj = {
      "name": name,
      "email": email,
      "pass": pass
    }
    infoArr.push(obj);
    localStorage.setItem("details", JSON.stringify(infoArr))
    alert("Your Successfully Sign Up")
    window.location.href = "LOGIN.html"
  }

}























const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load", function () {

  showPopup();
  // setTimeout(function(){
  //   loginPopup.classList.add("show");
  // },5000)

})

function showPopup() {
  const timeLimit = 5 
  let i = 0;
  const timer = setInterval(function () {
    i++;
    if (i == timeLimit) {
      clearInterval(timer);
      loginPopup.classList.add("show");
    }
    console.log(i)
  }, 1000);
}


close.addEventListener("click", function () {
  loginPopup.classList.remove("show");
})

