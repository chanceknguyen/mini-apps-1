var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

var nextX = true;
var winner;
var endGame;
var gameOver = false;
var placedCounter = 0;
var xCounter = 0;
var oCounter = 0;

var displayWins = function() {
  document.getElementById('x-wins').innerHTML = xCounter;
  document.getElementById('o-wins').innerHTML = oCounter;
}

var displayTurn = function() {
  if(nextX) {
    document.getElementById('turn').innerHTML = "It is X's turn!";
  } else {
    document.getElementById('turn').innerHTML = "It is O's turn!";
  }
}

var checkWin = function() {
  if (board[0][0] !== null){
    if (board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
      endGame = `Game is over! ${board[0][0]} has won. Please start a new game!`;
      winner = board[0][0];
      return true;
    }
    if (board[0][0] === board[1][0] && board[0][0] === board[2][0]) {
      endGame = `Game is over! ${board[0][0]} has won. Please start a new game!`;
      winner = board[0][0];
      return true;
    }
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      endGame = `Game is over! ${board[0][0]} has won. Please start a new game!`;
      winner = board[0][0];
      return true;
    }
  }
  if (board[0][1] !== null){
    if (board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
      endGame = `Game is over! ${board[0][1]} has won. Please start a new game!`;
      winner = board[0][1];
      return true;
    }
  }
  if (board[0][2] !== null){
    if (board[0][2] === board[1][2] && board[0][2] === board[2][2]) {
      endGame = `Game is over! ${board[0][2]} has won. Please start a new game!`;
      winner = board[0][2];
      return true;
    }
  }
  if (board[1][0] !== null){
    if (board[1][0] === board[1][1] && board[1][0] === board[1][2]) {
      endGame = `Game is over! ${board[1][0]} has won. Please start a new game!`;
      winner = board[1][0];
      return true;
    }
  }
  if (board[2][0] !== null){
    if (board[2][0] === board[2][1] && board[2][0] === board[2][2]) {
      endGame = `Game is over! ${board[2][0]} has won. Please start a new game!`;
      winner = board[2][0];
      return true;
    }
    if (board[2][0] === board[1][1] && board[2][0] === board[0][2]) {
      endGame = `Game is over! ${board[2][0]} has won. Please start a new game!`;
      winner = board[2][0];
      return true;
    }
  }
  if (placedCounter === 9) {
    endGame = 'Tie Game!';
    return true;
  }
  return false;

}

var resetBoard = function() {
  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  setUpBoard(board);
  alert('New game is ready! Winner goes first!');
}

var boardPosition = {
  '0': {row: 0, column: 0},
  '1': {row: 0, column: 1},
  '2': {row: 0, column: 2},
  '3': {row: 1, column: 0},
  '4': {row: 1, column: 1},
  '5': {row: 1, column: 2},
  '6': {row: 2, column: 0},
  '7': {row: 2, column: 1},
  '8': {row: 2, column: 2},
}

var placeTile = function(number) {
  if(!gameOver) {
    var coordinates = boardPosition[number];
    if (board[coordinates.row][coordinates.column] === null) {
      if (nextX) {
        board[coordinates.row][coordinates.column] = 'X';
      } else {
        board[coordinates.row][coordinates.column] = 'O';
      };
      document.getElementById(number).innerHTML = board[coordinates.row][coordinates.column];
      nextX = !nextX;
      displayTurn();
    } else {
      alert("Move cannot be made here! Please pick another box!")
    }
    if(checkWin()) {
      gameOver = true;
      if(winner === 'X') {
        xCounter++;
      } else {
        oCounter++;
      }
      displayWins();
      alert(`${endGame}`);
    }
  } else {
    alert(`Please start a new game!`)
  }
}

var boardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]


var setUpBoard = function(gameBoard) {

  document.getElementById("0").innerHTML = gameBoard[0][0];
  document.getElementById("1").innerHTML = gameBoard[0][1];
  document.getElementById("2").innerHTML = gameBoard[0][2];
  document.getElementById("3").innerHTML = gameBoard[1][0];
  document.getElementById("4").innerHTML = gameBoard[1][1];
  document.getElementById("5").innerHTML = gameBoard[1][2];
  document.getElementById("6").innerHTML = gameBoard[2][0];
  document.getElementById("7").innerHTML = gameBoard[2][1];
  document.getElementById("8").innerHTML = gameBoard[2][2];
}

setUpBoard(board);
displayWins();

document.getElementById("app").addEventListener('click', function(event) {
  placedCounter++;
  placeTile(event.target.id);
})

document.getElementById("reset").addEventListener('click', function(event) {
  placedCounter = 0;
  gameOver = !gameOver;
  if(winner === 'X') {
    nextX = true;
  } else {
    nextX = false;
  }

  document.getElementById('x-wins').addEventListener('click', function(event) {
    (console.log('clicked'))
  });
  resetBoard();
  displayTurn();
})




