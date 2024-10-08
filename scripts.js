/* Step 2: Computer Choice*/
function getComputerChoice(){
    a = Math.floor(Math.random() *3);

    if (a==0) {
        return "rock";
    } else if (a==1){
        return "paper";
    } else {
        return "scissors";
    }
}

/* Step 3: Player Choice */
function getHumanChoice (){
    b = prompt ("Rock? Paper? Scissors?", "Enter here");
    b = b.toLowerCase();

    if ((b == "rock") || (b == "paper") || (b == "scissors")){
    return b;
    } else {
        getHumanChoice();
    }
}
/* Step 4: Scoring */
let humanScore = 0;
let computerScore = 0;
let tieGame = 0;

function scoring(){
    console.log("Final Player Score: " + humanScore);
    console.log("Final Computer Score: " + computerScore);
    console.log("Tie Games: " + tieGame);
    
    if (humanScore > (computerScore && tieGame)){
        console.log("Official Results: You Win! :)")
    } else if (computerScore > (humanScore && tieGame)) {
        console.log("Official Results: You Lose! :(")
    } else {
        console.log("Official Results: Tie Game. Try again!")
    }
}

/* Step 5: Game Rules */
function checkWinner(a,b){
    if (a == b) {
    return "tie";
    } else if (((a == "rock") && (b == "scissors")) || ((a == "paper") && (b == "rock")) || ((a == "scissors") && (b == "paper"))) {
    return "win";
    } else {
    return "lose";
    }
}

/* Step 5: Play Single Round */
function playRound(){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    winner = checkWinner (humanChoice, computerChoice);
    if (winner == "win"){
        return humanScore++;
    } else if (winner == "lose"){
        return computerScore++;
    } else if (winner == "tie"){
        return tieGame++;
    }
}

/* Step 6: Play Game */
function playGame(){
    for (let round = 0; round<5;round++){
    playRound();
    console.log("You chose: " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1));
    console.log("Computer chose: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1));
    console.log("Results: You " + winner + "!");
    console.log(" ");
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
    console.log(" ");
    }
}

playGame();
scoring();