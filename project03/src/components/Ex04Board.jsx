import React from 'react'


const Ex04Board = ({path, player,score }) => {


  if(score>=5){
    alert(player + "승리");
  }

  return (
    <div className = 'board-item'>
      <h3>{player}</h3>
      <img src={path} />
      <h4>현재 점수는?</h4>
      <h3>{score}</h3>
    </div>
  )
}

export default Ex04Board
