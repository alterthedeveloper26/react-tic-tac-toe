export function GameBoard({ onStepClick, gameBoard }) {
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cellVal, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onStepClick(rowIndex, colIndex)} disabled={!!cellVal}>
                  {cellVal}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
