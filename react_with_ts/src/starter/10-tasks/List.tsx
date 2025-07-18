import React, {  useState } from 'react'
import { Task } from './types'
function List({tasks,toggleTask}:{tasks:Task[],toggleTask:(task:Task)=>void}) {
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>,task:Task)=>{
        // change the value
        toggleTask(task)
       
    }
 
  return (
    <div>
      {
        tasks.map(task=>{
            return (
                <div key={task.id}>
                    <h1>{task.description}</h1>
                    <input type="checkbox" name="isCompleted" id="isCompleted" 
                    defaultChecked={task.isCompleted}
                     onChange={(e)=>handleChange(e,task)}/>
                </div>
            )
        })
      }
    </div>
  )
}

export default List
