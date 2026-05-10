import React from 'react'
import './Navbar.css'
import { Search, User } from 'lucide-react'
import Logo from './assets/LOGO.png'

const Navbar = () => {
  return (
    <nav id='Navbar'>

      <div id='Logo'>
        <span className='logo-icon'>
          <img src={Logo} alt="LOGO" />
        </span>
        <h2>WhatCanICook</h2>
      </div>

      <div id='Nav'>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Recipes</a></li>
          <li><a href='#'>Ingredients</a></li>
          <li><a href='#'>Favorites</a></li>
        </ul>
      </div>

      <div id="LeftNav">

        <div id="SearchBar">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search Recipes"
          />
        </div>

        <div id="Login">
          <User size={18} />
        </div>

        <button id="ContactUs">
          Contact Us
        </button>

      </div>

    </nav>
  )
}

export default Navbar