function getComputerSelection() {
    const choice = ["rock", "paper", "scissors"];
    random = Math.floor(Math.random() * (3 - 0) + 0);
    return choice[random];
}

function getPlayerSelection() {
    let playerSelection = prompt("Type your choice: ");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
    
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return("Player wins");
        }
        else if (computerSelection == "paper") {
            return("Computer wins");
        }
        else {
            return("Tie");
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return("Computer wins");
        }
        else if (computerSelection == "paper") {
            return("Player wins");
        }
        else {
            return("Tie");
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return("Computer wins");
        }
        else if (computerSelection == "rock") {
            return("Player wins");
        }
        else {
            return("Tie");
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let gameResult = playRound(getComputerSelection(), getPlayerSelection());
        if (gameResult == "Player wins") {
            playerScore++;
            console.log(gameResult + "! Player score is " + playerScore + ". Computer score is: " + computerScore);
        }
        else if (gameResult == "Computer wins") {
            computerScore++;
            console.log(gameResult + "! Player score is " + playerScore + ". Computer score is: " + computerScore);
        }
        else {
            console.log(gameResult);
        }
    }
}
// let computerSelection = getComputerSelection();
// let playerSelection = getPlayerSelection();


