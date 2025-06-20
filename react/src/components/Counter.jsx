import React , { useState } from 'react'

const counter = () => {
    const[count,setcount]=useState(0);
  return (
    <div>
        <h1> {count} </h1>
        <button onClick={()=>{setcount(count+1)}}> Increment </button>
        <button onClick={()=>(setcount(count-1))}>Decrement</button>
      <button onClick={()=>(setcount(0))}>reset</button>
    </div>
  )
}

export default counter