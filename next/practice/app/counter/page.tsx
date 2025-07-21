'use client'
import React from 'react'
import { useState } from 'react'
function Counter() {
    const [count,setCount] = useState(0);

    const incerement = ()=>{
        setCount((count)=>{
            count += 1;
            return count;
        })
    }
    const decrement = ()=>{
        setCount((count)=>{
            if(!count){
                return 0
            }
            count -= 1;
            return count;
        })
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incerement}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter
