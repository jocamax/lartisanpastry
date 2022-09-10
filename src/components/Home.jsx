import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/style.scss'
const Home = () => {
  return (
    <header className='headerContainer'>
      <img src={require("../assets/headerImg2.png")} alt="" />
      <div className='contentDiv'>
      <h1>Welcome to the croissant heaven! 🥐</h1>
        <Link to='/menu' className='btn'>Pogledajte naš <span className="bold">Meni</span> </Link>
        <a href="https://wolt.com/sr/srb/belgrade/venue/lartisan" className='btn btnWolt' target="_blank" rel="noopener noreferrer">Poručite preko <span className='bold'>Wolt</span>  aplikacije</a>
      </div>
   
    </header>
  )
}

export default Home