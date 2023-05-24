import React, { useRef } from 'react'

const Ex07 = () => {

    const inputRef =useRef()
    const imgRef = useRef()

    const chImg = ()=>{
        if(inputRef.current.value == "사나"){
            imgRef.current.src = "https://i.namu.wiki/i/6KjOsibngJQukT6cL7zkn4KKsh7q0T--9US32xc1_IKB9T2Wh1IxNJH-4-e5rP7Pa_0Kc6SYCcCOsRBI7rpiow.gif"
        }else if(inputRef.current.value == "나연"){
            imgRef.current.src = "https://i.namu.wiki/i/WDH8wxEwDZ6l7Clauna9UTWRhXrhF7gbZOXoOifeMjSKSBmYaCxyhsqI2CC7SDtHwUZ68iDmEQuSp2B9t60Hvw.gif"
        }else{
        }
       inputRef.current.value = ""
       inputRef.current.focus()
    }



  return (
    <div>
        <p>희망하는 사진이 있으신가요?</p>
        <input type="text" ref={inputRef}></input>
        <button onClick={chImg}>변경!</button>

        <div>
            <img 
                ref = {imgRef}
                src = "https://i.namu.wiki/i/WDH8wxEwDZ6l7Clauna9UTWRhXrhF7gbZOXoOifeMjSKSBmYaCxyhsqI2CC7SDtHwUZ68iDmEQuSp2B9t60Hvw.gif"
                width = '200px'
                ></img>
        </div>
    </div>
  )
}

export default Ex07