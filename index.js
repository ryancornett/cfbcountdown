const countdownDate = new Date("September 02, 2023 12:00:00").getTime();

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = countdownDate - now;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    let displayDays = formatTime(days);
    let displayHours = formatTime(hours);
    let displayMinutes = formatTime(minutes);
    let displaySeconds = formatTime(seconds);
    document.querySelector('.day').textContent = displayDays;
    document.querySelector('.hour').textContent = displayHours;
    document.querySelector('.minute').textContent = displayMinutes;
    document.querySelector('.second').textContent = displaySeconds;
}, 1000);