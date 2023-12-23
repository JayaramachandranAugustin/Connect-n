import styled from "styled-components";

export const CellElement = styled.div`
    position:relative;
    width:110px; height:110px;
    cursor: cell;
    overflow:hidden;
    :after{
        content:'';
        position:absolute;
        left:5px; top:5px;
        border-radius:100%;
        width:100px; height:100px;
        box-shadow: 0px 0px 0px 2000px #00a8ff;
    }
`

export const Circle = styled.div`
    position:relative;
    border-radius: 50%;
    left:1px; top:1px;
    width:110px; height:110px;
    background-color:${props => props.color}; ;
`

export const RowElement = styled.div`
    display:flex;
    flex-direction:row ;
    gap:0px ;
    justify-content:center ;

`

export const BoardElement = styled.div`
    display:flex;
    flex-direction:column ;
    gap:0px ;
    justify-content:center ;

`

export const Container = styled.div`
    display:flex;
    flex-direction:row ;
    gap:10px ;
    justify-content:center ;
`


export const AppHeader = styled.div`
    display:flex;
    flex-direction:row ;
    gap:2px ;
    justify-content:center ;
    .contents{
        display:flex;
        flex-direction:column ;
        gap:2px ;
        justify-content:center ;
        margin-bottom:10px ;
    }
    p{
        margin:0 ;
    }
    .header{
        font-weight:600 ;
        font-size:2em ;
    }
    .status{
        font-size:1.2em ;
        font-weight:400 ;
    }

`
export const PanelElement = styled.div`
    display:flex;
    flex-direction:column ;
    gap:10px ;
    align-items:flex-start ;
    justify-content:center ;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    height:200px ;
    width:200px ;
    padding:10px ;

    .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding-right:10px ;
    }
    input{
        padding:5px ;
        width:40px ;
    }

    .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    }
    button{
        margin-left:30px ;
        padding:10px ;
        border: none ;
        background: green ;
        color:white ;
    }

`