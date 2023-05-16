import React from 'react'
import {useState} from 'react'
const Ex01 = () => {
  
/*

State 
 -컴포넌트 내부에서 관리하는 변경 가능한 데이터
 - 변수와의 차이  : 화면에 렌더링이 됨 
 (JS과정으로 보면 마지막 화면에 렌더링을 시켜줘야 하는데 이를 위해 useState함수를 사용함)

const [변수이름 , set변수이름]  = useState(초기값);
          num = 2 (x) => 변수만 변화하고 화면은 변화없음
          setNum(2) (o) => 화면까지 값이 변화함

- useState : import 작업이 필요함  
    >>import {useState} from 'react'

/*

React Event
 1. onClick{함수이름} : JS처럼 ()뒤에 붙이면 바로 호출
    {()=>{함수이름()}}

 2. DOM요소에만 이벤트를 걸어줄 수 있음 => 내가 만든 컴포넌트에는 이벤트를 걸 수 없음

*/

  let numV = 0;
  const [num2, setNum2] = useState(0)

  const ck = ()=>{
    console.log(numV)
    numV += 1;
    
    setNum2(num2+1)
  }

  
  const dk = ()=>{
    console.log(numV)
    numV -= 1;
    console.log(numV)

    setNum2(num2-1)
  }


  return (
    <div>
      <p>단순변수 : {numV}</p>
      <p>state : {num2}</p>
      <button onClick={ck}>+1</button>
      <button onClick={dk}>-1</button>
      <button onClick={()=>{setNum2(num2-num2)}}>초기화</button>
    </div>
  )
}

export default Ex01