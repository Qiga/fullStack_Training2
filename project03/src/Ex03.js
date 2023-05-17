import React from 'react'
import {useState} from 'react'

const Ex03 = () => {

    /* 랜덤 게임
    
    랜덤 수 뽑기
    누른 숫자 구하기
    비교하기
    
    단, 각각 변화하는 수들은 바로 화면에 보여지게 함
    */


    const [choice, setchoice] = useState(0);
    const [ranNum, setRanNum] = useState(0);
    const [text, setText] = useState("");


    const btnCk = (e) => {
            setchoice(e.target.innerText);
            setRanNum(parseInt(Math.random()*3+1));
            choice==ranNum ? setText("정답입니다") : setText("땡") //라이프 사이클 때문에 정상적으로 작동하지 않음.
        }
    

  return (
    <div>
        <button onClick={btnCk}>1</button>
        <button onClick={btnCk}>2</button>
        <button onClick={btnCk}>3</button>

        <p>내가 입력한 숫자 : {choice}</p>
        <p>랜덤 숫자 : {ranNum}</p>
        <p>{text}</p>
    </div>
    
  )
}

export default Ex03