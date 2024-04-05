function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    let choice = "";
    if(computerChoice === 1){
        choice = "rock";
    }else if(computerChoice === 2){
        choice = "paper";
    }else{
        choice = "scissor";
    }

    return choice;
}



function playRound(playerSelection, computerSelection){
    let playerValidSelection = playerSelection.toLowerCase();
    let result = "";
    if(playerValidSelection === computerSelection){
        result = "This round is Tie!";
    }else if(playerValidSelection === "paper" && computerSelection === "rock"){
        result = `player wins ${playerValidSelection} beats ${computerSelection}`
    }

    

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))