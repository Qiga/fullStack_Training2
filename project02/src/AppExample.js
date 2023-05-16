import React from 'react';
import MemberBox from './components/MemberBox';
import './App.css';


const AppExample = () => {

/*
여러분의 팀원을 소개해보세요

이름 : 홍길동 
성별 : 여성 / 남성
좋아하는 노래 : 아이브 - I AM 

단 , 컴포넌트 props의 개념을 이용할 것 
 - MemberBox 라는 컴포넌트 생성 
*/

  return (
    <div>
        <table className='item-border'>
            <tr>
                <th> 팀원 소개 </th>
            </tr>

            <MemberBox name ='김소희' gender = '0' song ='A' ></MemberBox>
            <MemberBox name = '이선아' gender = '0' song ='B' ></MemberBox>
            <MemberBox name = '서유광' gender = '1' song ='C' ></MemberBox>
            <MemberBox name = '박정현' gender = '1' song ='D' ></MemberBox>

        </table>

    
    </div>
  )
}

export default AppExample