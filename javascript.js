const body = document.querySelector("body");

const gameSection = document.getElementById("game-section");

const results = document.createElement('div');
results.classList.add('results');
gameSection.appendChild(results);

const score = document.createElement('div');
score.classList.add('score');
gameSection.appendChild(score);

const winner = document.createElement('div');
winner.classList.add('winner');
gameSection.appendChild(winner);

const playAgain = document.createElement('button');
playAgain.classList.add('button');
playAgain.textContent = "Play again?";

let playerScore = 0;
let computerScore = 0;

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
            winner.textContent = "Congratulations! You won the game!";
            gameSection.appendChild(playAgain);
        } else if(computerScore == 5){
            winner.textContent = "The computer won.... Better luck next time!";
            gameSection.appendChild(playAgain);
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

playAgain.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    results.textContent = "";
    score.textContent = "";
    winner.textContent = "";
    gameSection.removeChild(playAgain);
});
