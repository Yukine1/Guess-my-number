"use strict";
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 😊';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log((document.querySelector('.guess').value = 0));
*/ let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highScoreNumber = 0;
const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};
// Buttor (Check!)
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    // When there is no input
    if (!guess) // console.log(
    //   (document.querySelector('.message').textContent = '⛔ No number!')
    // );
    displayMessage("⛔ No number!");
    else if (guess === secretNumber) {
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;
        displayMessage("\uD83D\uDE0A Correct number!");
        // console.log(
        //   (document.querySelector('.message').textContent = '😊 Correct number!')
        // );
        // Highscore
        if (scoreNumber > highScoreNumber) {
            highScoreNumber = scoreNumber;
            document.querySelector(".highscore").textContent = highScoreNumber;
        }
    } else if (guess !== secretNumber) {
        if (scoreNumber > 1) {
            // console.log(
            //   (document.querySelector('.message').textContent =
            //     guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
            // );
            displayMessage(guess > secretNumber ? "\uD83D\uDCC8 Too high!" : "\uD83D\uDCC9 Too low!");
            scoreNumber--;
            document.querySelector(".score").textContent = scoreNumber;
        }
    } else {
        // document.querySelector('.message').textContent = '💥 You lost the game!';
        displayMessage("\uD83D\uDCA5 You lost the game!");
        document.querySelector(".score").textContent = 0;
    }
});
// Button again
document.querySelector(".again").addEventListener("click", function() {
    scoreNumber = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    // document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector(".score").textContent = 20;
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").textContent = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
});

//# sourceMappingURL=index.672d4772.js.map
