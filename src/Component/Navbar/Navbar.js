import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    
    <div className='navbar'>
    <div className='left'>
    <Link to={"/"}><h1>Shopping Cart</h1></Link>
    </div>
    <div className='right'>
<Link to={"/"}><h3>Home Page</h3></Link>
<Link to={"/cart"}><h3>Cart Page </h3></Link>
    </div>
   
    </div>
  )
}

export default Navbar
