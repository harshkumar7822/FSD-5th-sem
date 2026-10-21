import React from 'react'
import { useState } from "react";

const App = () => {
  const[task, setTask] = useState('');
  const[todoList, setTodoList] = useState([]);

  const[editIndex, setEditIndex] = useState(null);

  const addHandler = () => {
    if(task === ''){alert('Please enter a task')}

    else{

      if(editIndex !== null){
        //update 
        const updatedList = [...todoList];
        updatedList[editIndex] = task;
        setTodoList([...updatedList]);
        setEditIndex(null);
      }else{
        //add
        setTodoList([...todoList, task]);
        console.log(todoList);
      }
    
    setTask(''); 
    }
  }  

  const deleteHandler = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index); 
    setTodoList([...updatedList]);
    console.log(todoList[index]);
  }

  const editHandler = (index) => {
    setTask(todoList[index]);
    setEditIndex(index);
  }  

  return (

    <div>
      <h1>To-Do List</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)}></input>
      <button onClick={addHandler}>{editIndex === null ? 'Update' : 'ADD'}</button>

      <br></br>
      {todoList.map((data, index) => 
        <div key={index}>
          <span>{data}</span>
          <button onClick={()=>editHandler(index)}>EDIT</button>
          <button onClick={()=>deleteHandler(index)}>DELETE</button>
        </div>)}
      </div> 
  
  )
}

export default App
