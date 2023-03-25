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

function playerInput(){
    let input = prompt("Choose: rock, paper or scissors");
    let inputCap = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    while (inputCap != "Rock" && inputCap != "Paper" && inputCap != "Scissors"){
        input = prompt("Invalid choice. Pick either: rock, paper or scissors");
        inputCap = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    }
    return inputCap;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        console.log("Tie!");
    } else if (playerSelection == "Rock"){
        if (computerSelection == "Paper"){
            console.log("You lose! Rock is beaten by paper.");
            ++computerScore;
        } else if (computerSelection == "Scissors"){
            console.log("You win! Rock beats scissors.");
            ++playerScore;
        }
    } else if (playerSelection == "Paper"){
        if (computerSelection == "Rock"){
            console.log("You win! Paper beats rock.");
            return playerScore++;
        } else if (computerSelection == "Scissors"){
            console.log("You lose! Paper is beaten by scissors.");
            ++computerScore;
        }
    }  else if (playerSelection == "Scissors"){
        if (computerSelection == "Rock"){
            console.log("You lose! Scissors are beaten by rock.");
            ++computerScore;
        } else if (computerSelection == "Paper"){
            console.log("You win! Scissors beat rock.");
            ++playerScore;
        }
    }
 }


function game(){
    for (let i=0; i<5; i++){
        let playerSelection = playerInput();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`Your Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
    if (playerScore > computerScore){
        console.log("You won the game!");
    } else if (playerScore < computerScore){
        console.log("You lost the game!");
    } else {
        console.log("Tie game!");
    }
}

game ();