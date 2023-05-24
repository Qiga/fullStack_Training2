import React, { Component } from 'react'

/* rcc : 클래스 컴포넌트 생성하는 단축키

React Hook 기능이 생겨나면서 
Function component 에서 실행되지 않았던 중요 요소들을
Function component 에서 사용가능하게 됨 

ex ) LifeCycle같은 중요한 개념을 Function Component에서 사용이 불가능 했음
  React Hook이 생겨나면서 Life Cycle을 사용할 수 있게됨 

React Hook : use~로 시작하는 useState, useRef, useContext ... 등이 해당된다.

*/
export default class Ex01 extends Component {

    componentDidMount(){
        /* componentDidMount : 화면이 마운트됨 !
            => 무거운 작업들을 많이함  (실질적으로 데이터를 받는 작업 등 )
            => API call (ajax , fetch, axios ...)
        */
        console.log('3. componentDidMount -화면 렌더링 완료!')
    }

    componentDidUpdate(){
        /*값이 변경되어 갱신이 일어난 직후에 호출하게 됨 */
        console.log("값이 변경되었습니다")
    }

    constructor(){
        console.log('1. constructor - 최초 생성 ')

        /* contructor  : 생성자  
        => state , 함수, 변수 ... 값들을 초기화 할때 사용
        => 화면이 렌더링 되기 이전, 가장 최초의 단계가 됨
        */
        super();
        this.state = {
            num : 1
        }
        this.handleIncrement = this.handleIncrement.bind (this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement(){
        this.setState({
             num : this.state.num +1
            })
    }

    handleDecrement(){
        this.setState({
            num : this.state.num -1
        })
    }

    // this.handleIncrement = this.handleIncrement.bind (this);

    

  render() {
    /* render : 화면을 렌더링 할 때
      => 화면을 구성하는 요소들을 작성 ( DOM, HTML 구문 ) */

    console.log('2. render - 화면 렌더링중')

    return (
      <div>
        <h1>ClassCompoent : {this.state.num}</h1>
        <button onClick = {this.handleIncrement}> +1 </button>
        <button onClick = {this.handleDecrement}> -1 </button>
      </div>
    )
  }
}
