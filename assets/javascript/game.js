var wins= 0;
var losses= 0;
var guessesLeft= 0;
var guessesSoFar = []; 
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]


document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
    var letters = letters[Math.floor(Math.random()*letters.length)]; 
    guessesSoFar.push(userGuess); 
    if (userGuess == letterGuess) {
        wins++;
        alert('YASSSSS! You have guesesed corrrectly. You Won....nothing...just a pat on the back!');
        guessesLeft = 5; 
        guessesSoFar.length = 0; 
    }
    else if (guessesLeft == 0){
        losses++;
        alert('You didn\'t guess the correct letter. You lost. Let\'s try again.');
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== letterGuess){
        guessesLeft--; 
    }  
    
    var html = "<h1>The Psychic Game</h1>" + 
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Total Wins: " + 
    wins + 
    "</p>" +
    "<p>Total Losses: " + 
    losses + 
    "</p>" +
    "<p>Guesses Left: " + 
    guessesLeft + 
    "</p>" +
    "<p>Your Guesses so far: " +
    guessesSoFar +
    "</p>"
    ;
   
    document.querySelector('#game').innerHTML = html;
}