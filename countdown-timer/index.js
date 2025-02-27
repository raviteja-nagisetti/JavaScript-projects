const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const minutes = document.getElementById("minutes");
const display = document.getElementById("display");
let timerId = null;
stopBtn.disabled = true;

const handleStartBtnClick = () => {
	const userInput = +minutes.value;
	if (userInput === 0) {
		return;
	}
	stopBtn.disabled = false;
	let seconds = 60;
	let displayMinutes = userInput - 1;
	timerId = setInterval(() => {
		seconds--;
		if (seconds < 0) {
			seconds = 60;
			displayMinutes--;
			if (displayMinutes < 0) {
				clearInterval(timerId);
				displayMinutes = 0;
				seconds = 0;
				display.textContent = "Time's up";
				return;
			}
		}
		display.textContent = `${
			displayMinutes < 10 ? "0" + displayMinutes : displayMinutes
		}:${seconds < 10 ? "0" + seconds : seconds}`;
	}, 1000);
	display.textContent = `${userInput < 10 ? "0" + userInput : userInput}:00`;
};

const handleStopBtnClick = () => {
	console.log(timerId);
	clearInterval(timerId);
};

startBtn.addEventListener("click", handleStartBtnClick);
stopBtn.addEventListener("click", handleStopBtnClick);
