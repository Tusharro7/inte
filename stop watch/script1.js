var start = document.querySelector("#start");
var pause = document.querySelector("#pause");
var restart = document.querySelector("#restart");
var display = document.querySelector("#a1")

let startTime;
let elapsedTime = 0;
let timerInterval;


function formatTime(ms) {
    let hours = Math.floor(ms / 3600000);
    let minutes = Math.floor((ms % 3600000) / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

start.addEventListener('click', function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 1000);
    startBtn.disabled = true;
})



pause.addEventListener('click', function stopTimer() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
})


restart.addEventListener('click', function resetTimer() {
    clearInterval(timerInterval);
    display.textContent = '00:00:00';
    elapsedTime = 0;
    startBtn.disabled = false;
})

function updateTime() {
    const now = Date.now();
    elapsedTime = now - startTime;
    display.textContent = formatTime(elapsedTime);
}

