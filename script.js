console.log("Hello World");

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
}