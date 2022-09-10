import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/style.scss'

const Navbar = () => {
  return (
    <div className='navContainer'>
        <Link to='/' className='navImageContainer'>
            <img className='navImage' src={require("../assets/navImage.png")} alt="l'artisan logo" />
        </Link>
        <div className='navLinksContainer'>
            <Link className='navLink' to='/'>Home</Link>
            <Link className='navLink' to='/menu'>Menu</Link>
            <Link className='navLink' to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar