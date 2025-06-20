import React, { useEffect, useState } from 'react'

const State = () => {
    //const [count, setCount] = useState(0);
    const [user,setUser] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUser(data))
    })

    //useEffect(()=>{
        /*setTimeout(() => {
            setCount(count + 0);
        },1000)
        console.log("UseEffect Rendered");
    },[count])*/


    // const handleincrement = () => {
    //     setCount(count + 1);
    // }
    // const handledecrement = () => {
    //     setCount(count - 1);
    // }
    // const handleReset = () => {
    //     setCount(0);
    // }

  return (
    /*<div>
      <h1>{count}</h1>
      <button onClick={handleincrement}>Increment</button>
      <button onClick={handledecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>*/
      <div>
      <ol>
        {user.map((data)=>(
            <>
          <p> S.no : {data.id}</p>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Phone Number: {data.phone}</p>
            </>
        ))}
      </ol>
    </div>
  )
}

export default State