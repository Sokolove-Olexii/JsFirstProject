//1
const yearGameInput = document.getElementById("main-firstGame-form_input");
const yearGameBtn = document.getElementById("main-firstGame-form_btn");
const yearGameResult = document.getElementById("main-firstGame_text");

yearGameBtn.addEventListener("click", yearFunction);
function yearFunction() {
  if (yearGameInput.value === "") {
    yearGameResult.textContent = "Ви не заповнили поле";
  } else {
    const value = Number(yearGameInput.value);
    if ((value % 4 === 0 && value % 100 !== 0) || value % 400 === 0) {
      yearGameResult.style.color = "#039900";
      yearGameResult.textContent = "Ви народились у високосний рік!";
    } else {
      yearGameResult.style.color = "#990000";
      yearGameResult.textContent = "Ви народились у невисокосний рік.";
    }
  }
}

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
const timeGameInput = document.getElementById("minutesInput");
const timeGameBtn = document.getElementById("convertBtn");
const timeGameResult = document.getElementById("hourResult");
timeGameBtn.addEventListener("click", calculateTimeFunction);
function calculateTimeFunction() {
  event.preventDefault();
  let value = Number(timeGameInput.value);
  if (isNaN(value) || value <= 0) {
    timeGameResult.textContent = "Ви не заповнили поле";
    return;
  } else {
    let days = Math.floor(value / (24 * 3600));

    value %= 24 * 3600;

    let hours = Math.floor(value / 3600);

    value %= 3600;

    let seconds = Math.floor(value % 60);
    let minutes = Math.floor(value / 60);
    const message = `${days} дн, ${hours}:${minutes}:${seconds}`;
    timeGameResult.textContent = message;
  }
}
//6
let player = document.getElementById("player");
let block = document.getElementById("block");
let road = document.getElementById("road");
let counter = 0;
let gameStarted = false;
let collisionEvent = new Event("collision");
let scoreUpEvent = new Event("scoreUp");
let isRunning = false;
let runAnimationInterval;

function userInput() {
  if (!gameStarted) {
    let isRun1 = true;
    runAnimationInterval = setInterval(() => {
      if (gameStarted) {
        if (isRun1) {
          player.classList.add("running1");
          player.classList.remove("running2");
        } else {
          player.classList.add("running2");
          player.classList.remove("running1");
        }
        isRun1 = !isRun1;
      }
    }, 200);

    gameStarted = true;
    block.classList.add("fix-block");
    road.classList.add("animate-road");
    block.style.animation = "block 1.5s linear infinite";
    gameLoop();
    jump();
  } else {
    jump();
  }
}

function gameLoop() {
  var playerRect = player.getBoundingClientRect();
  var blockRect = block.getBoundingClientRect();

  if (
    playerRect.right >= blockRect.left &&
    playerRect.left <= blockRect.right &&
    playerRect.bottom >= blockRect.top &&
    playerRect.top <= blockRect.bottom
  ) {
    player.dispatchEvent(collisionEvent);
  } else {
    player.dispatchEvent(scoreUpEvent);
  }
  if (gameStarted) {
    requestAnimationFrame(gameLoop);
  }
}

// Jump function
// function jump() {
//   if (player.classList.contains("animate")) {
//     return;
//   }
//   player.classList.add("animate");
//   setTimeout(function () {
//     player.classList.remove("animate");
//   }, 300);
// }

function jump() {
  if (player.classList.contains("animate")) return;

  player.classList.add("animate");

  player.addEventListener("animationend", function removeAnimation() {
    player.classList.remove("animate");
    player.removeEventListener("animationend", removeAnimation);
  });
}

function handleKeyDown(event) {
  if (event.code === "Space" && event.target === document.body) {
    userInput();
  }
}

player.addEventListener("collision", function (event) {
  gameStarted = false;

  clearInterval(runAnimationInterval);
  player.classList.remove("running1", "running2");
  // block.classList.remove("fix-block");
  road.classList.remove("animate-road");
  block.style.animation = "none";
  counter = 0;
  document.getElementById("scoreSpan").textContent = Math.floor(counter / 100);
  // document.getElementById("game").style.backgroundColor("red");
});

//needs to rework (new score)
player.addEventListener("scoreUp", function (event) {
  counter++;
  updateScore();
});

