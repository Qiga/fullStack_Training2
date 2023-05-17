import React from 'react'
import {useState} from 'react'


const LikeList = () => {


const [like, setlike] = useState(0);
const [fill, setfill] = useState('🤍');

const doLike = ()=>{
    if(like == 0){
        setlike(like +1);
        setfill('❤');
    }else{
        setlike(like -1);
        setfill('🤍');
    }
}

  return (
    <div>
        <span className='heart' onClick = {doLike}>{fill}</span> {" "}
        <span> 좋아요 {like}개 </span>
    </div>
  )

}

export default LikeList