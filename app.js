//create secret number
var secretNumber = 4;

//ask user for guess
//create vairable for prompt, then create vairable srting that passes the number through to convert from string to number  

var stringGuess = prompt("guess a number");
var guess = Number(stringGuess);

//check if guess is right
//pass guess through Number() to convert the string 4 into a number.
if(guess === secretNumber){
  alert("you got it right!");
}

//otherwise check if higher
else if(guess > secretNumber){
  alert("too high, try again");
}

//otherwise check if lower
else{
  alert("too low, try again");
}