// const heading = document.createElement("h1");
// const heading_text = document.createTextNode("Big Head!");
// heading.appendChild(heading_text);
// document.body.appendChild(heading);

var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

var newBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

var nextX = true;
var winner;
var gameOver = false;
var placedCounter = 0;

var checkWin = function() {
  if (board[0][0] !== null){
    if (board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
      winner = `Game is over! ${board[0][0]} has won. Please start a new game!`;
      return true;
    }
    if (board[0][0] === board[1][0] && board[0][0] === board[2][0]) {
      winner = `Game is over! ${board[0][0]} has won. Please start a new game!`;
      return true;
    }
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      winner = `Game is over! ${board[0][0]} has won. Please start a new game!`;
      return true;
    }
  }
  if (board[0][1] !== null){
    if (board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
      winner = `Game is over! ${board[0][1]} has won. Please start a new game!`;
      return true;
    }
  }
  if (board[0][2] !== null){
    if (board[0][2] === board[1][2] && board[0][2] === board[2][2]) {
      winner = `Game is over! ${board[0][2]} has won. Please start a new game!`;
      return true;
    }
  }
  if (board[1][0] !== null){
    if (board[1][0] === board[1][1] && board[1][0] === board[1][2]) {
      winner = `Game is over! ${board[1][0]} has won. Please start a new game!`;
      return true;
    }
  }
  if (board[2][0] !== null){
    if (board[2][0] === board[2][1] && board[2][0] === board[2][2]) {
      winner = `Game is over! ${board[2][0]} has won. Please start a new game!`;
      return true;
    }
    if (board[2][0] === board[1][1] && board[2][0] === board[0][2]) {
      winner = `Game is over! ${board[2][0]} has won. Please start a new game!`;
      return true;
    }
  }
  if (placedCounter === 9) {
    winner = 'Tie Game!';
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
  alert('New game is ready!');
}

var boardPosition = function(number) {
  if (number === '0' ) {
    return {row: 0, column: 0};
  } else if (number === '1' ) {
    return {row: 0, column: 1};
  } else if (number === '2' ) {
    return {row: 0, column: 2};
  } else if (number === '3' ) {
    return {row: 1, column: 0};
  } else if (number === '4' ) {
    return {row: 1, column: 1};
  } else if (number === '5' ) {
    return {row: 1, column: 2};
  } else if (number === '6') {
    return {row: 2, column: 0};
  } else if (number === '7' ) {
    return {row: 2, column: 1};
  } else if (number === '8' ) {
    return {row: 2, column: 2};
  };

};

var placeTile = function(number) {
  if(!gameOver) {
    var coordinates = boardPosition(number);
    if (board[coordinates.row][coordinates.column] === null) {
      if (nextX) {
        board[coordinates.row][coordinates.column] = 'X';
      } else {
        board[coordinates.row][coordinates.column] = 'O';
      };
      document.getElementById(number).innerHTML = board[coordinates.row][coordinates.column];
      nextX = !nextX;
    } else {
      alert("Move cannot be made here! Please pick another box!")
    }
    if(checkWin()) {
      gameOver = true;
      alert(`${winner}`);
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

document.getElementById("app").addEventListener('click', function(event) {
  placedCounter++;
  placeTile(event.target.id);
})

document.getElementById("reset").addEventListener('click', function(event) {
  placedCounter = 0;
  gameOver = !gameOver;
  nextX = true;
  resetBoard();
})
// document.addEventListener('click', function(event) {
//   console.log(event.target.id);
// })



