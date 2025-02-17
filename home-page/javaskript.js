showUser()

function showUser() {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // users.sort((a, b) => b.score - a.score);
    // let topUsers = users.slice(0, 10);

    let tableContainer = document.getElementById("con-table");

    tableContainer.innerHTML = "";

    let table = document.createElement("table");
    table.setAttribute("border", "1");
    table.classList.add("table");

    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");

    let thName = document.createElement("th");
    thName.textContent = "Name";
    let thScore = document.createElement("th");
    thScore.textContent = "Score";

    headerRow.appendChild(thName);
    headerRow.appendChild(thScore);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    let tbody = document.createElement("tbody");

    topUsers.forEach(user => {
        let row = document.createElement("tr");

        let tdName = document.createElement("td");
        tdName.textContent = user.username;

        let tdEmail = document.createElement("td");
        tdEmail.textContent = user.email

        row.appendChild(tdName);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

