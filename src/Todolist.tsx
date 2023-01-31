import React from "react";


type Bebby = {
    ip: string
}
type TaskType = {
    id: number
    title: string
    isDone: boolean
}
type PropsTyp = {
    tit: Array<Bebby>
    tasks: Array<TaskType>
    removeTask: Function    
}

export function Todolist(props: PropsTyp) {
    return (
      <div>
        <h3>{props.tit[0].ip}</h3>
        <div>
          <input />
          <button>+</button>
        </div>
        <ul>
            {props.tasks.map((t) => {
                return <li><input type="checkbox" checked={t.isDone}/> 
                <span>{t.title}</span>
                <button onClick={() => {props.removeTask(t.id) }}> x </button>
                </li> 
          
            })


            }
          
        </ul>
        <div>
          <button>all</button>
          <button>active</button>
          <button>Completed</button>
          <button>all</button>
          <button>active</button>
          <button>Completed</button>
        </div> 
      </div>
  
    );
  }