

const signinBtn = document.querySelector(".btn")
signinBtn.addEventListener("click", (e)=>{
e.preventDefault()

let email = document.querySelector("#email").value
let password = document.querySelector("#password").value

let storedEmail = localStorage.getItem("email")
let  storedPassword = localStorage.getItem("password")

if(email === storedEmail && password === storedPassword){
alert("Welcome to the game")
window.location.href = ""
} else{
    alert("Email or password is incorrect")
}
})
