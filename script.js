computerScore = 0;
humanScore = 0;

function getComputerChoice() {
    let choice = Math.random() * 3;
    choice = Math.floor(choice);
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}


function getHumanChoice() {
    let choice = prompt('Entrez un nombre entre 0 et 2, 0 = rock 1 = paper 2 = scissors');
    if (choice == 0) {
        choice = 'rock';
    } else if (choice == 1) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    } 
    return choice;
}


function playRound(humanChoice,computerChoice) {
    //verifies if a player has 5 points 
    if (humanChoice == 5 ||computerChoice == 5) {
        return;
    }
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        round.textContent = 'DRAW!';
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        round.textContent = 'You lose!Paper beats rock';
        computerScore++;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        round.textContent = 'You win! Rock beats scissors';
        humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        round.textContent = 'You win! scissors beats paper';
        humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        round.textContent = 'You lose! Rock beats scissors';
        computerScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        round.textContent = 'You win! Paper beats Rock';
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        round.textContent = 'You lose! Scissors beats paper';
        computerScore++;
    }
    result.textContent = `Current score: Human ${humanScore} VS ${computerScore} Computer`;
    if (humanScore == 5) {
        winner.textContent = "Human has won! Score :" + humanScore + " : " + computerScore;
    }
    if (computerScore == 5) {
        winner.textContent = "Human has won! Score :" + humanScore + " : " + computerScore;
    }
}



let buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
    button.addEventListener("click",(e) => {
        let humanChoice = e.target.className;
        playRound(humanChoice,getComputerChoice());
    })
});

let round = document.querySelector("#round");
let result = document.querySelector("#result");
let winner = document.querySelector("#winner");