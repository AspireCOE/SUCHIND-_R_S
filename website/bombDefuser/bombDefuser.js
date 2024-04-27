
let timerEl = document.getElementById("timer");
let userTxtEl = document.getElementById("defuser");

let countdown = 10;

let intervalId = setInterval(function() {
    countdown = countdown - 1;
    timerEl.textContent = countdown;
    if (countdown === 0) {
        timerEl.textContent = "BOOM";
        clearInterval(intervalId);
    }
}, 1000);

userTxtEl.addEventListener('keydown', function(event) {
    let userEnteredTxt = userTxtEl.value;
    if (event.key === "Enter" && userEnteredTxt === "defuse" && userEnteredTxt !== 0) {
        timerEl.textContent = "YOU DID IT WELL";
        clearInterval(intervalId);
    }
});