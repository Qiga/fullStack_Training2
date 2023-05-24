// import React, { useState } from 'react'
// import Ex04AddTodo from './components/Ex04AddTodo'
// import Ex04List from  './components/Ex04List'
// import Ex04ListItem from './components/Ex04ListItem'
// import {TodoContext} from './context/Ex04TodoContext'

 
// //splice 함수
// // 배열 이름.splice (index , 개수)

// //반복 => map
// const Ex04 = () => {

//     const[todoNum, setTodoNum] = useState (1)
//     const[todos,setTodos] = useState ([{text : 'React 복습하기', completed : 'false'}])

//     const handleTodoToggle = (indexo =>{
//         const newTodos = [...todos]
//         newTodos[index].completed = !niew

//     }
  
//     const handleTdoAddition = () => {
//       setTodos([...todos, {text : newTodo , completed : fasle}])
//       setNewTodo("")
//     }

//   return (
//     <div>
//         <TodoContext.Provider value = {{todoNum, setTodoNum, todos, setTodos}}>
//         <Ex04ListItem todo ={todos}/>
//         <Ex04List/>
//         <Ex04AddTodo />
//         </TodoContext.Provider>
//     </div>
//   )
// }

// export default Ex04

import React, { useContext } from 'react'
import Ex04List from './components/Ex04List'
import Ex04AddTodo from './components/Ex04AddTodo'
import { TodoContext } from './context/Ex04TodoContext';

const [addTodo , setAddTodo] = useContext(TodoContext);
const [delTodo, setDelTodo] = useContext(TodoContext);
const 


const Ex04 = () => {
  return (
    <div>
      <TodoContext.Provider value={{}}>
        <Ex04List />
        <Ex04AddTodo />
      </TodoContext.Provider>
    </div>
  )
}

export default Ex04