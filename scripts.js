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
computerChoice = getComputerChoice();

/* Step 3: Player Choice */
function getHumanChoice (){
    b = prompt ("rock? paper? scissors?");
    b = b.toLowerCase();

    if ((b == "rock") || (b == "paper") || (b == "scissors")){
    return b;
    } else {
        getHumanChoice();
    }
}
humanChoice = getHumanChoice();

/* Step 5: Single Round */
function playRound(){
    if (humanChoice == computerChoice) {
    return "tie";
    } else if (((humanChoice == "rock") && (computerChoice == "scissors")) || ((humanChoice == "paper") && (computerChoice == "rock")) || ((humanChoice == "scissors") && (computerChoice == "paper"))) {
    return "win";
    } else {
    return "lose";
    }
}
results = playRound();

/* Step 4: Scoring */
humanScore = 0;
computerScore = 0;
if (results == "win") {
    humanScore++;
} else if (results == "lose") {
    computerScore++;
}

/* Step 6: Play Entire Game */
function playGame(){
    for (let i = 0; i <+5; i++) {
    playRound();  
    }
}

results = playGame();
console.log(results);