
import './App.css';

function App() {

  let student = [
    {name : '장원영', age : 20, gender : 'woman'},
    {name : '차은우', age : 26, gender : 'man'},
    {name : '임나연', age : 29, gender : 'woman'}
  ]

  /* 
    Map 함수
    - 주어진 함수를 호출한 결과를 모아 새로운 함수를 만든다
    ex ) students라는 배열의 이름만 뽑아서 새로운 함수를 만들고 싶을 때 사용
    - 기본 배열은 영향을 받지 않는다.
    - 고유한 key 값을 작성해야한다.
  */

  let newStu = student.map(item => <p>안녕하세요 저는 {item.name}입니다. 제 나이는 {item.age}이에요.</p>);

  // ============filter ==============
  let womanList = student.filter(item => item.gender == 'woman')
  return (
  <div>
      {newStu}
   

    <h2>Filter함수</h2>
    {/* filter 함수는 배열의 각 요소에 대해서 주어진 함수의 결과 같이 true인
    요소들만 모아서 새로운 배열로 변환하는 함수를 의미한다
  */}

    {womanList.map(item => <p key ={item.name}>{item.name}이고 {item.age}입니다</p>)}

  </div>

  );
}

export default App;
