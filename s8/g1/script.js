"use strict";
//exports.__esModule = true;
var player1 = 5;
var player2 = 10;
function comparison() {
    var randomNumber = Math.floor((Math.random() * (100 - 1) + 1));
    console.log(randomNumber);
    var numberDifference1 = Math.abs(randomNumber - player1);
    var numberDifference2 = Math.abs(randomNumber - player2);
    if (randomNumber == player1) {
        console.log("Player1 wins the game");
    }
    else if (randomNumber == player2) {
        console.log("Player2 wins the game");
    }
    else if (numberDifference1 < numberDifference2) {
        console.log("Both players lost the game :( Player 1 got closer though :)");
    }
    else {
        console.log("Both players lost the game :( Player 2 got closer though:)");
    }
}
comparison();
