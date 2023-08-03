

// removes start screen after clicking start game
const startButton = document.getElementById('start');
const startScreen = document.getElementById('startScreen');
startButton.addEventListener("click", startgame);

function startgame() {
    startScreen.style.display = 'none';
}


// declaring values for each tic tac toe square in the DOM
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');

a1.addEventListener("click", playerMove);
a2.addEventListener("click", playerMove);
a3.addEventListener("click", playerMove);
b1.addEventListener("click", playerMove);
b2.addEventListener("click", playerMove);
b3.addEventListener("click", playerMove);
c1.addEventListener("click", playerMove);
c2.addEventListener("click", playerMove);
c3.addEventListener("click", playerMove);


const gridItem = document.getElementsByClassName("grid-item");

// switches player character depending on the turn 
let currentPlayer = 1;

function playerMove(event) {
    console.log(event.currentTarget);
    if (event.currentTarget.className != "grid-item") {
        return;
    };
    if (currentPlayer == 1) {
        event.currentTarget.classList.remove("grid-item");
        event.currentTarget.setAttribute("class", "p1-kuromi");
        currentPlayer = 2;
    } else if (currentPlayer == 2) {
        event.currentTarget.classList.remove("grid-item");
        event.currentTarget.setAttribute("class", "p2-mymelody");
        currentPlayer = 1;
    };
    playerWins();
};

// checking which player has won 
let player1score = 0;
let player2score = 0;
let tiescore = 0;

function playerWins() {
    if (a1.className === "p1-kuromi" && a2.className === "p1-kuromi" && a3.className === "p1-kuromi") {
        document.getElementById('player1score').innerHTML = ++player1score;
        endGame();
    } else if (a1.className === "p2-mymelody" && a2.className === "p2-mymelody" && a3.className === "p2-mymelody") {
        document.getElementById('player2score').innerHTML = ++player2score;
        endGame();
    } else if (a1.className === "p1-kuromi" && b1.className === "p1-kuromi" && c1.className === "p1-kuromi") {
        document.getElementById('player1score').innerHTML = ++player1score;
        endGame();
    } else if (a1.className === "p2-mymelody" && b1.className === "p2-mymelody" && c1.className === "p2-mymelody") {
        document.getElementById('player2score').innerHTML = ++player2score;
        endGame();
    } else if (a1.className === "p1-kuromi" && b2.className === "p1-kuromi" && c3.className === "p1-kuromi") {
        document.getElementById('player1score').innerHTML = ++player1score;
        endGame();
    } else if (a1.className === "p2-mymelody" && b2.className === "p2-mymelody" && c3.className === "p2-mymelody") {
        document.getElementById('player2score').innerHTML = ++player2score;
        endGame();
    } else if (b1.className === "p1-kuromi" && b2.className === "p1-kuromi" && b3.className === "p1-kuromi") {
        document.getElementById('player1score').innerHTML = ++player1score;
        endGame();
    } else if (b1.className === "p2-mymelody" && b2.className === "p2-mymelody" && b3.className === "p2-mymelody") {
        document.getElementById('player2score').innerHTML = ++player2score;
        endGame();
    } else if (c1.className === "p1-kuromi" && c2.className === "p1-kuromi" && c3.className === "p1-kuromi") {
        document.getElementById('player1score').innerHTML = ++player1score;
        endGame();
    } else if (c1.className === "p2-mymelody" && c2.className === "p2-mymelody" && c3.className === "p2-mymelody") {
        document.getElementById('player2score').innerHTML = ++player2score;
        endGame();
    } else if (a3.className === "p1-kuromi" && b2.className === "p1-kuromi" && c1.className === "p1-kuromi") {
        document.getElementById('player1score').innerHTML = ++player1score;
        endGame();
    } else if (a3.className === "p2-mymelody" && b2.className === "p2-mymelody" && c1.className === "p2-mymelody") {
        document.getElementById('player2score').innerHTML = ++player2score;
        endGame();
    } else if (a2.className === "p1-kuromi" && b2.className === "p1-kuromi" && c2.className === "p1-kuromi") {
        document.getElementById('player1score').innerHTML = ++player1score;
        endGame();
    } else if (a2.className === "p2-mymelody" && b2.className === "p2-mymelody" && c2.className === "p2-mymelody") {
        document.getElementById('player2score').innerHTML = ++player2score;
        endGame();
    } else if (a3.className === "p1-kuromi" && b3.className === "p1-kuromi" && c3.className === "p1-kuromi") {
        document.getElementById('player1score').innerHTML = ++player1score;
        endGame();
    } else if (a3.className === "p2-mymelody" && b3.className === "p2-mymelody" && c3.className === "p2-mymelody") {
        document.getElementById('player2score').innerHTML = ++player2score;
        endGame();
    } else if (a1.className != "grid-item" && a2.className != "grid-item" && a3.className != "grid-item" && b1.className != "grid-item" && b2.className != "grid-item" && b3.className != "grid-item" && c1.className != "grid-item" && c2.className != "grid-item" && c3.className != "grid-item") {
        document.getElementById('tiescore').innerHTML = ++tiescore;
    };
}


// when game has come to a tie



function endGame() {
    a1.removeEventListener("click", playerMove);
    a2.removeEventListener("click", playerMove);
    a3.removeEventListener("click", playerMove);
    b1.removeEventListener("click", playerMove);
    b2.removeEventListener("click", playerMove);
    b3.removeEventListener("click", playerMove);
    c1.removeEventListener("click", playerMove);
    c2.removeEventListener("click", playerMove);
    c3.removeEventListener("click", playerMove);
}

// play again button 
const playAgainButton = document.getElementById('playagainbutton');
playAgainButton.addEventListener("click", playAgain)

function playAgain() {
    a1.className = "grid-item";
    a2.className = "grid-item";
    a3.className = "grid-item";
    b1.className = "grid-item";
    b2.className = "grid-item";
    b3.className = "grid-item";
    c1.className = "grid-item";
    c2.className = "grid-item";
    c3.className = "grid-item";
    a1.addEventListener("click", playerMove);
    a2.addEventListener("click", playerMove);
    a3.addEventListener("click", playerMove);
    b1.addEventListener("click", playerMove);
    b2.addEventListener("click", playerMove);
    b3.addEventListener("click", playerMove);
    c1.addEventListener("click", playerMove);
    c2.addEventListener("click", playerMove);
    c3.addEventListener("click", playerMove);
}