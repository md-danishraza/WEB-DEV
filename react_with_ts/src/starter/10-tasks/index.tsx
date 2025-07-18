import { useState } from "react";
import Form from "./Form";
import List from "./List";
import { Task,addTask } from "./types";
function Component() {
  const [tasks,setTasks] = useState<Task[]>([]);


  const addTask:addTask = (task)=>{
    setTasks((tasks)=>{
      return [...tasks,task]
    })
  }

  const toggleTask = (task:Task)=>{
    setTasks(tasks=>{
      const updatedTasks = tasks.map(t=>{
        if( t.id===task.id){
          t.isCompleted = !t.isCompleted
          return t
        }else{
         return t
        }
       
    })
      
      return updatedTasks
  })
  }
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Task List</h2>
      <Form addTask={addTask}/>
      <List tasks={tasks} toggleTask={toggleTask}/>
    </div>
  );
}
export default Component;
