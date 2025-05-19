export function checkWinner(board) {
  const size = board.length

  // Check rows
  for (let row = 0; row < size; row++) {
    if (board[row].every((cell) => cell === board[row][0] && cell !== null)) {
      return board[row][0]
    }
  }

  // Check columns
  for (let col = 0; col < size; col++) {
    let winner = board[0][col]
    if (winner !== null && board.every((row) => row[col] === winner)) {
      return winner
    }
  }

  // Check main diagonal
  let mainDiagonal = board[0][0]
  if (mainDiagonal !== null && board.every((row, index) => row[index] === mainDiagonal)) {
    return mainDiagonal
  }

  // Check anti-diagonal
  let antiDiagonal = board[0][size - 1]
  if (antiDiagonal !== null && board.every((row, index) => row[size - 1 - index] === antiDiagonal)) {
    return antiDiagonal
  }

  // No winner
  return null
}
