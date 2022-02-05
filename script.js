const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const btnSetDate = document.querySelector(".button-set");
const btnSetNewDate = document.querySelector(".button-new-set");
const setDateEl = document.getElementById("set-date");
const openSetDateEl = document.getElementById("open-set");
const newDate = document.getElementById("new-date");
const newTitle = document.getElementById("new-title");
const titleEl = document.getElementById("title");
let stopCountdown;

const countdown = function () {
  const date = newDate.value;
  const timeNow = new Date();
  const setTime = new Date(date);

  const setSeconds = (setTime - timeNow) / 1000;
  const days = Math.floor(setSeconds / 3600 / 24);
  const hours = Math.floor(setSeconds / 3600) % 24;
  const min = Math.floor(setSeconds / 60) % 60;
  const sec = Math.floor(setSeconds) % 60;

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = min;
  secondsEl.textContent = sec;

  if (!newDate.value || !newTitle.value) {
    daysEl.textContent = 0;
    hoursEl.textContent = 0;
    minutesEl.textContent = 0;
    secondsEl.textContent = 0;
  }
};

const setDate = function () {
  setDateEl.classList.toggle("active");
  openSetDateEl.classList.toggle("active");
};

btnSetDate.addEventListener("click", function () {
  setDate();
  clearInterval(stopCountdown);
  titleEl.textContent = "Title";
  daysEl.textContent = 0;
  hoursEl.textContent = 0;
  minutesEl.textContent = 0;
  secondsEl.textContent = 0;
  newDate.value = "";
  newTitle.value = "";
});
btnSetNewDate.addEventListener("click", function () {
  titleEl.textContent = newTitle.value;
  setDate();
  stopCountdown = setInterval(countdown, 1000);
  if (!newDate.value || !newTitle.value) {
    titleEl.textContent = "Title";
  }
});
