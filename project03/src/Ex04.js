import React, { useState } from 'react'
import Board from './components/Ex04Board'
import './style/ex04.css'
import { Button } from 'react-bootstrap'; //bootstrap 라이브러리 적용
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap css 적용

const Ex04 = () => {
    const [diceNum1, setdiceNum1] = useState(1);
    const [diceNum2, setdiceNum2] = useState(1);
    const [imagePath1, setimage1] = useState('/img/dice1.png');
    const [imagePath2, setimage2] = useState('/img/dice1.png');
    const [score1, setscore1] = useState(0);
    const [score2, setscore2] = useState(0);

    const makeRandom =  ()=>{
        return parseInt(Math.random()*6)+1;
    }

    const start = ()=>{
        setdiceNum1(makeRandom());
        setimage1('/img/dice'+diceNum1+'.png');
  
        setdiceNum2(makeRandom());
        setimage2('/img/dice'+diceNum2+'.png');

        if(score1 <=4 && score2 <=4){
            if(diceNum1>diceNum2){
                setscore1(score1+1);
            }else if(diceNum2>diceNum1){
                setscore2(score2+1);
            }else{
            }
        }else{
            let result = score1>score2 ? '승리' : '패배';
            alert('게임 종료, 당신의'+result+'입니다.')
            reset()
        }

    }

    const reset = ()=>{
        setdiceNum1(1);
        setdiceNum2(1);
        setscore1(0);
        setscore2(0);
        setimage1('/img/dice1.png');
        setimage2('/img/dice1.png');
    }


  return (
    <div className = 'container'>
        <h1>주사위 게임</h1>
        <div className = 'btn-container'>
            <Button onClick = {start} variant="secondary" >던지기!</Button>{" "}
            <Button onClick = {reset} variant="danger">RESET</Button>
        </div>

        <div className = 'board-container'>
            <Board path={imagePath1} player ='나' score = {score1}/>
            <Board className ="comBoard"  path={imagePath2} player ='컴퓨터' score = {score2}/>
        </div>

    </div>
  )
}

export default Ex04