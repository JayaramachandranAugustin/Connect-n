import React from 'react'
import { RowElement } from '../elements/Elements'
import Cell from './Cell'

const Row = ({rowData}) => {
  return (
    <RowElement>
        {rowData && rowData.map((data,index)=>(
            <Cell key={index} data={data} index={index}/>
        ))}
    </RowElement>
  )
}

export default Row