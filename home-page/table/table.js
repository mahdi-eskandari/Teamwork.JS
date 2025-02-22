document.addEventListener("DOMContentLoaded", () => {
    const leaderboardElement = document.getElementById("leaderboard");
    const toggleScoresBtn = document.getElementById("toggleScoresBtn");

    const renderLeaderboard = (ascending = false) => {
        leaderboardElement.innerHTML = "";
        let leaderboardData = JSON.parse(localStorage.getItem("leaderboard")) || [];
        const sortedLeaderboard = leaderboardData.sort((a, b) =>
            ascending ? a.score - b.score : b.score - a.score
        );

        if (sortedLeaderboard.length === 0) {
            leaderboardElement.innerHTML = `<tr><td colspan="3">No scores available</td></tr>`;
            return;
        }

        sortedLeaderboard.forEach((player, index) => {
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.innerHTML = `${player.name}`;
            row.appendChild(nameCell);

            const scoreCell = document.createElement("td");
            scoreCell.innerHTML = `${player.score}`;
            row.appendChild(scoreCell);

            leaderboardElement.appendChild(row);
        });
    };

    toggleScoresBtn.addEventListener("click", () => {
        const isAscending = toggleScoresBtn.textContent === "Show Lowest Scores";
        toggleScoresBtn.textContent = isAscending
            ? "Show Highest Scores"
            : "Show Lowest Scores";
        renderLeaderboard(isAscending);
    });

    renderLeaderboard(); // بارگذاری جدول با ترتیب پیش‌فرض (از بیشترین امتیاز به کمترین)
});
