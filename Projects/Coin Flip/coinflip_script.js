function guessChecker(guess){
    let toss = Math.round(Math.random());
    let tossString = numToString(toss);
    if (guess === tossString) {
       document.getElementById("result").innerHTML =  `${outputString(guess, tossString)}Good Guess!`;
    } else {
      document.getElementById("result").innerHTML = `${outputString(guess, tossString)}Wrong Guess!`;   
    }
  }
  function numToString(num) {
    let str;
    if (num == 0) {
      str = "Tails";
    } else if (num == 1) {
      str = "Heads";
    }
    return str;  
  }
  function outputString(guess, tossString){
    return `You guessed ${guess}...<br>The coin flips and comes up ${tossString}! <br>`;
  }