import React from 'react'
import '../App.css'

const Ex02MenuItem = ({menu, price, text, path}) => {


  return (
    <div className='container'>
        <img src={path} width="150px"/>
        <p className='menu-container'>
            <span> {menu} </span>
            <span> ({price}원)</span>    
        </p>
        <p>{text}</p>
    </div>
  )
}

export default Ex02MenuItem

// react = > 단 방향 흐름 