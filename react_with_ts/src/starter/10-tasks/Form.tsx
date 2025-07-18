import React, {  useState } from 'react'
import { Task,addTask } from './types';
function Form({addTask}:{addTask:addTask}) {
    const [value,setValue] = useState("");
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!value){
            alert("input can't be empty!!")
            return
        }

        // do something
        const newTask:Task = {
            id:Math.random()*100000,
            description:value,
            isCompleted:false
        }
        addTask(newTask)
        setValue("")
    }
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <input type="value" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Form
