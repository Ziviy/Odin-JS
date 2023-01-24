function getComputerSelection() {
    const choice = ["rock", "paper", "scissors"];
    random = Math.floor(Math.random() * (3 - 0) + 0);
    return choice[random];
}

function getPlayerSelection(e) {
    let playerSelection = e.target.innerText.toLowerCase();
    let computerSelection = getComputerSelection().toLowerCase();
    game(computerSelection, playerSelection);
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

function game(computerSelection, playerSelection) {

    let gameResult = playRound(computerSelection, playerSelection);
    if (playerScore < 5 && computerScore < 5) {
        if (gameResult == "Player wins") {
            playerScore++;
            refreshScore();
        }
        else if (gameResult == "Computer wins") {
            computerScore++;
            refreshScore();
        }
        else {
            ties++;
            refreshScore();
        }
    }
    
}

function refreshScore() {

    if (playerScore == 5) {
        let txt = document.createTextNode("Player wins!");
        let results = document.querySelector(".results");
        results.innerText = "";
        results.style.cssText = "font-weight: 700;";
        results.appendChild(txt);
        playerScore++;

    }
    else if (computerScore == 5) {
        let txt = document.createTextNode("Computer wins!");
        let results = document.querySelector(".results");
        results.innerText = "";
        results.style.cssText = "font-weight: 700;";
        results.appendChild(txt);
        computerScore++;
    }
    else {
        document.querySelector(".results").textContent = "Player score is " + playerScore + ". Computer score is: " 
        + computerScore + ". Ties: " + ties;
    }
}

// Adding event listeners to buttons
const buttons = document.querySelectorAll(".button");
buttons.forEach( button => {
    button.addEventListener('click', getPlayerSelection);
})

// let computerSelection = getComputerSelection();
// let playerSelection = getPlayerSelection();


var playerScore = 0;
var computerScore = 0;
var ties = 0;