const p_score = document.querySelector(".para-score");
let activeUser = JSON.parse(localStorage.getItem("activeUser"));

if (activeUser) {
    p_score.textContent = `Hello, ${activeUser.name} (Score: ${activeUser.score || 0})`;
} else {
    p_score.textContent = "Hello, Guest";
}

const button = document.querySelector("#con-button-score .button");
button.addEventListener("click", () => {
    window.location.href = "table/index.html";
});

const selectOption = document.querySelector("#select-option");
const startButton = document.querySelector(".button-start");

startButton.addEventListener("click", () => {
    const selectedLevel = selectOption.value;

    localStorage.setItem("gameLevel", selectedLevel);

    window.location.href = "../pages/index.html";
});


function updateUserScore(newScore) {
    let activeUser = JSON.parse(localStorage.getItem("activeUser"));
    if (activeUser) {
        activeUser.score = newScore;
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
    }
}