function updateScore() {
  var scoreSpan = document.getElementById("scoreSpan");
  scoreSpan.textContent = Math.floor(counter / 100);
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("mousedown", userInput);

//7
const field = document.querySelector(".main-seventhGame-footballField");
const cursor = document.getElementById("mouse-svg");
const ball = document.getElementById("ball-svg");
const useElementForBall = document.querySelector(".useElementForBall");

// field.addEventListener("mousemove", (e) => {
//   //     getBoundingClientRect() — це метод, який повертає інформацію про розташування та розмір елемента на сторінці. Коли ви викликаєте цей метод для якогось HTML-елемента, він повертає об'єкт із такими властивостями:

//   // top — відстань від верхнього краю видимої частини вікна браузера до верхнього краю елемента.
//   // left — відстань від лівого краю вікна до лівого краю елемента.
//   // bottom — відстань від верхнього краю вікна до нижнього краю елемента.
//   // right — відстань від лівого краю вікна до правого краю елемента.
//   // width — ширина елемента.
//   // height — висота елемента.
//   // Отримуємо позицію поля на сторінці
//   const fieldRect = field.getBoundingClientRect();
//   // Рахуємо координати курсора відносно поля
//   const x = e.clientX - fieldRect.left - 30;
//   const y = e.clientY - fieldRect.top - 10;

//   // Встановлюємо позицію кастомного курсору
//   ball.style.left = `${x}px`;
//   ball.style.top = `${y}px`;
// });
// const randomHexColorCode = () => {
//   let n = (Math.random() * 0xfffff * 1000000).toString(16);
//   return "#" + n.slice(0, 6);
// };

field.addEventListener("mousedown", (e) => {
  const fieldRect = field.getBoundingClientRect();
  const x = e.clientX - fieldRect.left - 25;
  const y = e.clientY - fieldRect.top - 25;
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
  ball.classList.remove("rotate");

  void ball.offsetWidth;

  ball.classList.add("rotate");
});

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
let offset = 0;
const sliderLine = document.querySelector(".main-slider-content_line");
const dots = document.querySelectorAll(".main-slider_dot");

function updateDots(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

document.getElementById("slider-next").addEventListener("click", function () {
  offset = offset + 150;
  if (offset > 900) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
  updateDots(offset / 150);
});

document.getElementById("slider-prev").addEventListener("click", function () {
  offset = offset - 150;
  if (offset < 0) {
    offset = 900;
  }
  sliderLine.style.left = -offset + "px";
  updateDots(offset / 150);
});
0;

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

function hideAllScientists() {
  document.querySelectorAll(".div-scientist").forEach((div) => {
    div.style.display = "none";
  });
}

function showScientistsByIds(ids) {
  ids.forEach((id) => {
    const scientistDiv = document.querySelector(`.scientistDescription${id}`);
    if (scientistDiv) {
      scientistDiv.style.display = "block";
    }
  });
}

document.getElementById("scientist-button-1").addEventListener("click", () => {
  hideAllScientists();
  const ids = scientists
    .filter((scientist) => scientist.born >= 1800 && scientist.born < 1900)
    .map((scientist) => scientist.id);
  showScientistsByIds(ids);
});

document.getElementById("scientist-button-2").addEventListener("click", () => {
  hideAllScientists();
  const sorted = [...scientists].sort((a, b) => a.name.localeCompare(b.name));
  console.log(sorted);
  showScientistsByIds(sorted.map((scientist) => scientist.id));
});

document.getElementById("scientist-button-3").addEventListener("click", () => {
  hideAllScientists();
  const sortedByAge = [...scientists].sort((a, b) => {
    const ageA = a.dead - a.born;
    const ageB = b.dead - b.born;
    return ageB - ageA;
  });
  console.log("Sorted by age:", sortedByAge);
  showScientistsByIds(sortedByAge.map((scientist) => scientist.id));
});

document.getElementById("scientist-button-4").addEventListener("click", () => {
  hideAllScientists();
  const latestBorn = scientists.reduce((latest, current) =>
    current.born > latest.born ? current : latest
  );
  console.log(latestBorn);
  showScientistsByIds([latestBorn.id]);
});

document.getElementById("scientist-button-5").addEventListener("click", () => {
  const einstein = scientists.find(
    (scientist) =>
      scientist.name === "Albert" && scientist.surname === "Einstein"
  );
  if (einstein) {
    alert(`Рік народження Albert Einstein: ${einstein.born}`);
  } else {
    alert("Albert Einstein не знайдено.");
  }
});

document.getElementById("scientist-button-6").addEventListener("click", () => {
  hideAllScientists();
  const ids = scientists
    .filter((scientist) => scientist.surname.startsWith("C"))
    .map((scientist) => scientist.id);
  showScientistsByIds(ids);
});

document.getElementById("scientist-button-7").addEventListener("click", () => {
  hideAllScientists();
  const ids = scientists
    .filter((scientist) => scientist.name.startsWith("A"))
    .map((scientist) => scientist.id);
  showScientistsByIds(ids);
});

document.getElementById("scientist-button-8").addEventListener("click", () => {
  hideAllScientists();
  const withAges = scientists.map((scientist) => ({
    ...scientist,
    age: scientist.dead - scientist.born,
  }));
  const longest = withAges.reduce((max, current) =>
    current.age > max.age ? current : max
  );
  const shortest = withAges.reduce((min, current) =>
    current.age < min.age ? current : min
  );
  console.log("Longest lived:", longest);
  console.log("Shortest lived:", shortest);
  showScientistsByIds([longest.id, shortest.id]);
});

document.getElementById("scientist-button-9").addEventListener("click", () => {
  hideAllScientists();
  const ids = scientists
    .filter(
      (scientist) =>
        scientist.name.charAt(0).toLowerCase() ===
        scientist.surname.charAt(0).toLowerCase()
    )
    .map((scientist) => scientist.id);
  showScientistsByIds(ids);
});
