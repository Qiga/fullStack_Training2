import React from 'react'

const MemberBox = ({name, gender, song}) => {

    if (gender == 0){
        gender = "여자";
    }else{
        gender = "남자";
    }
    
  return (
    <table className='item-border'>
      <tr className='name'>
        <td>이름 : </td>
        <td> {name} </td>
      </tr>

      <tr>
        <td>성별 : </td>
        <td> {gender} </td>
      </tr>

      <tr>
        <td>좋아하는 노래  : </td>
        <td> {song} </td>
      </tr>
    </table>
  )
}

export default MemberBox