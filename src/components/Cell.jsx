import React from 'react'
import { CellElement, Circle } from '../elements/Elements'
import { useGameDispatch, useGameState } from '../context/GameContext'
import { DROP_COIN } from '../constants/gameConstants';

const Cell = ({data,index}) => {

   const {gameDataDispatch} = useGameDispatch();
   const {gameData} =useGameState();

   const dropCoin =(index)=>{
    if (gameData.gameStatus === -1) gameDataDispatch({type:DROP_COIN, data:{colIndex:index}});
   }
  return (
    <CellElement onClick={()=>{dropCoin(index)}}>
        <Circle color ={data===0 ? "": (data===1?"yellow":"red")}/>
    </CellElement>
  )
}

export default Cell