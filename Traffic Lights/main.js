const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");
const stopBtn = document.querySelector(".stop-button");

let isStopActive = false;
let loopTrafficLight;

startTrafficLights();

stopBtn.addEventListener("click", async () => {
  clearInterval(loopTrafficLight);
  clearLights();

  turnOn(yellow);
  await clearLightsWithDelay(2000);

  turnOn(red);
  await clearLightsWithDelay(5000);

  startTrafficLights();
});

function startTrafficLights() {
  changeTrafficLights();
  setInterval(() => changeTrafficLights(), 5500);
}

async function changeTrafficLights() {
  turnOn(green);
  await clearLightsWithDelay(2000);
  turnOn(yellow);
  await clearLightsWithDelay(1000);
  turnOn(red);
  await clearLightsWithDelay(2000);
}

function clearLights() {
  red.style.opacity = "0.45";
  yellow.style.opacity = "0.45";
  green.style.opacity = "0.45";
}

function turnOn(color) {
  color.style.opacity = "1";
}

function clearLightsWithDelay(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(clearLights()), delay);
  });
}
