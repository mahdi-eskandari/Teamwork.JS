const tbody = document.querySelector(".tbody");

let users = JSON.parse(localStorage.getItem('users')) || []

tbody.innerHTML = "";
users.forEach(user => {
    let row = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.textContent = user.name;

    let emailCell = document.createElement("td");
    emailCell.textContent = user.email;

    row.appendChild(nameCell);
    row.appendChild(emailCell);

    tbody.appendChild(row);
});
