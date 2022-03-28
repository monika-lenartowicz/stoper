const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const resetButton = document.querySelector(".reset");
const stopButton = document.querySelector(".stop");
const historyButton = document.querySelector(".history");
const closeButton = document.querySelector(".modalClose");
const stopWatch = document.querySelector(".stopWatch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".timeList");
const modalShadow = document.querySelector(".modalShadow");
const infoButton = document.querySelector(".fa-question");

const colorButton = document.querySelector(".fa-paint-brush");
const colorOne = document.querySelector(".one");
const colorTwo = document.querySelector(".two");
const colorThree = document.querySelector(".three");
const colorFour = document.querySelector(".four");
const colorPanel = document.querySelector(".colors");

let countTime;
let minutes = 0;
let seconds = 0;
let timesArray = [];
let root = document.documentElement;

const handleStart = () => {
	clearInterval(countTime);

	countTime = setInterval(() => {
		stopWatch.textContent = `${minutes}:0${seconds}`;
		if (seconds < 9) {
			seconds++;
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

const handleStop = () => {
	time.innerHTML = `Ostatni czas to: ${stopWatch.textContent}`;

	if (stopWatch.textContent !== "0:00") {
		time.style.visibility = "visible";
		timesArray.push(stopWatch.textContent);
	}
	clearInterval(countTime);
	clearStuff();
};

const handlePause = () => {
	clearInterval(countTime);
};

const handleReset = () => {
	time.style.visibility = "hidden";
	timesArray = [];
	clearStuff();
};

const clearStuff = () => {
	clearInterval(countTime);
	stopWatch.textContent = "0:00";
	timeList.textContent = "";
	seconds = 0;
	minutes = 0;
};

const showHistory = () => {
	timeList.textContent = "";
	let number = 1;

	timesArray.forEach(time => {
		const newTime = document.createElement("li");

		newTime.innerHTML = `Pomiar nr ${number}: <span>${time}</span>`;
		timeList.append(newTime);
		number++;
	});
};

const showModal = () => {
	if (!(modalShadow.style.display === "block")) {
		modalShadow.style.display = "block";
	} else {
		modalShadow.style.display = "none";
	}
	modalShadow.classList.toggle("modalAnimation");
};

startButton.addEventListener("click", handleStart);
pauseButton.addEventListener("click", handlePause);
stopButton.addEventListener("click", handleStop);
resetButton.addEventListener("click", handleReset);
historyButton.addEventListener("click", showHistory);
infoButton.addEventListener("click", showModal);
closeButton.addEventListener("click", showModal);
colorButton.addEventListener("click", () => {
	colorPanel.classList.toggle("colors--show");
});
window.addEventListener("click", e => (e.target === modalShadow ? showModal() : false));

colorOne.addEventListener("click", () => {
	root.style.setProperty("--firstColor", "#30fa06");
	root.style.setProperty("--hoverColor", "rgb(67, 191, 42)");
});

colorTwo.addEventListener("click", () => {
	root.style.setProperty("--firstColor", "#ff00ee");
	root.style.setProperty("--hoverColor", "rgb(189, 52, 180)");
});

colorThree.addEventListener("click", () => {
	root.style.setProperty("--firstColor", "#00cefc");
	root.style.setProperty("--hoverColor", "rgb(53, 150, 172)");
});

colorFour.addEventListener("click", () => {
	root.style.setProperty("--firstColor", "#fa6306");
	root.style.setProperty("--hoverColor", "rgb(195, 75, 2)");
});
