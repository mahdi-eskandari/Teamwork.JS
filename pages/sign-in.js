const signinBtn = document.querySelector(".btn");

signinBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        alert(`Welcome, ${foundUser.name}!`);

        localStorage.setItem("activeUser", JSON.stringify(foundUser));

        window.location.href = "../home-page/index.html";
    } else {
        alert("Email or password is incorrect");
    }
});
