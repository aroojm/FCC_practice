// generate random number to be guessed
let rndm = Math.floor(Math.random() * 20) + 1;
// variable to hold input guess value
let n;
let msg = document.getElementById("result");
function guessChecker(){
    n = parseInt(document.getElementById("num").value);
    if (n < rndm) {
        msg.innerHTML = "No, try a higher number.";
    } else if (n > rndm) {
        msg.innerHTML = "No, try a lower number.";
    } else {
        msg.innerHTML = "You got it!";
    }   
}
document.getElementById('guess').addEventListener('click', guessChecker, false);