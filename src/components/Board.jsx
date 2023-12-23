import React from 'react'
import { BoardElement, Container } from '../elements/Elements'
import Row from './Row'
import { useGameState } from '../context/GameContext'
import Header from './Header'
import ControlPanel from './ControlPanel'

const Board = () => {
    const {gameData} = useGameState();
  return (
<>
<Header/>
<Container>
<BoardElement>
        {gameData && gameData.boardData && gameData.boardData.map((rowData,index)=>(
            <Row key={index} rowData={rowData}/>
        ))}
        </BoardElement>
        <ControlPanel />
</Container>
</>
  )
}

export default Board