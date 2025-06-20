import React, { useState } from 'react'

const State = () => {
    const [count,setCount]=useState(0)
    const handleIncrement=()=>{setCount(count+1)};
     const handlereset=()=>{setCount(0)};
      const handleDecrement=()=>{setCount(count-1)};

  return (
    
    <div>
        <h1>{count}</h1>
    <button onClick={handleIncrement}>Like 👍</button>
    <button onClick={handlereset}>Reset</button>
    <button onClick={handleDecrement}>Dislike 😢</button>
    </div>
  )
}

export default State