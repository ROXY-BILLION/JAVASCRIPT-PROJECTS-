let count = 0;

const countDisplay = document.getElementById("count");
const status = document.getElementById("status");

const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");

function updateCounter() {
    countDisplay.textContent = count;

    if (count === 0) {
        status.textContent = "Counter is at zero";
        countDisplay.style.color = "#ffffff";
    } else {
        status.textContent = "Counter is positive";
        countDisplay.style.color = "#d9ff62";
    }
}

function increaseCount() {
    count++;
    updateCounter();
}

function decreaseCount() {
    if (count > 0) {
        count--;
        updateCounter();
    }
}

function resetCount() {
    count = 0;
    updateCounter();
}

increaseButton.addEventListener("click", increaseCount);
decreaseButton.addEventListener("click", decreaseCount);
resetButton.addEventListener("click", resetCount);