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



function playRound(computerSelection){
    let pls = prompt("please enter rock, paper or scissor").toLowerCase();

    let result = "";
    if(pls === computerSelection){
        result = "This round is Tie!";
    }else if(pls === "paper" && computerSelection === "rock"){
        result =`player wins ${pls} beats ${computerSelection}`
    }else if(pls === "rock" && computerSelection === "paper"){
        result =`computer wins ${computerSelection} beats ${pls}`
    }else if(pls === "rock" && computerSelection === "scissor"){
        result =`player wins ${pls} beats ${computerSelection}`
    }else if(pls === "scissor" && computerSelection === "rock"){
        result =`computer wins ${computerSelection} beats ${pls}`
    }else{
        result =`player wins ${pls} beats ${computerSelection}`
    }


    return result;

}


const computerSelection = getComputerChoice();
console.log(playRound(computerSelection))