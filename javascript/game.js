var psychicLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var youWin = 0;
var youLose = 0;
var guessesLeft = 13;
var guessedLetters = []; //Array to capture user letter input

document.onkeyup = function(event) {
	var yourGuess = event.key; //variable to capture user's guess
	guessedLetters.push(yourGuess); //captures letters entered by the user
	var psychicAns = psychicLetters[Math.floor(Math.random() * psychicLetters.length)];
	//If your guess matches the psychic's guess, a point is added to the wins tally and the guesses tally restarts
	if (yourGuess === psychicAns) {
		youWin++;
		guessesLeft = 12;
		guessedLetters.length = 0; //letters guessed is cleared
	}
	else {
		guessesLeft--;
	}
	//If the guesses remaining equals 0, you lose, and an increment is added to the losses tally and the guesses restart
	if (guessesLeft === 0) {
		youLose++;
		guessesLeft = 12;
		guessedLetters.length = 0; //letters guessed is cleared
	}
	var html = "<p>Guess what letter I'm thinking of:</p>" +
		"<p>Wins: " + youWin + "</p>" +
		"<p>Losses: " + youLose + "</p>" +
		"<p>Guesses Remaining: " + guessesLeft + "</p>" +
		"<p>Your guesses so far: " + guessedLetters.join(', ') + "</p>" ;//shows guessed letters

		document.getElementById("results").innerHTML = html;
}