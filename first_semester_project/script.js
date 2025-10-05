const timerDisplay = document.getElementById("timer");
const statusText = document.getElementById("status");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// variables initialization
let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;
let isRunning = false;


function updateDisplay (){
    // function to update the timer
    let hr = hours < 10 ? "0" + hours : hours;
    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.textContent = `${hr}:${min}:${sec}`;
}

function startTimer() {
    //function to start the timer
    if (!isRunning) {
        isRunning = true;
        statusText.textContent = "RUNNING";

        interval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    // function to stop or pause the timer
    if (isRunning) {
        isRunning = false;
        statusText.textContent = "PAUSED";
        clearInterval(interval);
    }
}

function resterTimer() {
    // function that resets the timer
    clearInterval(interval);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    statusText.textContent = "CLEAR";
    updateDisplay();
}

// button event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resterTimer);

updateDisplay();
