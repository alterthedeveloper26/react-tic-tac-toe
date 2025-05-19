import { Player } from './components/Player'
import { GameBoard } from './components/GameBoard'
import { GameOver } from './components/GameOver'
import { Log } from './components/Log'
import { useState } from 'react'
import { checkWinner } from './utils/check-winner'

const INITIAL_PLAYER = {
  X: 'Player 1',
  O: 'Player 2'
}

function deriveActivePlayer(logs) {
  let currentInputSymbol = 'X'

  if (logs[0] && logs[0].symbol === 'X') {
    currentInputSymbol = 'O'
  }

  return currentInputSymbol
}

function App() {
  let gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
  let winner = null
  let hasDraw = false

  const [logs, recordLog] = useState([])
  const [playerNames, setPlayerNames] = useState(INITIAL_PLAYER)

  if (logs.length) {
    logs.forEach(({ coordinate, symbol }) => {
      const { x, y } = coordinate
      gameBoard[x][y] = symbol
    })
  }

  if (logs.length >= 5) {
    winner = checkWinner(gameBoard)
    if (winner) {
      winner = playerNames[winner]
    }

    if (logs.length === 9 && !winner) {
      hasDraw = true
    }
  }

  let activePlayerSymbol = deriveActivePlayer(logs)

  function handlePlayerNameChange(newName, symbol) {
    setPlayerNames((preNames) => ({
      ...preNames,
      [symbol]: newName
    }))
  }

  function handleGameStep(rowIndex, colIndex) {
    recordLog((preLogs) => {
      const updatedLogs = [{ coordinate: { x: rowIndex, y: colIndex }, symbol: deriveActivePlayer(preLogs) }, ...preLogs]

      return updatedLogs
    })
  }

  function handleGameRematch() {
    recordLog([])
  }

  return (
    <main>
      <div id="game-container">
        {(winner || hasDraw) && <GameOver winner={hasDraw ? null : winner} handleRematch={handleGameRematch} />}
        <ol id="players" className="highlight-player">
          <Player initialName={playerNames.X} symbol="X" isActivePlayer={activePlayerSymbol === 'X'} changeName={handlePlayerNameChange} />
          <Player initialName={playerNames.O} symbol="O" isActivePlayer={activePlayerSymbol === 'O'} changeName={handlePlayerNameChange} />
        </ol>
        <GameBoard onStepClick={handleGameStep} gameBoard={gameBoard} />
      </div>
      <Log logs={logs} />
    </main>
  )
}

export default App
