const choices = ["rock", "paper", "scissors", "heart"];
let leftScore = 0;
let rightScore = 0;

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(leftChoice, rightChoice) {
    if (leftChoice === rightChoice) {
        return "It's a tie!";
    } else if (leftChoice === "heart") {
        leftScore++;
        return "Left Player wins";
    } else if (rightChoice === "heart") {
        rightScore++;
        return "Right Player wins";
    } else if (
        (leftChoice === "rock" && rightChoice === "scissors") ||
        (leftChoice === "paper" && rightChoice === "rock") ||
        (leftChoice === "scissors" && rightChoice === "paper")
    ) {
        leftScore++;
        return "Left Player wins";
    } else {
        rightScore++;
        return "Right Player wins";
    }
}

const leftChoiceImg = document.getElementById("left-choice-img");
const rightChoiceImg = document.getElementById("right-choice-img");
const resultText = document.getElementById("result-text");
const scoreText = document.getElementById("score");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => {
    const leftPlayerChoice = computerChoice();
    const rightPlayerChoice = computerChoice();
    
    leftChoiceImg.src = `${leftPlayerChoice}.png`; 
    rightChoiceImg.src = `${rightPlayerChoice}.png`; 
    
    const result = determineWinner(leftPlayerChoice, rightPlayerChoice);
    resultText.textContent = ` ${leftPlayerChoice},  ${rightPlayerChoice}. ${result}`;
    scoreText.textContent = `${leftScore} - ${rightScore}`;
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
    leftScore = 0;
    rightScore = 0;
    scoreText.textContent = `${leftScore} - ${rightScore}`;
    resultText.textContent = "";
    leftChoiceImg.src = "reset.png";
    rightChoiceImg.src = "reset.png";
});

});
