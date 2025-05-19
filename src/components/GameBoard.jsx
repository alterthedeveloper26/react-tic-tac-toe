import { useState } from "react"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export function GameBoard({onStepClick, activePlayer}){
  let [gameBoardVals, setGameBoardVals] = useState(initialGameBoard)

  function handleCellClick(rowId, colId){
    setGameBoardVals((gameBoardVals => {
      const updatedBoard = [...gameBoardVals.map(cols => ([...cols]))]
      updatedBoard[rowId][colId] = activePlayer
      return updatedBoard
    }))

    onStepClick()
  }

  return (
    <ol id='game-board'>
      {gameBoardVals.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cellVal, colIndex) => (
              <li key={colIndex}><button onClick={() => handleCellClick(rowIndex, colIndex, 'X')}>{cellVal}</button></li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}