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
            win(computerChoice);
        } else if (computerChoice === "paper") {
            lose(computerChoice);
        } else {
            draw(computerChoice);
        }
    }

    if (userChoice === "paper") {
            if (computerChoice === "rock") {
                win(computerChoice);
            } else if (computerChoice === "scissors") {
                lose(computerChoice);
            } else {
                draw(computerChoice);
            }    
    }

    if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            win(computerChoice);
        } else if (computerChoice === "rock") {
            lose(computerChoice);
        } else {
            draw(computerChoice);
        }    
    }
}
game();

function win(computerChoice) {
    userScore++;
    userWin.innerHTML = userScore;
    computerWin.innerHTML = computerScore;
    text.innerHTML = `You Win!! Computer chose ${computerChoice}.`;
}

function lose(computerChoice) {
    computerScore++;
    userWin.innerHTML = userScore;
    computerWin.innerHTML = computerScore;
    text.innerHTML = `You Lost. Computer chose ${computerChoice}.`;
}

function draw(computerChoice) {
    userWin.innerHTML = userScore;
    computerWin.innerHTML = computerScore;
    text.innerHTML = `It's a Draw. Computer chose ${computerChoice}.`;
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