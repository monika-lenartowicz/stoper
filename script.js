const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const resetButton = document.querySelector(".reset");
const stopButton = document.querySelector(".stop");
const historyButton = document.querySelector(".history");
const closeButton = document.querySelector(".close");
const stopWatch = document.querySelector(".stopWatch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".timeList");
const infoButton = document.querySelector(".info");
const modalShadow = document.querySelector(".modalShadow");
let countTime;
let minutes = 0;
let seconds = 0;

const handleStart = () => {
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopWatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopWatch.textContent = `${minutes}:${seconds}`;
		} else if (seconds >= 59) {
			minutes++;
			seconds = 0;
			stopWatch.textContent = `${minutes}:${seconds}`;
		}
	}, 1000);
};

startButton.addEventListener("click", handleStart);
