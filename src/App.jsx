import {Player} from './components/Player'
import {GameBoard} from './components/GameBoard'
import {  useState } from 'react'

function App() {
  const [activePlayerSymbol, setActivePlayerSymbol] = useState('X')
  const [logs, recordLog] = useState([])

  function handleGameStep(rowIndex, colIndex){
    setActivePlayerSymbol(activePlayerSymbol => {
      return activePlayerSymbol === 'X' ? 'O' : 'X'
    })

    recordLog((preLogs) => {
      let currentInputSymbol = 'X'

      if(preLogs[0] && preLogs[0].symbol === 'X'){
        currentInputSymbol = 'O'
      }

      const updatedLogs = [
        {coordinate: {x: rowIndex, y: colIndex}, symbol: currentInputSymbol},
        ...preLogs
      ]

      return updatedLogs
    })
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player initialName='Player  1' symbol='X' isActivePlayer={activePlayerSymbol === 'X'}/>
          <Player initialName='Player 2' symbol='O' isActivePlayer={activePlayerSymbol === 'O'}/>
        </ol>
        <GameBoard onStepClick={handleGameStep} activePlayer={activePlayerSymbol}/>
      </div>
    </main>
  )
}

export default App
