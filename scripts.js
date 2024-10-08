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

/* Step 4: Scoring 
function scoring(){
    playerScore = 0;
    computerScore = 0;
    tie = 0;

    if (winner == "win"){
        return playerScore + 1;
    } else if (winner == "lose") {
        return computerScore + 1;
    } else if (winner == "tie") { 
        return tie + 1;
    }  

        /*{
        while (playerScore<1){
        playerScore++};
    } else if (winner == "lose"){
        while (computerScore<1){
        computerScore++};
    } 
   
    console.log(playerScore);
    console.log(computerScore);
}*/

/* Step 5: Play Single Round */
function playRound(){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    winner = checkWinner (humanChoice, computerChoice);
}

/* Step 6: Play Game */
function playGame(){
    for (let i = 0; i<5;i++){
    playRound();
    console.log("You chose: " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1));
    console.log("Computer chose: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1));
    console.log("Results: You " + winner + "!");
    console.log(" ");
    }
}

playGame();
scoring();

function scoring (){
let playerWins = 0;
let compWins = 0;
let tieGame = 0;
    if (winner == "win"){
        playerWins++
    } else if (winner == "lose"){
        compWins++
    } else if (winner == "tie") {
        tieGame++
    }


    console.log("Player: " + playerWins);
    console.log("Comp: " + compWins);
    console.log("Tie: " + tieGame);}