/* Get Computer Choice*/
function getComputerChoice(){
    a = Math.floor(Math.random() *3);
    
    if (a == 1){
    return "Rock";
    } else if (a == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

/* Get Human Choice*/
function getHumanChoice(){
    let b = prompt("Rock? Paper? Scissors?", "Enter value here");
 if (b === "Rock"){
    return "Rock";
 } else if (b === "Paper"){
    return "Paper";
 } else if (b === "Scissors") {
    return "Scissors";
 } else {
    return "Please choose Rock, Paper, or Scissors";
 }
}

/* Variables*/
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
const results = playRound();
let humanScore = 0;
let computerScore = 0;


/* Play Round */
function playRound(){
    if (humanChoice === computerChoice) {
    return "Tie";
    } else if ((humanChoice === "Rock") && (computerChoice === "Paper")) {
    return "Lose";
    } else if ((humanChoice === "Rock") && (computerChoice === "Scissors")) {
    return "Win";
    } else if ((humanChoice === "Scissors") && (computerChoice === "Rock")) {
    return "Lose";
    } else if ((humanChoice === "Scissors") && (computerChoice === "Paper")) {
    return "Win";
    } else if ((humanChoice === "Paper") && (computerChoice === "Scissors")) {
    return "Lose";
    } else if ((humanChoice === "Paper") && (computerChoice === "Rock")) {
    return "Win";
    } 
}

/* Scoring */



function playGame(){
console.log("You chose: " + humanChoice);
console.log("Computer chooses: " + computerChoice);
console.log("You " + playRound(results));
console.log(humanScore + computerScore);
}

playGame();