// ---- Global State ---
let playerScore = 0;
let computerScore = 0;

// --- Selectors ---
const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".button-container button");
const playAgain = document.querySelector(".again");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");


// --- Event listeners ---
buttons.forEach((button) => {
    button.addEventListener("click", (event) => gameStart(event));
});

playAgain.addEventListener("click", resetGame);

// --- Functions ---
function gameStart(event){
    const playerChoice = event.target.className;     // className if class ="rock class2 class3" it will return string of class instead of array of class
    player.textContent = "Player " + playerChoice; // safer option is classList[0] = it will get rock only as it is the first class 

    const computerChoice = getComputerChoice();
    computer.textContent = "Computer " + computerChoice;

    playRound(playerChoice, computerChoice);

    result.textContent = "Player " + playerScore + " : " + computerScore + " Computer";

    if (playerScore + computerScore === 5){
        endGame();
    }
}

function getComputerChoice(){
    let comp = Math.random();
    if (comp <= 0.33) return "ROCK";
    else if (comp <= 0.66) return "PAPER";
    else return "SCISSOR";
}

function playRound(playerChoice, computerChoice){
    if(playerChoice == computerChoice) return;
    if (
        (playerChoice == "ROCK" && computerChoice == "SCISSOR") || 
        (playerChoice == "PAPER" && computerChoice == "ROCK") || 
        (playerChoice == "SCISSOR" && computerChoice == "PAPER")
    ) {
        playerScore++;
    }else {
        computerScore++;
    }
}

function endGame(){
    if (playerScore > computerScore) {
        result.textContent = "You win! " + playerScore + " : " + computerScore;
    } else {
        result.textContent = "You lose! " + playerScore + " : " + computerScore;
    }

    buttons.forEach((button) => (button.disabled = true));
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    player.textContent = "Player: ";
    computer.textContent = "Computer: ";
    result.textContent = "New game started!";
    
    buttons.forEach((button) => (button.disabled = false));
}