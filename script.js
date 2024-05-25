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

function getHumanChoice(choice) {
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
  const paraResult = document.getElementById("para-result");
  const paraHumanScore = document.getElementById("para-human-score");
  const paraComputerScore = document.getElementById("para-computer-score");

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
      paraResult.textContent = "You Win! Rock beats Scissors";
      humanScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      paraResult.textContent = "You Lose! Paper beats Rock";
      computerScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      paraResult.textContent = "You Win! Paper beats Rock";
      humanScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      paraResult.textContent = "You Lose! Scissors beats Paper";
      computerScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      paraResult.textContent = "You Win! Scissors beats Paper";
      humanScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      paraResult.textContent = "You Lose! Rock beats Scissors";
      computerScore += 1;
    } else if (
      (humanChoice == "rock" && computerChoice == "rock") ||
      (humanChoice == "paper" && computerChoice == "paper") ||
      (humanChoice == "scissors" && computerChoice == "scissors")
    ) {
      paraResult.textContent = "It's a Tie!";
    }
    paraHumanScore.innerText = `Your Score: ${humanScore}`;
    paraComputerScore.innerText = `Computer Score: ${computerScore}`;
  }

  let humanSelection;

  const btnRock = document.querySelector("btn-rock");
  btnRock.style.margin = "5px";

  const btnPaper = document.querySelector("btn-paper");
  btnPaper.style.margin = "5px";

  const btnScissors = document.querySelector("btn-scissors");
  btnScissors.style.margin = "5px";

  const play = document.querySelector("play");
  play.style.display = "block";
  play.style.marginLeft = "50px";
  play.style.marginTop = "10px";
  play.style.padding = "3px 22px";

  const body = document.querySelector("body");

  const paraHumanChoice = document.querySelector("para-human-choice");

  const paraComputerChoice = document.querySelector("para-computer-choice");

  const paraGameResult = document.querySelector("para-game-result");
  paraGameResult.style.display = "none";

  const playAgain = document.querySelector("play-again");
  playAgain.style.display = "none"; // Hide it initially
  playAgain.style.marginTop = "10px";
  playAgain.style.marginLeft = "50px";
  playAgain.style.padding = "5px 15px";

  btnRock.addEventListener("click", () => {
    humanSelection = getHumanChoice("rock");
    paraHumanChoice.textContent = "Your Choice is rock";
  });
  btnPaper.addEventListener("click", () => {
    humanSelection = getHumanChoice("paper");
    paraHumanChoice.textContent = "Your Choice is paper";
  });
  btnScissors.addEventListener("click", () => {
    humanSelection = getHumanChoice("scissors");
    paraHumanChoice.textContent = "Your Choice is scissors";
  });
  play.addEventListener("click", () => {
    let computerSelection;
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    paraComputerChoice.textContent = `Computer's choice is ${computerSelection}`;
    if (humanScore === 5 || computerScore === 5) {
      paraHumanChoice.style.display = "none";
      paraComputerChoice.style.display = "none";
      paraResult.style.display = "none";
      if (humanScore > computerScore) {
        paraGameResult.textContent = `You Won ${humanScore} Round(s), You Win!`;
      } else if (computerScore > humanScore) {
        paraGameResult.textContent = `You Lost! The Computer Won ${computerScore} Round(s), Computer Wins!`;
      } else {
        paraGameResult.textContent = `It's a Tie! You Won ${humanScore} Round(s) and The Computer Won ${computerScore} Round(s)`;
      }

      play.style.display = "none";
      playAgain.style.display = "block";
      paraGameResult.style.display = "block";
    }
  });

  playAgain.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    humanSelection = "";
    paraHumanChoice.textContent = "";
    paraComputerChoice.textContent = "";
    scores.innerText = `Your Score: ${humanScore}\n Computer Score: ${computerScore}`;
    paraResult.textContent = "";
    play.style.display = "block";
    playAgain.style.display = "none";
    paraGameResult.style.display = "none";
    paraHumanChoice.style.display = "block";
    paraComputerChoice.style.display = "block";
    paraResult.style.display = "block";
  });
}

playGame();
