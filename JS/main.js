// بسم الله الرحمن الرحيم 
//Start Project



let allInpute = document.querySelectorAll(".card .body-login form .inp input")
let inputUser = document.querySelector(".card .body-login form .input-user input")
let inputPassword = document.querySelector(".card .body-login form .input-password input")




allInpute.forEach(function(ele) {
    ele.oninput = function() {
        if (ele === inputUser) {
            if (inputUser.value.match(/\s/ig) || inputUser.value.match(/-/ig) || inputUser.value === "") {
                inputUser.parentElement.classList.remove("bad")
                inputUser.parentElement.classList.remove("good")
                inputUser.parentElement.classList.add("bad")
            } else {
                inputUser.parentElement.classList.remove("bad")
                inputUser.parentElement.classList.remove("good")
                inputUser.parentElement.classList.add("good")
            }
        }else if (ele === inputPassword) {
            if (inputPassword.value.length < 7) {
                inputPassword.parentElement.classList.remove("bad")
                inputPassword.parentElement.classList.remove("good")
                inputPassword.parentElement.classList.add("bad")
            } else {
                inputPassword.parentElement.classList.remove("bad")
                inputPassword.parentElement.classList.remove("good")
                inputPassword.parentElement.classList.add("good")
            }
        }
    }
})



document.querySelector(".card .body-login form").onsubmit = function(event) {
    let userValid = false
    if (inputUser.parentElement.classList.contains("good") && inputPassword.parentElement.classList.contains("good")) {
        userValid = true
    } 
    if (userValid === false) {
        event.preventDefault()
    }
}