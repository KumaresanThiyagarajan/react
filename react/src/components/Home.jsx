import React from 'react'

const Home = ({ items }) => {
  return (
    <div>
      {items.map((fruit)=>(<li key={fruit}>{fruit}</li>))}
      
    </div>
  )
}

export default Home