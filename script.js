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

function appendHumanScoreImage(para, score) {
  let img;
  if (score === 0) {
    img = document.querySelector("#zero").cloneNode(true);
  } else if (score === 1) {
    img = document.querySelector("#one").cloneNode(true);
  } else if (score === 2) {
    img = document.querySelector("#two").cloneNode(true);
  } else if (score === 3) {
    img = document.querySelector("#three").cloneNode(true);
  } else if (score === 4) {
    img = document.querySelector("#four").cloneNode(true);
  } else if (score === 5) {
    img = document.querySelector("#five").cloneNode(true);
  }
  img.style.display = "block"; // Ensure the image is displayed
  para.appendChild(img);
}

function appendComputerScoreImage(para, score) {
  let img;
  if (score === 0) {
    img = document.querySelector("#zero").cloneNode(true);
  } else if (score === 1) {
    img = document.querySelector("#one").cloneNode(true);
  } else if (score === 2) {
    img = document.querySelector("#two").cloneNode(true);
  } else if (score === 3) {
    img = document.querySelector("#three").cloneNode(true);
  } else if (score === 4) {
    img = document.querySelector("#four").cloneNode(true);
  } else if (score === 5) {
    img = document.querySelector("#five").cloneNode(true);
  }
  img.style.display = "block";
  img.style.marginLeft = "25px"; // Ensure the image is displayed
  para.appendChild(img);
}

function playGame() {
  //Declaring variable for html elements
  const paraResult = document.querySelector("#para-result");
  const paraHumanScore = document.querySelector("#para-human-score");
  const paraComputerScore = document.querySelector("#para-computer-score");
  const btnRock = document.querySelector("#btn-rock");
  const btnPaper = document.querySelector("#btn-paper");
  const btnScissors = document.querySelector("#btn-scissors");
  const play = document.querySelector("#play");
  const paraHumanChoice = document.querySelector("#para-human-choice");
  const paraComputerChoice = document.querySelector("#para-computer-choice");
  //const body = document.querySelector("body");
  const paraGameResult = document.querySelector("#para-game-result");
  const playAgain = document.querySelector("#play-again");
  const imgRock = document.querySelector("#rock");
  const imgPaper = document.querySelector("#paper");
  const imgScissors = document.querySelector("#scissors");
  const imgZero = document.querySelector("#zero");
  const imgOne = document.querySelector("#one");
  const imgTwo = document.querySelector("#two");
  const imgThree = document.querySelector("#three");
  const imgFour = document.querySelector("#four");
  const imgFive = document.querySelector("#five");

  //Creating Image Clones

  const cloneRock = imgRock.cloneNode();
  const clonePaper = imgPaper.cloneNode();
  const cloneScissors = imgScissors.cloneNode();

  const thirdCloneRock = imgRock.cloneNode();
  const thirdClonePaper = imgPaper.cloneNode();
  const thirdCloneScissors = imgScissors.cloneNode();

  // Check if all elements are found
  console.log({
    paraResult,
    paraHumanScore,
    paraComputerScore,
    btnRock,
    btnPaper,
    btnScissors,
    play,
    paraHumanChoice,
    paraComputerChoice,
    playAgain,
    paraGameResult,
  });
  const beats = document.createTextNode("\tBEATS\t");
  function playRound(humanChoice, computerChoice) {
    paraHumanScore.innerHTML = "HUMAN<br/>SCORE<br/><br/>";
    paraComputerScore.innerHTML = "COMPUTER<br/>SCORE<br/><br/>";
    if (humanChoice == "rock" && computerChoice == "scissors") {
      paraResult.innerText = "You Win!\n";
      humanScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      paraResult.innerText = "You Lose!\n";
      computerScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      paraResult.innerText = "You Win!\n";
      humanScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      paraResult.innerText = "You Lose!\n";
      computerScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      paraResult.innerText = "You Win!\n";
      humanScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      paraResult.innerText = "You Lose!\n";
      computerScore += 1;
    } else if (
      (humanChoice == "rock" && computerChoice == "rock") ||
      (humanChoice == "paper" && computerChoice == "paper") ||
      (humanChoice == "scissors" && computerChoice == "scissors")
    ) {
      paraResult.textContent = "It's a Tie!";
    }

    appendHumanScoreImage(paraHumanScore, humanScore);
    appendComputerScoreImage(paraComputerScore, computerScore);
  }

  //Displaying and Hiding elements

  play.style.display = "block";
  paraGameResult.style.display = "none";
  playAgain.style.display = "none"; // Hide it initially

  //Event Listeners

  let humanSelection;
  let computerSelection;

  btnRock.addEventListener("click", () => {
    humanSelection = getHumanChoice("rock");
    paraHumanChoice.innerHTML = "HUMAN<br/><br/>";
    paraHumanChoice.appendChild(cloneRock);
  });
  btnPaper.addEventListener("click", () => {
    humanSelection = getHumanChoice("paper");
    paraHumanChoice.innerHTML = "HUMAN<br/><br/>";
    paraHumanChoice.appendChild(clonePaper);
  });
  btnScissors.addEventListener("click", () => {
    humanSelection = getHumanChoice("scissors");
    paraHumanChoice.innerHTML = "HUMAN<br/><br/>";
    paraHumanChoice.appendChild(cloneScissors);
  });
  play.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    paraComputerChoice.innerHTML = "COMPUTER<br/><br/>";
    if (computerSelection === "rock") {
      paraComputerChoice.appendChild(thirdCloneRock);
    } else if (computerSelection === "paper") {
      paraComputerChoice.appendChild(thirdClonePaper);
    } else if (computerSelection === "scissors") {
      paraComputerChoice.appendChild(thirdCloneScissors);
    }
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
    paraHumanScore.innerHTML = "";
    paraComputerScore.innerHTML = "";
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
