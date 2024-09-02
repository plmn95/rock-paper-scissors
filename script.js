const btns = document.querySelectorAll("button");
const divResults = document.querySelector("#result-container");
const pPlayer = document.createElement("p");
pPlayer.textContent = "Player Score: 0";
const pCPU = document.createElement("p");
pCPU.textContent = "CPU Score: 0";
const pLog = document.createElement("p");
divResults.appendChild(pPlayer);
divResults.appendChild(pCPU);
divResults.appendChild(pLog);

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

let humanScore = 0;
let computerScore = 0;

function playRound(player) {
    CPU = getComputerChoice();
    if (humanScore == 0 && computerScore == 0) {
        pPlayer.textContent = "Player Score: 0";
        pCPU.textContent = "CPU Score: 0";
    } 
    if (player == "scissors" && CPU == "paper" ||
        player == "paper" && CPU == "rock" ||
        player == "rock" && CPU == "scissors") {
            console.log("Player wins!");
            humanScore = humanScore + 1;
            pLog.textContent = "Player wins the round!";
            pPlayer.textContent = "Player Score: " + humanScore;
    } else if (
        player == "paper" && CPU == "scissors" ||
        player == "scissors" && CPU == "rock" ||
        player == "rock" && CPU == "paper") {
            console.log("CPU wins!");
            computerScore = computerScore + 1;
            pLog.textContent = "CPU wins the round!";
            pCPU.textContent = "CPU Score: " + computerScore;
    } else {
        console.log("Draw!");
        pLog.textContent = "The round is draw!";
    }
    if (humanScore == 5) {
        pLog.textContent = "Player reached 5 points. Game won!";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        pLog.textContent = "CPU reached 5 points. Game lost!";
        computerScore = 0;
        humanScore = 0;
    }
}

btns.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("player picks " + button.id);
        playRound(button.id);
    });
});

/* function playGame() {
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
} */