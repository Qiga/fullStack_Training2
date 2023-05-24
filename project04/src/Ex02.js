import React from 'react'
import menu from "./menu.json"
import MenuItem from "./components/Ex02MenuItem"
import './App.css'
const Ex02 = () => {

    //메뉴판  X 3
    // 사진
    // 이름
    // 가격
    // 설명 
//   let path1 = menu.list.map(c => c.imgSrc)
//   let name1 = menu.list.map(c => c.name)
//   let text1 = menu.list.map(c => c.content)
//   let price1 = menu.list.map(c => c.price)

  let arr = menu.list.map(c => <MenuItem key={c.name} path = {c.imgSrc} menu = {c.name} text ={c.content} price={c.price}> </MenuItem>)
  let eparr = menu.list.filter(c => c.price>=4200)
  let foutarr = eparr.map(c => <MenuItem key={c.name} path = {c.imgSrc} menu = {c.name} text ={c.content} price={c.price}> </MenuItem> )
  return (
    <div>
    <div className = "maincon"> 
        <h1 className = "tag">전체</h1>
        {arr}   
    </div>
    <div className = "maincon">
      <h1 className = "tag">4200원 이상</h1>
      <hr></hr>
        {foutarr}
    </div>
    </div>
  )
}

export default Ex02