import './App.css';
import MenuIteme from './components/MenuItem';

function App() {

  let tex = '';
  let numVal = 5 ; 
  if (5 && numVal === 4 || 6){
    tex = "true";
  }else{
    tex = "false";
  }


  return (
  /* 
  Component (컴포넌트)
   - 반복되는 코드를 하나로 묶어서 컴포넌트로 만든다.
   - 내가 원하는 코드를 묶어서 '태그화' 시킨다. 
   - 반드시 대문자로 시작해야함 => 기준 HTML태그  DOM과 구분하기 위함 
   - export import 필수 
  */

  /*
    Props (프로퍼티, 프롭스)
    - 상위 (부모) 컴포넌트에서 하위 (자식)컴포넌트로 값을 전달할 때 사용함
  */

  /*
  객체 비구조화 할당
  */
  <form>
   
    <MenuIteme name = 'AAA' price = '1500' menuN = "아이스 아메리카노"></MenuIteme>
    <MenuIteme name = 'BBB' price = '2500' menuN = "레몬에이드"></MenuIteme>

    <p> {tex} </p>
    <div className="App">
    <p> AAA </p>
    <p> 1500원</p>
    <h3>아이스 아메리카노 </h3>
    </div>
  </form>
  );
}

export default App;
