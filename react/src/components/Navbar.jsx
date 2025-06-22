import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div >
    <nav className='navbar'>
     <Link to="/home" className="Link">Home</Link>
      <Link to="/about" className="Link">About</Link>
      <Link to="/Effect" className="Link">Effect</Link>
      <Link to="/State" className="Link">Likes Counter</Link>
      <Link to="/login" className="Link">Login</Link>
  


    </nav>
    </div>
  )
}

export default Navbar