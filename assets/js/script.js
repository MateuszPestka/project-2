let userScore = 0;
let computerScore = 0;
let userWin = document.getElementById("user-win");
let computerWin = document.getElementById("computer-win");
let scoreCount = document.getElementsByClassName("score-count");
let text = document.getElementById("text");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

function computerMove() {
    let choice = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber];
}

function game(userChoice) {
    let computerChoice = computerMove();
if (userChoice === "rock") {
    if (computerChoice === "scissors") {
        win();
    } else if (computerChoice === "paper") {
        lose();
    } else {
        draw();
    }
}

if (userChoice === "paper") {
        if (computerChoice === "rock") {
            win();
        } else if (computerChoice === "scissors") {
            lose();
        } else {
            draw();
        }    
}

if (userChoice === "scissors") {
    if (computerChoice === "paper") {
        win();
    } else if (computerChoice === "rock") {
        lose();
    } else {
        draw();
    }    
}
}
game();

function change() {
    if (win()) {
        text.innerHTML = `Congratulations You Won!`
    } else if (lose()) {
        text.innerHTML = `You Lose. Try Again!`
    } else {
        text.innerHTML = `It's a draw try again`
    }
}

function win() {
    userScore++;
    userWin.innerHTML = userScore;
}

function lose() {
    computerScore++;
    computerWin.innerHTML = computerScore;
}

function draw() {
    
}

function eventListener() {
    rock.addEventListener('click', function() {
        game("rock");
    })
    paper.addEventListener('click', function() {
        game("paper");
    })
    scissors.addEventListener('click', function() {
        game("scissors");
    })
}

eventListener();