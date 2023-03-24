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
