let userScore = 0;
let computerScore = 0;
let userWin = document.getElementById("user-win");
let computerWin = document.getElementById("computer-win");
let text = document.getElementById("text");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

/**
 * Chooses a random number between 0 and 3 that collerates to 
 * rock, paper or scissors.
 */

function computerMove() {
    let input = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return input[randomNumber];
}

/**
 * Main game function that decides who wins the game and which function to
 * run there after. 
 */

function game(userinput) {
    let computerinput = computerMove();
    if (userinput === "rock") {
        if (computerinput  === "scissors") {
            win(computerinput);
        } else if (computerinput === "paper") {
            lose(computerinput);
        } else {
            draw(computerinput);
        }
    }

    if (userinput === "paper") {
            if (computerinput === "rock") {
                win(computerinput);
            } else if (computerinput === "scissors") {
                lose(computerinput);
            } else {
                draw(computerinput);
            }    
    }

    if (userinput === "scissors") {
        if (computerinput === "paper") {
            win(computerinput);
        } else if (computerinput === "rock") {
            lose(computerinput);
        } else {
            draw(computerinput);
        }    
    }
}
game();

/**
 * Functions run after user has completed a move. Each add score and display
 * a feedback message.
 */

function win(computerinput) {
    userScore++;
    userWin.innerHTML = userScore;
    computerWin.innerHTML = computerScore;
    text.innerHTML = `You Win!! Computer chose ${computerinput}.`;
}

function lose(computerinput) {
    computerScore++;
    userWin.innerHTML = userScore;
    computerWin.innerHTML = computerScore;
    text.innerHTML = `You Lost. Computer chose ${computerinput}.`;
}

function draw(computerinput) {
    userWin.innerHTML = userScore;
    computerWin.innerHTML = computerScore;
    text.innerHTML = `It's a Draw. Computer chose ${computerinput}.`;
}

/**
 * Event listeners that wait for the click to be activated. This runs the 
 * game after a user has made a choice.
 */

function eventListener() {
    rock.addEventListener('click', function() {
        game("rock");
    });
    paper.addEventListener('click', function() {
        game("paper");
    });
    scissors.addEventListener('click', function() {
        game("scissors");
    });
}

eventListener();