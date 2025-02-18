const nameFlied = document.querySelector("#name");
    const email= document.querySelector("#email");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirmPassword");
    const errorMessage = document.querySelector("errorMessage")
const signupBtn = document.querySelector(".btnn")

function check() {
    if(nameFlied.value && email.value && password.value && confirmPassword.value){
        signupBtn.disabled = false
    } else{
        signupBtn.disabled = true
    }
}
nameFlied.addEventListener("input", check)
email.addEventListener("input", check)
password.addEventListener("input", check)
confirmPassword.addEventListener("input", check)

signupBtn.addEventListener("click", (e)=>{
e.preventDefault()
    let name = nameFlied.value;
    let emailField= email.value;
   let passwordField = password.value;
    let confirmPasswordField = confirmPassword.value;
    
    if(passwordField !== confirmPasswordField){
        alert("The password is not the same")
       return  signupBtn.disabled = true
    }
    if(!name || !emailField || !passwordField || !confirmPasswordField){
        alert("Fill in all the fields")
        return signupBtn.disabled = true
    }
    saveUserToLocalStorage(name, emailField, passwordField)
    
    
        window.location.href = "sign-in.html"
    
    
})



function saveUserToLocalStorage(name, email, password) {
    let user = {
        name: name,
        email: email,
        password: password
    };
    
    localStorage.setItem("user", JSON.stringify(user));
}


function getUserFromLocalStorage() {
    let userData = localStorage.getItem("user");
   if(userData){
    return JSON.parse(userData)
   }else{
    return null
   }
}

