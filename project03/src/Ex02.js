import React from 'react'
import picSrc from './img/likePic.gif'
import LikeList from './components/LikeList'
const Ex02 = () => {

/*
React에서 내부 이미지 경로 지정하는 방법

1) src 폴더에서 이미지를 import 하는 방법
 -import 이미지변수 from '경로'
 -<img src = {이미지변수}/>
 
2) public 폴더 내에 이미지를 저장하고 접근하기 
 -public -img 폴더를 만든 후 파일을 보관
 -이 때, 별도로 import 는 필요하지 않다.
  => public폴더는 서버와 계속해서 통신 중이기 때문

*/


/*
 실습 문제 !
 1) 하트 클릭시, 꽉 찬 하트로 변경
 2) 하트 클릭스 좋아요 1개로 변경
 3) 좋아요 상태에서 클릭시 원래대로 
*/
  return (
    <div>
      <img src = {picSrc}></img>
      <LikeList></LikeList>
    </div>
  )
}

export default Ex02