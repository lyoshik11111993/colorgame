var squaresCount = 6;
var colors = [];
var pickedColor;

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var guessingColor = document.querySelector("h1 span");
var message = document.getElementById("message");
var resetBtn = document.getElementById("resetBtn");
var modeBtns = document.getElementsByClassName("mode");

init();

function init() {
	setModeButtons();
	setSquares();
	reset();
}

function setModeButtons() {
	for (var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function() {
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? squaresCount = 3 : squaresCount = 6;
			reset();
		});
	}
}

function setSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			if (this.style.backgroundColor === pickedColor) {
				message.textContent = "Correct!";
				resetBtn.textContent = "Play Again?";
				changeColors(this.style.backgroundColor);
				h1.style.backgroundColor = pickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		});
	}
}

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function() {
		if (this.style.backgroundColor === pickedColor) {
			message.textContent = "Correct!";
			resetBtn.textContent = "Play Again?";
			changeColors(this.style.backgroundColor);
			h1.style.backgroundColor = pickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var randomColor = Math.floor(Math.random() * colors.length);
	return colors[randomColor];
}

function generateRandomColors(count) {
	var arr = [];
	for (var i = 0; i < count; i++) {
		arr.push(ramdomColor());
	}
	return arr;
}

function ramdomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return ("rgb(" + red + ", " + green + ", " + blue + ")");
}

resetBtn.addEventListener("click", reset);

for (var i = 0; i < modeBtns.length; i++) {
	modeBtns[i].addEventListener("click", function() {
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? squaresCount = 3 : squaresCount = 6;
		reset();
	});
}

function reset() {
	colors = generateRandomColors(squaresCount);
	pickedColor = pickColor();
	guessingColor.textContent = pickedColor;
	message.textContent = "";
	resetBtn.textContent = "New Colors";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}