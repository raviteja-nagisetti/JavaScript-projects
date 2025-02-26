const generateRandomNumber = (number) => Math.floor(Math.random() * number + 1);
const userInput = document.getElementById("user-input");
const guessBtn = document.getElementById("guess-btn");
const messageEl = document.getElementById("message");
const attemptCount = document.getElementById("attempts-count");
const newGameBtn = document.getElementById("new-game-btn");
let randomNumber = generateRandomNumber(100);
let count = 0;

const handleGuessBtnClick = () => {
	count++;
	attemptCount.textContent = count;
	let userValue = +userInput.value;
	if (userValue > randomNumber) {
		messageEl.textContent =
			"Oops, Your guess is too high! Try guessing lower number";
		messageEl.classList.remove("success");
		messageEl.classList.add("failure");
	} else if (userValue < randomNumber) {
		messageEl.textContent =
			"Oops, Your guess is too low! Try guessing higher number";
		messageEl.classList.remove("success");
		messageEl.classList.add("failure");
	} else {
		messageEl.textContent = `Congrats, You guessed in ${count} attempts`;
		messageEl.classList.remove("failure");
		messageEl.classList.add("success");
		guessBtn.disabled = true;
		userInput.disabled = true;
	}
};

const handleNewGameBtnClick = () => {
	count = 0;
	userInput.value = "";
	attemptCount.textContent = 0;
	messageEl.textContent = "";
	messageEl.classList.remove("failure");
	messageEl.classList.remove("success");
	guessBtn.disabled = false;
	userInput.disabled = false;
	randomNumber = generateRandomNumber(100);
};

guessBtn.addEventListener("click", handleGuessBtnClick);
newGameBtn.addEventListener("click", handleNewGameBtnClick);
