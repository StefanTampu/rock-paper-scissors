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

 function playRound(playerSelection, computerSelection){
    let playerCap = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if (playerCap === computerSelection) {
        return "Tie!";
    } else if (playerCap == "Rock"){
        if (computerSelection == "Paper"){
            return "You lose! Rock is beaten by paper.";
        } else if (computerSelection == "Scissors"){
            return "You win! Rock beats scissors.";
        }
    } else if (playerCap == "Paper"){
        if (computerSelection == "Rock"){
            return "You win! Paper beats rock."
        } else if (computerSelection == "Scissors"){
            return "You lose! Paper is beaten by scissors."
        }
    }  else if (playerCap == "Scissors"){
        if (computerSelection == "Rock"){
            return "You lose! Scissors are beaten by rock."
        } else if (computerSelection == "Paper"){
            return "You win! Scissors beat rock."
        }
    }
 }
