 import  { useState } from "react";
 
 export default function Counter() {

    const [count,setvalue] = useState (0)
    const increment = ()=>{
     setvalue (count+1)
    }   
    const decrement = ()=>{
       setvalue (count-1) 
    }
    const multification = ()=>{
        setvalue (count*5) 
     }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>
            <button onClick={multification}>multification</button>
            
        </div>
    )
 }
 
