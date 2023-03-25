function getComputerChoice(){
    let num = Math.ceil(Math.random()*3);
    if (num === 1){
        return "Rock";
    } else if (num === 2){
        return "Paper";
    } else {
        return "Scissors";
    }
 }

 console.log(getComputerChoice());

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    let playerCap = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase(); 
    if (playerCap === computerSelection) {
        return "Tie!";
    } else if (playerCap == "Rock"){
        if (computerSelection == "Paper"){
            console.log("You lose! Rock is beaten by paper.");
            return computerScore++;
        } else if (computerSelection == "Scissors"){
            console.log("You win! Rock beats scissors.");
            return playerScore++;
        }
    } else if (playerCap == "Paper"){
        if (computerSelection == "Rock"){
            console.log("You win! Paper beats rock.");
            return playerScore++;
        } else if (computerSelection == "Scissors"){
            console.log("You lose! Paper is beaten by scissors.");
            return computerScore++;
        }
    }  else if (playerCap == "Scissors"){
        if (computerSelection == "Rock"){
            console.log("You lose! Scissors are beaten by rock.");
            return computerScore++;
        } else if (computerSelection == "Paper"){
            console.log("You win! Scissors beat rock.");
            return playerScore++;
        }
    }
 }

let playerSelection = "rock";
let computerSelection = getComputerChoice();


console.log(playerScore);
console.log(computerScore);