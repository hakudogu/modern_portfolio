import React from 'react'
// import { Nav } from 'react-bootstrap/'
import { Link } from 'react-router-dom'
import './navbar.css'
// import Views from './View/View'
function Navbar() {
    
  return (
    <div className='navbar_background'>
    <div className='navbar_container'>
        
            <li><Link  className='navbar_cards' to='/'><h2>Home</h2></Link></li>
            <li><Link className='navbar_cards' to='/about'><h2>About</h2></Link></li>
            <li><Link className='navbar_cards' to='/projects'><h2>Projects</h2></Link></li>
            <li><Link className='navbar_cards' to='/contact'><h2>Contact</h2></Link></li>

        </div>
              </div>
         
  )
}

export default Navbar