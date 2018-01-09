//page variables
var guess;
var correct;
var turns;

//components
var output;
var txtGuess;
var btnAgain;

function init(){
    output = document.getElementById("output");
    txtGuess = document.getElementById("guessTxt");
    btnAgain = document.getElementById("btnAgain");

    btnAgain.style.display = "none";

    turns = 0;

    output.innerHTML = "I'm thinking of a number between 1 and 100. ";
    output.innerHTML = "Guess my number, and I'll tell you if you are too high or too low!"

    correct = parseInt(Math.random() * 100);
    console.log(correct);
}

function checkGuess(){
    turns++;

    guess = parseInt(txtGuess.value);

    if(guess < correct){
        output.innerHTML = "Guess was too low";
    }
    else if(guess > correct){
        output.innerHTML = "Guess was too high";
    }
    else if(guess == correct){
        output.innerHTML = "Guess was correct! Good job!<br/>";
        output.innerHTML += "You took " + turns + " guesses"
        btnAgain.style.display= "block";
    }
    else{
        output.innerHTML = "Enter a number between 1 and 100"
    }
}