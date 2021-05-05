const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerScissors = document.getElementById("playerScissors");
const playerPaper = document.getElementById("playerPaper");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerScissors = document.getElementById("computerScissors");
const computerPaper = document.getElementById("computerPaper");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const introSection = document.querySelector(".intro");
const playSection = document.querySelector(".play");
const allGamesIcons = document.querySelectorAll(".far");
const resetBtn = document.querySelector(".reset-icon");
const playBtn = document.querySelector(".playBtn");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let playerScore = 0;
let computerScore = 0;
let computerChoice = "";

//resets all selected icons to default
const resetSelected = () => {
  allGamesIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
};

//sets onClick for playBtn
playBtn.addEventListener("click", () => {
  introSection.style.display = "none";
  playSection.style.display = "block";
});

//logic for computer random selection
const computerRandomChoice = () => {
  const computerChoiceNum = Math.floor(Math.random() * 5) + 1;
  if (computerChoiceNum === 1) {
    computerChoice = "rock";
  } else if (computerChoiceNum === 2) {
    computerChoice = "paper";
  } else if (computerChoiceNum === 3) {
    computerChoice = "scissors";
  } else if (computerChoiceNum === 4) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
};

const resetBtnHandler = () => {
  resetBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    playerChoiceEl.textContent = "";
    computerChoiceEl.textContent = "";
    resultText.textContent = "";
    resetSelected();
  });
};

//updates the scores
const updateScore = (playerChoice) => {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie.";
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = "You Won!";
      playerScore++;
      playerScoreEl.textContent = playerScore;
    } else {
      resultText.textContent = "You Lost!";
      computerScore++;
      computerScoreEl.textContent = computerScore;
    }
  }
};

//call functions to process turn
const checkResult = (playerChoice) => {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice(computerChoice);
  updateScore(playerChoice);
};

//passing player selection value and styling icons
const select = (playerChoice) => {
  checkResult(playerChoice);
  //adds styling and updates playeyChoice
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = "--- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = "--- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = "--- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = "--- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = "--- Spock";
      break;
      defeat: break;
  }
};

//updates styling for computer choice
const displayComputerChoice = (computerChoice) => {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = "--- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = "--- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = "--- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = "--- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = "--- Spock";
      break;
      defeat: break;
  }
};

//startup
resetBtnHandler();
