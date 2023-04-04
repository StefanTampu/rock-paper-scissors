function getComputerChoice(){
    let num = Math.ceil(Math.random()*3);
    if (num === 1){
        return "rock";
    } else if (num === 2){
        return "paper";
    } else {
        return "scissors";
    }
 }

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        console.log("Tie!");
    } else if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            console.log("You lose! Rock is beaten by paper.");
            ++computerScore;
        } else if (computerSelection == "scissors"){
            console.log("You win! Rock beats scissors.");
            ++playerScore;
        }
    } else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            console.log("You win! Paper beats rock.");
            return playerScore++;
        } else if (computerSelection == "scissors"){
            console.log("You lose! paper is beaten by scissors.");
            ++computerScore;
        }
    }  else if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            console.log("You lose! Scissors are beaten by rock.");
            ++computerScore;
        } else if (computerSelection == "paper"){
            console.log("You win! Scissors beat rock.");
            ++playerScore;
        }
    }
 }

function game(){
    let playerSelection = playerInput();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`Your Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if (playerScore > computerScore){
        console.log("You won the game!");
    } else if (playerScore < computerScore){
        console.log("You lost the game!");
    } else {
        console.log("Tie game!");
    }
}

//Button input section
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.id, getComputerChoice());
    });
  });
