let humanScore = 0;
let computerScore = 0;

function translate(num){
    if (num == 1){
        return "Rock";
    }else if (num == 2){
        return "Paper";
    }else if (num == 3){
        return "Scissor";
    }
}

function getComputerChoice(){
    let comp = Math.random();
    if (comp <= 0.3){
        return 1;
    }else if (comp > 0.3 & comp <= 0.6){
        return 2;
    }else{
        return 3;
    }
}

function getHumanChoice(){
    let human = Number(prompt("1. Rock\n 2. Paper\n 3. Scissor"));
    return human;
}

function playRound(humanChoice=getHumanChoice(), computerChoice=getComputerChoice()){
    if(humanChoice == computerChoice){
        return "Draw! " + translate(humanChoice) + " & " + translate(computerChoice);
    }else if ((humanChoice == 1 && computerChoice == 3) || (humanChoice == 2 && computerChoice == 1) || (humanChoice == 3 && computerChoice == 2)) {
        ++humanScore;
        return "You Win! " + translate(humanChoice) + " beats " + translate(computerChoice);
    }else {
        ++computerScore;
        return "You Lose! " + translate(computerChoice) + " beats " + translate(humanChoice);
    }
}

function playGame(){
    for(i=0; i<5; i++){
        console.log(playRound());
        console.log("Score: Human = " + humanScore +" Computer = " + computerScore);
    }
    return "Final Score: Human = " + humanScore +" Computer = " + computerScore;
}

console.log(playGame());
