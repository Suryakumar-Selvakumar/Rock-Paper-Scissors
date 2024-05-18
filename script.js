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
    return "an Invalid choice, pick Rock, Paper or Scissors!";
  }
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("You Win! Rock beats Scissors");
      humanScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("You Lose! Paper beats Rock");
      computerScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("You Win! Paper beats Rock");
      humanScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("You Lose! Scissors beats Paper");
      computerScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("You Win! Scissors beats Paper");
      humanScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("You Lose! Rock beats Scissors");
      computerScore += 1;
    } else if (
      (humanChoice == "rock" && computerChoice == "rock") ||
      (humanChoice == "paper" && computerChoice == "paper") ||
      (humanChoice == "scissors" && computerChoice == "scissors")
    ) {
      console.log("It's a Tie!");
    } else {
      console.log("You Made an Invalid Choice, This Round Goes to No one!");
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    console.log(`You Chose ${humanSelection}`);
    const computerSelection = getComputerChoice();
    console.log(`Computer Chose ${computerSelection}`);
    playRound(humanSelection, computerSelection);
  }

  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log(`You Won ${humanScore} Round(s), You Win!`);
  } else if (computerScore > humanScore) {
    console.log(
      `You Lost! The Computer Won ${computerScore} Round(s), Computer Wins!`
    );
  } else {
    console.log(
      `It's a Tie! You Won ${humanScore} Round(s) and The Computer Won ${computerScore} Round(s)`
    );
  }
}

playGame();
