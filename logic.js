let players = ['x', 'o'];
let activePlayer = 0;

let board;


function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  renderBoard(board);
}

function click(row, col) {
  board[row][col] = players[activePlayer];

  renderBoard(board);

  for (let t = 0; t < board.length; t++) {
    if (board[t][0] === players[activePlayer] && board[t][1] === players[activePlayer] && board[t][2] === players[activePlayer]) {
      showWinner(activePlayer);
    } else if (board[0][t] === players[activePlayer] && board[1][t] === players[activePlayer] && board[2][t] === players[activePlayer]) {
      showWinner(activePlayer);
    } else if (board[0][0] === players[activePlayer] && board[1][1] === players[activePlayer] && board[2][2] === players[activePlayer]) {
      showWinner(activePlayer);
    } else if (board[0][2] === players[activePlayer] && board[1][1] === players[activePlayer] && board[2][0] === players[activePlayer]) {
      showWinner(activePlayer);
    } else if (draw.length == 0){
        showDraw() 
    }
  }

  if (activePlayer === 1) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }
}