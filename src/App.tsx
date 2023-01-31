import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Todolist } from './Todolist';

function App() {
  let titl1 = [
    {ip:"What du you know abaut it"},
    {ip:"let me ddwwa"}
  ]   
  let [tasks, setTasks] = useState([
    {id: 1,    title: "CSS",  isDone: true},
    {id: 2,    title: "JS",  isDone: true},
    {id: 3,    title: "React",  isDone: false},
    {id: 4,    title: "Redux",  isDone: true},
    {id: 5,    title: "Redukkx",  isDone: false},
    {id: 3,    title: "React",  isDone: false},
    {id: 4,    title: "Redux",  isDone: true},
    {id: 5,    title: "Redukkx",  isDone: false}
  ]); 

  function removeTask(id:number) {
    let filteredTasks= tasks.filter( t => t.id !== id)
    setTasks(filteredTasks);

  }
  
  return (
    <div className='App'>
      <Todolist tit={titl1} tasks={tasks}
      removeTask={removeTask} />
      
     
     
    
      
    </div>
  );
}

export default App;
