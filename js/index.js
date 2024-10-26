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
    userWin.style.color = "#990000";
  } else if (input.value > numRand) {
    userWin.textContent = "Загадане число менше";
    userWin.style.color = "#990000";
  } else if ((input.value = numRand)) {
    userWin.textContent = "Ви вгадали число";
    userWin.style.color = "#039900";
  }
});

//3
const choices = document.querySelectorAll(".main-thirdGame-choices_btn");
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
    result.style.color = "rgb(236, 182, 31)";
    return "Нічия!";
  } else if (
    (userChoice === "камінь" && computerChoice === "ножиці") ||
    (userChoice === "ножиці" && computerChoice === "папір") ||
    (userChoice === "папір" && computerChoice === "камінь")
  ) {
    userScore++;
    result.style.color = "#039900";
    return "Ви виграли раунд!";
  } else {
    computerScore++;
    result.style.color = "#990000";
    return "Комп'ютер виграв раунд!";
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    message.textContent = computerChoice;
    resultText.textContent = result;
    scoreText.textContent = `Рахунок: Комп'ютер - ${computerScore} Ви - ${userScore}`;
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

//7

//8
function findMax() {
  const num1 = document.getElementById("eighthGameInputNum1").value;
  const num2 = document.getElementById("eighthGameInputNum2").value;
  const num3 = document.getElementById("eighthGameInputNum3").value;
  const result = document.getElementById("eighthGameText");
  if (
    isNaN(num1) ||
    isNaN(num2) ||
    isNaN(num3) ||
    num1 === "" ||
    num2 === "" ||
    num3 === ""
  ) {
    result.style.color = "#990000";
    result.textContent = "Будь ласка, введіть правильні числа!";
  } else {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);

    const max = Math.max(n1, n2, n3);
    result.style.color = "#039900";
    result.textContent = `Найбільше число, яке ви ввели - (${max})`;
  }
}

//9

//10
const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

const buttonScientist1 = document
  .getElementById("scientist-button-1")
  .addEventListener("click", () =>
    console.log(
      scientists.filter(
        (scientist) => scientist.born >= 1800 && scientist.born < 1900
      )
    )
  );
// localeCompare - створений для того, щоб перекладати на локальну мову

const buttonScientist2 = document
  .getElementById("scientist-button-2")
  .addEventListener("click", () =>
    console.log(scientists.sort((a, b) => a.name.localeCompare(b.name)))
  );
const buttonScientist3 = document
  .getElementById("scientist-button-3")
  .addEventListener("click", () =>
    console.log(
      scientists.sort((a, b) => {
        const live1 = a.dead - a.born;
        const live2 = b.dead - b.born;
        return live2 - live1;
      })
    )
  );
const buttonScientist4 = document
  .getElementById("scientist-button-4")
  .addEventListener("click", () => {
    const array = scientists.find(
      (scientist) =>
        scientist.born ===
        Math.max(...scientists.map((scientist) => scientist.born))
    );
    console.log(array);
  });
const buttonScientist5 = document
  .getElementById("scientist-button-5")
  .addEventListener("click", () =>
    console.log(
      scientists.find(
        (scientist) =>
          scientist.name === "Albert" && scientist.surname === "Einstein"
      ).born
    )
  );
const buttonScientist6 = document
  .getElementById("scientist-button-6")
  .addEventListener("click", () => {
    console.log(
      scientists.filter((scientist) => scientist.surname.startsWith("C"))
    );
  });
const buttonScientist7 = document.getElementById("scientist-button-7");
const buttonScientist8 = document.getElementById("scientist-button-8");
const buttonScientist9 = document.getElementById("scientist-button-9");
console.log();
