import React from 'react'
import { AppHeader, Circle } from '../elements/Elements'
import { useGameState } from '../context/GameContext'

const Header = () => {
    const {gameData} =useGameState();
  return (
    <AppHeader>
        <div className='contents'>
            <p className ='header'>Connect {gameData.connect}</p>
            { gameData.gameStatus === -1 && 
            <>
                <p className="status"> Player {gameData.playerTurn} Turn</p>
                <p className="status"> Drop</p>
                <Circle color = {gameData.playerTurn ===1? "yellow":"red"}/>
            </>}

            <p className="status"> {gameData.gameStatus !== -1 ? (gameData.gameStatus ===1? "Player 1 won":"Player 2 Won"):null} </p>
        </div>
    </AppHeader>
  )
}

export default Header