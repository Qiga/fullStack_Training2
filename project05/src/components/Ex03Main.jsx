import React from 'react'
import { DarkContext } from '../context/Ex03DarkMod'
import { useContext } from 'react';

const Ex03Main = () => {
  
    const {IsDark, setIsDark} = useContext(DarkContext);
  

  return (
    <div>
        Ex03Main
        <br/>
        <button onClick={() => { IsDark ? setIsDark(false) : setIsDark(true)}}>다크모드</button>
    </div>
  )
}

export default Ex03Main