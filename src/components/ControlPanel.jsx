import React, {useState} from 'react'
import { PanelElement } from '../elements/Elements'
import { useGameDispatch, useGameState } from '../context/GameContext'
import { CREATE_GAME } from '../constants/gameConstants';

const ControlPanel = () => {
    const {gameData} =useGameState();
    const {gameDataDispatch} = useGameDispatch();
    const [data, setData] = useState({"row":gameData.row, "column":gameData.column, "connect":gameData.connect});
    const handleChange =(event)=>{
        const {name, value} =event.target;
        setData({...data,[name]:value});
    }
    const createBoard =()=>{
        if(data.row !==0 && data.column !==0 && data.connect !==0 ){
            gameDataDispatch({type:CREATE_GAME, data:data});
        }
    }
  return (
    <PanelElement>
        <div className='row'>
            <div className='column'>
                Row
            </div>
            <div className='column'>
                <input type="number" name="row" value={data.row} onChange={handleChange}/>
            </div>
        </div>
        <div className='row'>
            <div className='column'>
                Column
            </div>
            <div className='column'>
                <input type="number" name="column" value={data.column} onChange={handleChange}/>
            </div>
        </div>
        <div className='row'>
            <div className='column'>
                Connect
            </div>
            <div className='column'>
                <input type="number" name="connect" value={data.connect} onChange={handleChange}/>
            </div>
        </div>
        <button onClick={createBoard} >Start new game</button>
    </PanelElement>
  )
}

export default ControlPanel