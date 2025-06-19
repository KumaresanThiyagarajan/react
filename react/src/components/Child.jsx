import React from 'react'

function Child({items}) {
  return (
    <div>
        <ol>
        {items.map((frui)=>(
            <li>{frui}</li>
        ))}
        </ol>
    </div>
  )
}

export default Child