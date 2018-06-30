document.onkeyup = function(event) {
    var userGuess = event.key; //taking in user guess
    var letterGuess = letters[Math.floor(Math.random()*letters.length)]; //computer selects random letter
    guessesSoFar.push(userGuess); //pushing user guess to guesses so far
    if (userGuess == letterGuess) {
        userGuess.
        wins++;
        alert('YASSSSS! You have guesesed corrrectly. You Won....nothing...just a pat on the back!');
        guessesLeft = 5; //reseting the guesses back to 9 so that the user can play again
        guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
    }
    else if (guessesLeft == 0){
        losses++;
        alert('You did not guess the correct letter. You lost loser. Try again.');
        guessesLeft = 5;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== letterGuess){
        guessesLeft--; //decrementing the guesses left
    }  
    // Taking the tallies and displaying them in HTML    
    var html = "<h1>The Psychic Game</h1>" + 
    "<p>Guess the Letter!</p>" +
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
    // Placing the html into the game ID
    document.querySelector('#greeting').innerHTML = html;
}
