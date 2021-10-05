const hoursClock = document.querySelector(".hoursAll");
const minutesClock = document.querySelector(".minutesAll");
const secondsClock = document.querySelector(".secondsAll");
let deg = 6;

let interval = setInterval(() => {
  const day = new Date();
  let hours = day.getHours() * 30;
  let minutes = day.getMinutes() * deg;
  let seconds = day.getSeconds() * deg;
  hoursClock.style.transform = `rotate(${hours + minutes / 12}deg)`;
  minutesClock.style.transform = `rotate(${minutes}deg)`;
  secondsClock.style.transform = `rotate(${seconds}deg)`;
}, 0);

let btn = document
  .querySelector("button")
  .addEventListener("click", function () {
    let time = document.querySelector(".time");
    let timeout = time.value;
    let res = timeout.match(/\d\d/g);

    clearInterval(interval);
    let hour1 = res[0];
    let min = res[1];
    let sec = 0;
    var hours = hour1 * 30;
    var minutes = min * deg;
    setInterval(() => {
      sec = sec + 6;
      if (sec == 360) {
        sec = 0;
        minutes = minutes + 6;
        if (minutes == 360) {
          minutes = 0;
          hours = hours + 30;
        }
      }
      hoursClock.style.transform = `rotate(${hours + minutes / 12}deg)`;
      minutesClock.style.transform = `rotate(${minutes}deg)`;
      secondsClock.style.transform = `rotate(${sec}deg)`;
      let par = document.querySelector("p");
      let h = hours / 30;
      let m = minutes / 6;
      let s = sec / 6;
      if (h < 10) {
        h = `0${h}`;
      }
      if (m < 10) {
        m = `0${m}`;
      }
      if (s < 10) {
        s = `0${s}`;
      }
      par.innerHTML = `time ${h}:${m}:${s}`;
    }, 1000);
  });
