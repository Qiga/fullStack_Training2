import React, {useState ,useEffect} from 'react'

const Ex02 = () => {
    // 3. 화면 갱신직후 (ComponentDidMount)
    useEffect(()=>{console.log('3.화면 렌더링 완료!')},[])
    

    //1. constructor를 대체하는 공간
    // => state, 변수 초기화 공간
    console.log('1. constructor를 대체! => 함수 초기화')
    const [num, setNum] = useState(0)

     // 4. 값이 변화했을 때 (ComponentDidUpdate)
     useEffect(()=>{console.log('4.화면 렌더링 완료!')},[num])


  return (
    <div>
        {console.log('2. render를 대체하는 retrun문 안쪽')}
        <h1>팡션 Component : {num}</h1>
        <button onClick ={()=>{setNum(num+1)}}>+1</button>
        <button onClick ={()=>{setNum(num-1)}}>-1</button>
    </div>
  )
}

export default Ex02