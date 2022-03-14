export { }

let player1: number = 5;
let player2: number = 10;

function comparison() {
    let randomNumber: number = Math.floor((Math.random() * (100 - 1) + 1));
    console.log(randomNumber);
    let numberDifference1: number = Math.abs(randomNumber - player1);
    let numberDifference2: number = Math.abs(randomNumber - player2);
    if (randomNumber == player1) {
        console.log("Player1 wins the game")
    }
    else if (randomNumber == player2) {
        console.log("Player2 wins the game")
    } else if (numberDifference1 < numberDifference2) {
        console.log("Both players lost the game :( Player 1 got closer though :)")
    } else {
        console.log("Both players lost the game :( Player 2 got closer though:)")
    }
}

comparison();
