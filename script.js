let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter Rock, Paper or Scissors");
  if (
    choice.toLowerCase() == "rock" ||
    choice.toLowerCase() == "paper" ||
    choice.toLowerCase() == "scissors"
  ) {
    return choice.toLowerCase();
  } else {
    return "Invalid choice, pick Rock, Paper or Scissors!";
  }
}

/* Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper. 
No for all

What inputs will your program have? 
2 variables passed as arguments to this function playRound().

Will the user enter data or will you get input from somewhere else?
The input will be retrieved from previous functions by assigning the function call to the variables

What’s the desired output?
Successfully have the computer and the human play one round of Rock, Paper, Scissors and increment the score of each based on who wins the round.

Given your inputs, what are the steps necessary to return the desired output?
1. First, compare the 2 inputs in the following manner: Rock beats Scissors, Scissors beats Paper, Paper beats Rock. Same input ties with itself
2. Between the computer and human, depending on who wins the round, display the winner
3. Increment the winner’s score*/
