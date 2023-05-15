import logo from './logo.svg';
import './App.css';

function App() {

  /* 
  JSX : 하나의 파일 안에 HTML문법과 JS문법을 동시에 작성할 수 있는 파일 확장자 

  JSX의 장점  : document 객체에 별도로 접근하지 않아도 됨, 가독성이 좋고 기능별로 분류하기 쉽다.

  ---JSX의 규칙---

  1. 요소가 여러개라면 반드시 하나의 부모요소로 감싸주어야 한다.
  
  <div> 
    <p> 방문 환영 인사 </p>
    <p> 000님 반갑습니다 </p>  => div가 없으면 오류가 발생함 (div가 아니어도 상관은 없음)
  </div>

  2. 표현식 {} 사용이 가능함
  JS문법을 사용 => return 문 안에서 사용가능함 (작성은 return 외부에서 작성) 단, {}내부에서는 if문 사용 불가능
  
  조건문 활용법
  - 조건이 하나일 때 : {}안에서 &&연산자 활용
  - 조건이 2개인 경우 : 삼항 연산자 ( ? : )
  - 다중조건인 경우 외부에 작성 

  let name = '000';
  <p> {name}님 반갑습니다 </p>
  {name === '000'&& <p>!!!</p>}
  {name === '111' ? <p>아니네</p> : <p>맞네</p>}

  3. 기존 html 문법과 다른 점들 정리
   - class 대신 className 을 사용
   - html태크(DOM요소)를 사용할 때는 무조건 소문자로 시작함
   - content가 없더라도 끝 태그 생략 불가능함.  '/'작성

  4. 스타일링 적용
   -css안에 작성
  => import 되어있는 css에 삽입

   -객체 형태로 작성
  => 객체 형태로 원하는 스타일을 작성 (let, const...)
    원하는 태그의 style 속성으로 객체 입력
    단, 객체 안에서는 camelCase로 작성해야함
      => css에서는 background-color라면 객체 내에서는 backgroundColor

  5. 실행 시 index.js의 StrictMode가 검토하면서 코드를 2번 실행하게 됨
  */

  const txtStyle = {
    color : 'blue',
    fontWeight : '900'
  }

  let name = '000';
  let state = 'open';
  
  
  return (
    <div className ='container'>
        <p style = {txtStyle}> {name}님 반갑습니다 </p>

        {state === 'open'&& <p>!!!</p>}

        {name !== '000' ? <p>잘못봤네요</p> : <p>맞네맞어</p>}
    </div>
  );
}

export default App;
