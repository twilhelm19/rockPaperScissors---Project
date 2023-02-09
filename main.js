//Rock, Paper, Scissors Project

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase(); 
    if(userInput === 'rock') {
        return userInput
    } else if(userInput ===  'paper') {
        return userInput
    } else if(userInput === 'scissors') {
        return userInput
    } else if (userInput === 'bomb') {
        return userInput
    } else {
        console.log('Not a valid input')
    }
}

function getComputerChoice() {
    var compNum = Math.floor(Math.random() * 3)
    if(compNum === 0) {
        return 'rock'
    } else if(compNum === 1) {
        return 'paper'
    } else if(compNum === 2) {
        return 'scissors'
    }
}

function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
        return 'The game was a tie!'
    }
    if(userChoice === 'rock') {
        if(computerChoice === 'paper') {
            return 'The computer won!'
        } else {
            return 'The user won!'
        }
    } 
    if(userChoice === 'paper') {
        if(computerChoice === 'scissors') {
            return 'The computer won!'
        } else if (computerChoice === 'rock') {
            return 'The user won!'
        }
    }
    if(userChoice === 'scissors') {
        if(computerChoice === 'rock') {
            return 'The computer won!'
        } else if (computerChoice === 'paper') {
            return 'The user won!'
        }
    } else if(userChoice === 'bomb') {
        return 'User automatically wins!'
    }     
}

function playGame() {
    var userChoice = getUserChoice('paper');
    var computerChoice = getComputerChoice(); 
    console.log(userChoice); 
    console.log(computerChoice); 
    console.log(determineWinner(userChoice, computerChoice)); 
}

playGame(); 
