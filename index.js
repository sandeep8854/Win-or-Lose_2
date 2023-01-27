const computerDisplay = document.getElementById("computer_choice");
const userDisplay = document.getElementById("user_choice");
const resultDisplay = document.getElementById("result_choice");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let find_Result;

possibleChoices.forEach((possibilities) => {
  possibilities.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userDisplay.innerText = userChoice;
    getComputerChoice();
    getResult();
  });
});

console.log(userChoice);
console.log(userDisplay);

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  console.log(randomNumber);
  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Paper";
  }
  if (randomNumber === 3) {
    computerChoice = "Scissor";
  }
  if (randomNumber === 4) {
    computerChoice = "Fire";
  }
  if (randomNumber === 5) {
    computerChoice = "Water";
  }
  computerDisplay.innerText = computerChoice;
}

function getResult() {
  if (computerChoice == userChoice) {
    find_Result = "It a draw!";
  }
  //----------------------------------------------------------
  if (computerChoice == "Rock" && userChoice == "Paper") {
    find_Result = "You win!";
  }
  if (computerChoice == "Rock" && userChoice == "Scissor") {
    find_Result = "You lose!";
  }
  if (computerChoice == "Rock" && userChoice == "Fire") {
    find_Result = "You win!";
  }
  if (computerChoice == "Rock" && userChoice == "Water") {
    find_Result = "You lose!";
  }
  //------------------------------------------------------------
  if (computerChoice == "Paper" && userChoice == "Rock") {
    find_Result = "You lose!";
  }
  if (computerChoice == "Paper" && userChoice == "Scissor") {
    find_Result = "You win!";
  }
  if (computerChoice == "Paper" && userChoice == "Fire") {
    find_Result = "You win!";
  }
  if (computerChoice == "Paper" && userChoice == "Water") {
    find_Result = "You win!";
  }
  //----------------------------------------------------------------
  if (computerChoice == "Scissor" && userChoice == "Rock") {
    find_Result = "You win!";
  }
  if (computerChoice == "Scissor" && userChoice == "Paper") {
    find_Result = "You lose!";
  }
  if (computerChoice == "Scissor" && userChoice == "Fire") {
    find_Result = "You win!";
  }
  if (computerChoice == "Scissor" && userChoice == "Water") {
    find_Result = "You lose!";
  }
  //---------------------------------------------------------------
  if (computerChoice == "Fire" && userChoice == "Rock") {
    find_Result = "You lose!";
  }
  if (computerChoice == "Fire" && userChoice == "Paper") {
    find_Result = "You lose!";
  }
  if (computerChoice == "Fire" && userChoice == "Scissor") {
    find_Result = "You lose!";
  }
  if (computerChoice == "Fire" && userChoice == "Water") {
    find_Result = "You win!";
  }
  //----------------------------------------------------------
  if (computerChoice == "Water" && userChoice == "Rock") {
    find_Result = "You win!";
  }
  if (computerChoice == "Water" && userChoice == "Paper") {
    find_Result = "You win!";
  }
  if (computerChoice == "Water" && userChoice == "Scissor") {
    find_Result = "You win!";
  }
  if (computerChoice == "Water" && userChoice == "Fire") {
    find_Result = "You lose!";
  }
  resultDisplay.innerText = find_Result;
  //---------------------------------------------------------------
}
