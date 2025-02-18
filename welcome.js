const signinBtn  = document.querySelector("#sign")
const signupBtn = document.querySelector("#signupBtn")
const view = document.querySelector("#View")

signinBtn.addEventListener("click", ()=>{
    window.location.href = "/pages/sign-in.html"
})

signupBtn.addEventListener("click", ()=>{
    window.location.href = "/pages/sign-up.html"
})

view.addEventListener("click", ()=>{
    window.location.href = ""
})