import React from 'react'
import {Link} from 'react-router-dom'

const Hooks = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"}}>
        <Link to='/State'>useState</Link>
        <Link to='/effect'>useEffect</Link>
        <Link to='/Ref'>useRef</Link>
        <Link to='/Reducer'>useReducer</Link>
    </div>
  )
}

export default Hooks