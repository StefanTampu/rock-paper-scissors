let playerScore = 0;
let computerScore = 0;

const body = document.querySelector("body");

const gameSection = document.getElementById("game-section");

const btnContainer = document.getElementById("btn-container");

const results = document.createElement('div');
results.classList.add('results');
gameSection.insertBefore(results, btnContainer);

const pScore = document.getElementById('player-score');
const cScore = document.getElementById("computer-score");

const winner = document.createElement('div');
winner.classList.add('winner');
gameSection.insertBefore(winner, btnContainer);

const playAgain = document.createElement('button');
playAgain.classList.add('button', 'playagain');
playAgain.textContent = "PLAY AGAIN";



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
            results.textContent = `It's a tie! You both chose ${playerSelection}.`;
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
        pScore.textContent = `${playerScore}`;
        cScore.textContent = `${computerScore}`;
        if(playerScore == 5){
            winner.textContent = "Congratulations! You won the game!";
            gameSection.insertBefore(playAgain, btnContainer);
        } else if(computerScore == 5){
            winner.textContent = "The computer won.... Better luck next time!";
            gameSection.insertBefore(playAgain, btnContainer);
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
    pScore.textContent = `${playerScore}`;
    cScore.textContent = `${computerScore}`;
    winner.textContent = "";
    gameSection.removeChild(playAgain);
});
