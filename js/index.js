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
