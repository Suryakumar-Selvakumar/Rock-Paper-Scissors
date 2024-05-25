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
  const paraResult = document.createElement("p");
  const scores = document.createElement("p");

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
      paraResult.textContent = "You Win! Rock beats Scissors";
      humanScore += 1;
      scores.innerText = `Your Score: ${humanScore}\nComputer Score: ${computerScore}`;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      paraResult.textContent = "You Lose! Paper beats Rock";
      computerScore += 1;
      scores.innerText = `Your Score: ${humanScore}\n Computer Score: ${computerScore}`;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      paraResult.textContent = "You Win! Paper beats Rock";
      humanScore += 1;
      scores.innerText = `Your Score: ${humanScore}\n Computer Score: ${computerScore}`;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      paraResult.textContent = "You Lose! Scissors beats Paper";
      computerScore += 1;
      scores.innerText = `Your Score: ${humanScore}\n Computer Score: ${computerScore}`;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      paraResult.textContent = "You Win! Scissors beats Paper";
      humanScore += 1;
      scores.innerText = `Your Score: ${humanScore}\n Computer Score: ${computerScore}`;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      paraResult.textContent = "You Lose! Rock beats Scissors";
      computerScore += 1;
      scores.innerText = `Your Score: ${humanScore}\n Computer Score: ${computerScore}`;
    } else if (
      (humanChoice == "rock" && computerChoice == "rock") ||
      (humanChoice == "paper" && computerChoice == "paper") ||
      (humanChoice == "scissors" && computerChoice == "scissors")
    ) {
      paraResult.textContent = "It's a Tie!";
      scores.innerText = `Your Score: ${humanScore}\n Computer Score: ${computerScore}`;
    }
  }

  let humanSelection;

  const btnRock = document.createElement("button");
  btnRock.textContent = "Rock";
  btnRock.style.margin = "5px";

  const btnPaper = document.createElement("button");
  btnPaper.textContent = "Paper";
  btnPaper.style.margin = "5px";

  const btnScissors = document.createElement("button");
  btnScissors.textContent = "Scissors";
  btnScissors.style.margin = "5px";

  const play = document.createElement("button");
  play.textContent = "Play";
  play.style.display = "block";
  play.style.marginLeft = "50px";
  play.style.marginTop = "10px";
  play.style.padding = "3px 22px";

  const body = document.querySelector("body");

  const div = document.createElement("div");

  const paraHumanChoice = document.createElement("p");

  const paraComputerChoice = document.createElement("p");

  const paraGameResult = document.createElement("p");
  paraGameResult.style.display = "none";

  const playAgain = document.createElement("button");
  playAgain.textContent = "Play Again";
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

  div.append(
    btnRock,
    btnPaper,
    btnScissors,
    play,
    paraHumanChoice,
    paraComputerChoice,
    paraResult,
    scores,
    paraGameResult,
    playAgain
  );

  body.appendChild(div);
}

playGame();
