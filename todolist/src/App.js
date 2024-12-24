import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList]=useState([]);
  const [newTask, setNewTask]=useState("");
  const [textColor, setTextColor]=useState("white");
  const handleChange=(event)=>{
    setNewTask(event.target.value)
  }

  const addTask=()=>{
    const task={
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
      taskName:newTask,
    }
    setTodoList([...todoList,task])
  }

  const deleteTask=(id)=>{
    setTodoList(todoList.filter((task)=> task.id!== id))
  }

  const isCompletedTask=()=>{
    setTextColor(textColor === "white" ? "green" : "white");
  }
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task,key)=>{
          return( <div>
                    <h1 style={{backgroundColor:textColor}}>{task.taskName}</h1>
                    <button onClick={() => deleteTask(task.id)}>delete</button>
                    <button onClick={isCompletedTask}>Completed</button>
                    
                </div>
                );
        })}
      </div>
    </div>
  );
}

export default App;
