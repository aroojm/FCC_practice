// random number to be guessed
let rndm;
// variable to hold input guess value
let n;
// array to hold values from each guess
let arr = [];
// max value for the game
let max = getValidInput();
// message string for correctness of guess number
let msg1 = document.getElementById("result");
// message string for validity of guess input
let msg2 = document.getElementById("guess-valid");
document.getElementById("game-start").innerHTML = `Guess a number from 1 to ${max}.`;
// generate random number to be guessed
rndm = Math.floor(Math.random() * max) + 1;
// boolean to hold info if game has been won or not
let won = false;

function getValidInput() {
    let valid_input = false;
    let input, max_value;
    while(!valid_input) {
        if (input == undefined) {
            input = prompt("Choose a positive integer as maximum value for the number guessing game: ");   
        } else if (isNaN(input)) {
            input = prompt("Non-numerical values are not allowed.\nChoose a positive integer as maximum value for the number guessing game: ");
        } else if (input.length !== 0 && input >= 0 && input < 0.5 ) {
            input = prompt("Your input was zero or rounded to zero which is not allowed.\nChoose a positive integer as maximum value for the number guessing game: ");   
        } else if (input < 0) {
            input = prompt("Negative numbers are not allowed.\nChoose a positive integer as maximum value for the number guessing game: "); 
        } else if (input.length === 0) {
            input = prompt("You didn't provide any input.\nChoose a positive integer as maximum value for the number guessing game: "); 
        }
         max_value = Number(input);
         max_value = Math.round(max_value);
         if(max_value != NaN && max_value > 0) {
             valid_input = true;    
             }
            }
    return max_value;            
}
function getValidGuess() {
    let guess_input = document.getElementById("num").value;
    let guess_input_numerical = Number(document.getElementById("num").value);
    let valid_guess = false;
        if (isNaN(guess_input) || guess_input.length === 0) {   
            msg2.innerHTML = "That is not a number!";  
            msg2.style = "display:block";
        } else if (guess_input_numerical  < 1 || guess_input_numerical  > max) {    
            msg2.innerHTML = "That number is not in range, try again."; 
            msg2.style = "display:block";       
        } else {
            valid_guess = true;
            n = guess_input_numerical;
            msg2.innerHTML = "";
            msg2.style = "display:none";
        }
    return valid_guess;
}
function guessChecker(){
    msg1.innerHTML = "";
    let check = getValidGuess();
    if (check) {
        if (arr.indexOf(n) !== -1) {
            if (won) {
                msg1.innerHTML = `You have already guessed the number correctly! It took you ${arr.length} tries and your guesses were ${arr.join(', ')}`;
            } else {
                msg1.innerHTML = "You have already tried this number. Try a different one.";
            }           
        } else {
            if (won) {
                msg1.innerHTML = `Game over! You have already guessed the number correctly! It took you ${arr.length} tries and your guesses were ${arr.join(', ')}`;
            } else {
                arr.push(n);
            if (n < rndm) {
                msg1.innerHTML = "No, try a higher number.";
            } else if (n > rndm) {
                msg1.innerHTML = "No, try a lower number.";
            } else {
                msg1.innerHTML = `You got it! It took you ${arr.length} tries and your guesses were ${arr.join(', ')}`;
                won = true;
            }

            }
        }  
    } else if (won) {
        msg1.innerHTML = `Game over! You have already guessed the number correctly! It took you ${arr.length} tries and your guesses were ${arr.join(', ')}`;
    }      
}
document.getElementById('guess').addEventListener('click', guessChecker, false);



