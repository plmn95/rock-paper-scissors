console.log("obicham hui");

function js() {
    console.log("test");
}

function getComputerChoice() {
    random = Math.random()
    if (random <= 0.33) {
        return "scissors";
    } else if (random >= 0.34 && random <= 0.66) {
        return "rock";
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    choice = prompt();
    choice = choice.toLowerCase();
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(CPU, player) {
    player = getHumanChoice();
    CPU = getComputerChoice();
    console.log(player);
    console.log(CPU);
    if (player == "scissors" && CPU == "paper" ||
        player == "paper" && CPU == "rock" ||
        player == "rock" && CPU == "scissors") {
            console.log("Player wins!");
            humanScore = humanScore + 1;
    } else if (player == "paper" && CPU == "scissors" ||
            player == "scissors" && CPU == "rock" ||
            player == "rock" && CPU == "paper") {
                console.log("CPU wins!");
                computerScore = computerScore + 1;
    } else {
                console.log("Draw!");
    }
}

function playGame() {
    for(let i = 0; i < 5; i++){
        playRound();
    }
    if(humanScore > computerScore){
        console.log("Player wins the game!");
    }else if(computerScore > humanScore){
        console.log("Computer wins the game!");
    }else{
        console.log("The game is draw!");
    }
}