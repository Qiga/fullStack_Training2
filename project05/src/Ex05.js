import React, { useRef } from 'react'
import Ex05ButtonList from './components/Ex05ButtonList'



const Ex05 = () => {
/** useRef : 특정 Dom요소에 접근하고 싶을 때 = 바닐라 JS에서는 getElementById,
 * querySelector 등을 사용해서 특정 Dom요소에 접근 했었음
 * => React 를 사용할 때 특정 Dom 요소에 직접 접근해야하는 일이 발생할 수 있음 (포커싱, 속성변경)
 *   => useRef 라는 react Hook을 사용할 것 
 */

    const divRef = useRef()

    const changeSize = (size)=>{
        divRef.current.style.width = `${size}px`
        divRef.current.style.height =  `${size}px`
    }

    const chBox = (e) => {
        console.log('cha', e.target.innerText)
        if(e.target.innerText == "작게"){
            changeSize(100)
        }else if(e.target.innerText == '원본'){
            changeSize(200)
        }else{
            changeSize(300)
        }
    }

    return (
    <div>
        <Ex05ButtonList chBox={chBox} />
        <div 
            ref = {divRef}
            style = {{
            backgroundColor : "skyblue",
            width : "150px",
            height : "150px"
        }}> </div>
    </div>
  )
}

export default Ex05