const currentTime = document.getElementById("display-time");
const dayEl = document.querySelectorAll(".days p");
const currentDay = new Date().getDay();
let showTwelveHourTime = true;

const twelveHourBtn = document.querySelector(".btnTwelve");

twelveHourBtn.addEventListener("click", () => {
  showTwelveHourTime = true;
  document.querySelector(".active").classList.remove("active");
  twelveHourBtn.classList.add("active");
  replaceTime();
});

const twentyFourHourBtn = document.querySelector(".btnTwentyFour");

twentyFourHourBtn.addEventListener("click", () => {
  showTwelveHourTime = false;
  document.querySelector(".active").classList.remove("active");
  twentyFourHourBtn.classList.add("active");
  replaceTime();
});

dayEl[currentDay].classList.add("active-day");

const replaceTime = () => {
  let today = new Date(),
    h = today.getHours(),
    m = today.getMinutes(),
    s = today.getSeconds();

  if ((showTwelveHourTime && h > 12) || (showTwelveHourTime && h == 12)) {
    if (s < 10) {
      s = "0" + s;
    }
    s += " PM";
  }
  if (showTwelveHourTime && h < 12) {
    if (s < 10) {
      s = "0" + s;
    }
    s += " AM";
  }

  if (showTwelveHourTime && h > 12) {
    h = h - 12;
  }

  if (h < 10) {
    h = "0" + h;
  }

  if (m < 10) {
    m = "0" + m;
  }

  if (s < 10) {
    s = "0" + s;
  }
  currentTime.innerText = h + ":" + m + ":" + s;
};

setInterval(replaceTime, 1000);
replaceTime();
