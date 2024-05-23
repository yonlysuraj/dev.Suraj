import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>Skills</li>
        <li>Education</li>
        <li>Projects</li>
        <li>Cotact me</li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default Navbar