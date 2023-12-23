import React, {createContext, useReducer, useContext} from 'react';
import { CREATE_GAME, DROP_COIN } from '../constants/gameConstants';

const GameStateContext = createContext();
const GameDispatchContext = createContext();

const checkVertical = (state, currentCol) =>{
    var currPlayer = state.playerTurn;
    var currCount = 0;
    for(var i=0;i<state.row;i++){
        if(state.boardData[i][currentCol]== currPlayer){
            currCount=currCount+1;
            if (state.connect === currCount) return true;
        }else{
            currCount = 0;
        }
    }
    return false;
}

const checkHorizontal = (state, currentRow) =>{
    var currPlayer = state.playerTurn;
    var currCount = 0;
    for(var i=0;i<state.column;i++){
        if(state.boardData[currentRow][i]== currPlayer){
            currCount=currCount+1;
            if (state.connect === currCount) return true;
        }else{
            currCount = 0;
        }
    }
    return false;
}


const checkDiagonalBottomLeftToTopRight = (state,currentRow,  currentCol) =>{
    var difference = Math.min(currentRow, (state.column-1)-currentCol);
    var startRow = currentRow-difference;
    var startCol = currentCol+difference;

     var currPlayer = state.playerTurn;
     var currCount = 0;
     for(var rowIndex=startRow, colIndex=startCol;(rowIndex<state.row) && (colIndex>=0);rowIndex++,colIndex--){
        if(state.boardData[rowIndex][colIndex]== currPlayer){
            currCount=currCount+1;
            console.log("currCount : "+currCount+",state.connect : "+state.connect);
            if (state.connect === currCount) return true;
        }else{
            currCount = 0;
        }
     }
    return false;
}


const checkDiagonalTopLeftToBottomRight = (state,currentRow,  currentCol) =>{
    var difference = Math.min(currentRow, currentCol);
    var startRow = currentRow-difference;
    var startCol = currentCol-difference;
    var currPlayer = state.playerTurn;
    var currCount = 0;
    for(var rowIndex=startRow, colIndex=startCol;(rowIndex<state.row) && (colIndex<state.column);rowIndex++,colIndex++){
       if(state.boardData[rowIndex][colIndex]== currPlayer){
           currCount=currCount+1;
           if (state.connect === currCount) return true;
       }else{
           currCount = 0;
       }
    }
    return false;

}


const checkBoardStatus =(state, currentRow, currentCol)=>{
    if(checkVertical(state, currentCol) ||
    checkHorizontal(state, currentRow)||
    checkDiagonalBottomLeftToTopRight(state, currentRow, currentCol)||
    checkDiagonalTopLeftToBottomRight(state, currentRow, currentCol)){
        return true;
    }
    return false;
}

const dropCoin =(state, data)=>{
    for (let i=state.boardData.length-1 ;i>=0;i--){
        if(state.boardData[i][data.colIndex] === 0){
            state.boardData[i][data.colIndex] = state.playerTurn;
            let flag = checkBoardStatus(state, i, data.colIndex);
            if(flag) state.gameStatus = state.playerTurn;
            state.playerTurn = state.playerTurn ===1?2:1;
            break;
        }
    }
    return {...state}
}

const createGame =(state, data)=>{
    let boardData =[];
    for(let i=0;i<data.row;i++){
        let arr=[];
        for(let j=0;j<data.column;j++){
            arr.push(0);
        }
        boardData.push(arr);
    }
    state.boardData=boardData;
    state.gameStatus=-1;
    state.connect=parseInt(data.connect);
    state.column=parseInt(data.column);
    state.row=parseInt(data.row);
    state.playerTurn=1;
    return {...state}
}


const gameReducer =(state, action) =>{
    switch(action.type){
        case DROP_COIN:
            return dropCoin(state, action.data);
        case CREATE_GAME:
            return createGame(state, action.data);
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}
export const GameDataProvider = ({children})=>{
    const [gameData, gameDataDispatch] = useReducer(gameReducer, {boardData:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],
        playerTurn:1,
        gameStatus:-1,
        row:5,
        column:7,
        connect:4});

    return (<GameDispatchContext.Provider value={{gameDataDispatch}}>
        <GameStateContext.Provider value ={{gameData}}>
            {children}
        </GameStateContext.Provider>
    </GameDispatchContext.Provider>)
}

export const useGameState =() => useContext(GameStateContext);
export const useGameDispatch =() => useContext(GameDispatchContext);