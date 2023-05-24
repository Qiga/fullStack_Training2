import React from 'react'
import { useContext } from 'react';
import { ColorContext } from '../context/Ex02ColorContext';

const Ex02ColorList = () => {
    let color = ['red', 'orange', 'yellow', 'green', 'blue'];

    const {setChoiceColor} = useContext(ColorContext)

  return (
    <div style = {{display : 'flex'}}>
        {color.map(item =><div onClick ={(e)=>{setChoiceColor(e.target.style.backgroundColor)}} key={item} style = {{
            width : '100px',
            height : '100px',
            backgroundColor : `${item}`
        }}></div>)}
    </div>
  )
}

export default Ex02ColorList