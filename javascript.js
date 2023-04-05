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
            return ++computerScore;
        } else if (computerSelection == "scissors"){
            results.textContent = "You win! Rock beats scissors.";
            return ++playerScore;
        }
    } else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            results.textContent = "You win! Paper beats rock.";
            return ++playerScore;
        } else if (computerSelection == "scissors"){
            results.textContent = "You lose! Paper is beaten by scissors.";
            return ++computerScore;
        }
    }  else if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            results.textContent = "You lose! Scissors are beaten by rock.";
            return ++computerScore;
        } else if (computerSelection == "paper"){
            results.textContent = "You win! Scissors beat rock.";
            return ++playerScore;
        }
    }
    
 }

function game(input){
    if(playerScore < 5 && computerScore < 5){
        playRound(input, getComputerChoice());
        score.textContent = `Your Score: ${playerScore} ------- Computer Score: ${computerScore}`;
        if(playerScore == 5){
            winner.textContent = "Congratulations! You won!";
            playAgain.textContent = "Play again?";
            body.appendChild(playAgain);
        } else if(computerScore == 5){
            winner.textContent = "Congratulations! You won!";
            playAgain.textContent = "Play again?";
            body.appendChild(playAgain);
        } 
    }
}

//Button input section
const buttons = document.querySelectorAll("#btn-container button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    });
  });
