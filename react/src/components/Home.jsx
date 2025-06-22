import React from 'react'
import About from './About'


const Home = (name) => {
  return (
    <div>
      {/* {items.map((fruit)=>(<li key={fruit}>{fruit}</li>))} */}
      <h1>name in home{name}</h1>
      <About name={name}/>
     
      
    </div>
  )
}

export default Home