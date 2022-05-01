let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 0;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

// Determines which guess is closest to the target number.

function compareGuesses(human, computerGuess, target) {
    var humanDif = Math.abs(human - target);
    var computerDif = Math.abs(computerGuess - target)
    return humanDif <= computerDif;
};

// Increases the winners score each round.

function updateScore(winner) {
    if (winner === "human") {
        humanScore += 1;
    }
    else if (winner === "computer") {
        computerScore += 1;
    }
    return `The winner is: ${winner}`;
}

// Updates the round number each round.

function advanceRound() {
    currentRoundNumber += 1;
}



// Runs the code in console. This was for testing.

console.log(generateTarget());
console.log(compareGuesses(3,5,6));
console.log(updateScore("computer"));
console.log(advanceRound());