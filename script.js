const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const countdown = () => {
    // dia de jogo com os pedreiros
    const COUNTDOWN_DATE = new Date("25 Apr 2021");
    const currentDate = new Date();

    const ms = COUNTDOWN_DATE - currentDate;
    const total_seconds = Math.floor(ms / 1000);

    const days = Math.floor(total_seconds / 3600 / 24);
    const hours = Math.floor(total_seconds / 3600) % 24;
    const minutes = Math.floor(total_seconds / 60) % 60;
    const seconds = Math.floor(total_seconds % 60);

    daysEl.innerText = days;
    minutesEl.innerText = formatTime(minutes);
    secondsEl.innerText = formatTime(seconds);
    hoursEl.innerText = formatTime(hours);

    if (total_seconds < 0) {
        window.location.href = "https://www.youtube.com/watch?v=BBNoGFOMlr8";   
    }
}

const formatTime = (time) => {
    return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);

