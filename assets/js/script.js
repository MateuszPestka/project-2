let userScore = 0;
let computerScore = 0;
let userWin = document.getElementsByClassName("user-win");
let computerWin = document.getElementsByClassName("computer-win");
let scoreCount = document.getElementsByClassName("score-count");
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
}

game();

function win() {
    console.log("You won")
}

function lose() {
    console.log("you lose")
}

function draw() {
    console.log("its a draw")
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