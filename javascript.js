const body = document.querySelector("body");

const results = document.createElement('div');
results.classList.add('results');
body.appendChild(results);

const score = document.createElement('div');
score.classList.add('score');
body.appendChild(score);

const winner = document.createElement('div');
winner.classList.add('winner');
body.appendChild(winner);

const playAgain = document.createElement('button');
playAgain.classList.add('button');

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
            results.textContent = "Tie!";
    } else if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            results.textContent = "You lose! Rock is beaten by paper.";
            computerScore++;
        } else if (computerSelection == "scissors"){
            results.textContent = "You win! Rock beats scissors.";
            playerScore++;
        }
    } else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            results.textContent = "You win! Paper beats rock.";
            playerScore++;
        } else if (computerSelection == "scissors"){
            results.textContent = "You lose! Paper is beaten by scissors.";
            computerScore++;
        }
    }  else if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            results.textContent = "You lose! Scissors are beaten by rock.";
            computerScore++;
        } else if (computerSelection == "paper"){
            results.textContent = "You win! Scissors beat rock.";
            playerScore++;
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
const buttons = document.querySelectorAll("#btn-container button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if(playerScore < 5 && computerScore < 5){
        playRound(button.id, getComputerChoice());
        score.textContent = `Your Score: ${playerScore} ------- Computer Score: ${computerScore}`;
      } else if(playerScore == 5){
        winner.textContent = "Congratulations! You won!";
        playAgain.textContent = "Play again?";
        body.appendChild(playAgain);
      } else if(computerScore == 5){
        winner.textContent = "Congratulations! You won!";
        playAgain.textContent = "Play again?";
        body.appendChild(playAgain);
      } 
    });
  });
