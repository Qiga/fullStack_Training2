import React from 'react'
import Ex03Header from './components/Ex03Header'
import Ex03Main from './components/Ex03Main'
import { DarkContext } from './context/Ex03DarkMod'
import { useState } from 'react'

const Ex03 = () => {

    const [IsDark, setIsDark] = useState(false);

  return (
    <DarkContext.Provider value = {{IsDark, setIsDark}}>
      <div>
        <Ex03Header/>
        <Ex03Main/>
     </div>
    </DarkContext.Provider>
  )
}

export default Ex03