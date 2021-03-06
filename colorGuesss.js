//This is the Javascript Page for Color Guess 

	var numSquares = 6; 
	var colors = [];
	var pickedColor;  
	var squares = document.querySelectorAll(".square"); 
	var colorDisplay = document.getElementById("colorDisplay"); 
	var messageDisplay = document.querySelector("#message"); 
	var h1 = document.querySelector("h1"); 
	var resetButton = document.querySelector("#reset"); 
	var modeButtons = document.querySelectorAll(".mode"); 

	init(); 

	function init(){
		//mode button event listeners. 
		setupModeButtons(); 

		setupSquares(); 
				
		reset(); 
	};

function setupModeButtons(){
		for (var i = 0; i < modeButtons.length; i++) {
			modeButtons[i].addEventListener("click", function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected"); 
				this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 
					// the text above this: does everything that a 'if' / 'else' statement does
				reset(); 
			});
		}
};

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add intital color to squares
		squares[i].style.backgroundColor = colors[i]

		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;

			//compare color to picked color 
			if (clickedColor === pickedColor) {

				messageDisplay.textContent = "Correct!"; 
				resetButton.textContent = "play again?"; 
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor; 

			} else {

				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!"; 
				
			}
		}); 
		}
};

function reset(){
	//generate all new colors
		colors = generateRandomColors(numSquares); 
		//pick a newe rand color from array 
		pickedColor = pickColor();
		//changed the colorDisplay to match picked color
		colorDisplay.textContent = pickedColor; 
		//change the colors of the squares on the page
		resetButton.textContent = "New Colors"; 
		messageDisplay.textContent = ""; 

		for (var i = 0; i < squares.length; i++) {
			if (colors[i]) {
				squares[i].style.display = "block"; 
				squares[i].style.backgroundColor = colors[i]; 
			} else {
				squares[i].style.display = "none"; 
			}; 
		};
		h1.style.backgroundColor = "steelblue"; 
};

resetButton.addEventListener("click", function(){
		reset(); 
	});

function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to matchgiven color 
		squares[i].style.backgroundColor = color; 
	}
}; 

function pickColor(){
	var random = Math.floor(Math.random() * colors.length); 
	return colors[random]; 
};

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color and push into array // remember push means to insert to the front of the array 
		arr.push(randomColor())
	}
	//return that array 
	return arr
};

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	//pick a "green" from 0 - 255
	//pick a "blue" from 0 - 255
	return "rgb(" + r + ", " + g + ", " + b + ")"; 

};