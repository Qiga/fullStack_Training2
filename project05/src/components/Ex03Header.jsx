import React from 'react'
import { useContext } from 'react'
import { DarkContext } from '../context/Ex03DarkMod'

const Ex03Header = () => {

  const{IsDark} = useContext(DarkContext)

  return (
    <div style = {{backgroundColor : IsDark ? 'white':'black' , color : IsDark ? 'black' : 'white'}}>
      Ex03Header
      </div>
  )
}

export default Ex03Header