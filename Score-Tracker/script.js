let playerOneScore = 0;
let playerTwoScore = 0;

const playerOneDisplay = document.getElementById("playerOneScore");
const playerTwoDisplay = document.getElementById("playerTwoScore");

const matchStatus = document.getElementById("matchStatus");

const playerOneIncrease = document.getElementById("playerOneIncrease");
const playerOneDecrease = document.getElementById("playerOneDecrease");

const playerTwoIncrease = document.getElementById("playerTwoIncrease");
const playerTwoDecrease = document.getElementById("playerTwoDecrease");

const resetMatch = document.getElementById("resetMatch");

function updateScores() {
    playerOneDisplay.textContent = playerOneScore;
    playerTwoDisplay.textContent = playerTwoScore;

    if (playerOneScore > playerTwoScore) {
        matchStatus.textContent = "Player One is leading";
    } else if (playerTwoScore > playerOneScore) {
        matchStatus.textContent = "Player Two is leading";
    } else {
        matchStatus.textContent = "Match in progress";
    }
}

function increasePlayerOneScore() {
    playerOneScore++;
    updateScores();
}

function decreasePlayerOneScore() {
    if (playerOneScore > 0) {
        playerOneScore--;
        updateScores();
    }
}

function increasePlayerTwoScore() {
    playerTwoScore++;
    updateScores();
}

function decreasePlayerTwoScore() {
    if (playerTwoScore > 0) {
        playerTwoScore--;
        updateScores();
    }
}

function resetScores() {
    playerOneScore = 0;
    playerTwoScore = 0;

    updateScores();
}

playerOneIncrease.addEventListener("click", increasePlayerOneScore);
playerOneDecrease.addEventListener("click", decreasePlayerOneScore);

playerTwoIncrease.addEventListener("click", increasePlayerTwoScore);
playerTwoDecrease.addEventListener("click", decreasePlayerTwoScore);

resetMatch.addEventListener("click", resetScores);