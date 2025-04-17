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
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        console.log("Draw!");
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('You lose!Paper beats rock');
        computerScore++;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You win! Rock beats scissors');
        humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log('You win! scissors beats paper');
        humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log('You lose! Rock beats scissors');
        computerScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You win! Paper beats Rock');
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log('You lose! Scissors beats paper');
        computerScore++;
    }
}

function playGame() {
    while (true) {
        if (humanScore == 5) {
            console.log("Human has won! Score :" + humanScore + " : " + computerScore);
            break;
        }
        if (computerScore == 5) {
            console.log("Human has won! Score :" + humanScore + " : " + computerScore);
            break;
        }
        playRound(getHumanChoice(),getComputerChoice());
        console.log(`Current score: Human ${humanScore} VS ${computerScore} Computer`)
    }
}

playGame();