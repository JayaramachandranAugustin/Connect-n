import { useState } from 'react'
import Board from './components/Board'
import { GameDataProvider } from './context/GameContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GameDataProvider>
     <Board/>
    </GameDataProvider>
  )
}

export default App
