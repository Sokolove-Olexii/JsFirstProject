//2
const btn = document.getElementById("button");
const input = document.getElementById("input");
const p = document.getElementById("p");
const userWin = document.getElementById("userWin");

let numRand = Math.floor(Math.random() * 100 - 1);

btn.addEventListener("click", () => {
  console.log(input.value);
  p.textContent = numRand;

  if (input.value < numRand) {
    userWin.textContent = "Загадане число більше";
  } else if (input.value > numRand) {
    userWin.textContent = "Загадане число менше";
  } else {
    userWin.textContent = "Ви вгадали число";
  }
});

//3
const choices = document.querySelectorAll(".choice");
const message = document.getElementById("message");
const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");

let userScore = 0;
let computerScore = 0;

const gameOptions = ["камінь", "ножиці", "папір"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * gameOptions.length);
  return gameOptions[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Нічия!";
  } else if (
    (userChoice === "камінь" && computerChoice === "ножиці") ||
    (userChoice === "ножиці" && computerChoice === "папір") ||
    (userChoice === "папір" && computerChoice === "камінь")
  ) {
    userScore++;
    return "Ви виграли раунд!";
  } else {
    computerScore++;
    return "Комп'ютер виграв раунд!";
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    message.textContent = `Ви обрали: ${userChoice}, Комп'ютер обрав: ${computerChoice}`;
    resultText.textContent = result;
    scoreText.textContent = `Рахунок: Комп'ютер - ${computerScore} | Ви - ${userScore}`;
  });
});

//4
document.getElementById("btnPlus").addEventListener("click", function () {
  operation = "+";
});

document.getElementById("btnMinus").addEventListener("click", function () {
  operation = "-";
});

document.getElementById("btnMultiply").addEventListener("click", function () {
  operation = "*";
});

document.getElementById("btnDivide").addEventListener("click", function () {
  operation = "/";
});

document.getElementById("calcResult").addEventListener("click", function () {
  const calcNum1Type = parseFloat(
    document.getElementById("calcNum1Type").value
  );
  const calcNum2Type = parseFloat(
    document.getElementById("calcNum2Type").value
  );
  let result;

  if (isNaN(calcNum1Type) || isNaN(calcNum2Type)) {
    alert("Будь ласка, введіть обидва числа!");
    return;
  }

  // switch (operation) {
  //   case "+":
  //     result = calcNum1Type + calcNum2Type;
  //     break;
  //   case "-":
  //     result = calcNum1Type - calcNum2Type;
  //     break;
  //   case "*":
  //     result = calcNum1Type * calcNum2Type;
  //     break;
  //   case "/":
  //     if (num2 === 0) {
  //       alert("Ділення на нуль неможливе!");
  //       return;
  //     }
  //     result = calcNum1Type / calcNum2Type;
  //     break;
  //   default:
  //     alert("Будь ласка, виберіть операцію!");
  //     return;
  // }

  if (operation === "+") {
    result = calcNum1Type + calcNum2Type;
  } else if (operation === "-") {
    result = calcNum1Type - calcNum2Type;
  } else if (operation === "*") {
    result = calcNum1Type * calcNum2Type;
  } else if (operation === "/") {
    result = calcNum1Type / calcNum2Type;
  } else if (calcNum2Type === 0) {
    alert("Ділення на нуль неможливе!");
  }

  document.getElementById("calcNumResult").value = result;
});

//5
function convertMinutesToHoursAndMinutes(minutes) {
  const hours = Math.floor(minutes / 60); // Розрахунок годин
  const remainingMinutes = minutes % 60; // Розрахунок залишкових хвилин
  return `${hours}:${remainingMinutes}`;
}

document.getElementById("convertBtn").addEventListener("click", function () {
  const minutes = parseInt(document.getElementById("minutesInput").value);

  if (isNaN(minutes) || minutes < 0) {
    alert("Будь ласка, введіть правильне число хвилин.");
    return;
  }

  const hourResult = convertMinutesToHoursAndMinutes(minutes);

  document.getElementById("hourResult").textContent = `${hourResult}`;
});

//6
