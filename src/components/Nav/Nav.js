import React from 'react'
import logo from "../../assests/image/logo.png";
import "./Nav.css"
import { useState } from 'react';
const Nav = () => {

  const [shownav, setShowNav] = useState(false);
  const handleClick = () =>setShowNav(!shownav);

  return (
    <div className='nav'>
        <div className='logo'>
            <img src={logo} alt="img"/>
        </div>
        <div className='menu'>
            <i className='fas fa-bars' onClick={handleClick}/>
        </div>
        <div className={shownav ?'nav-item active': "nav-item"}>
          <div className=''>Home</div>
          <div className=''>about</div>
          <div className=''>contact</div>
          <div className=''>blog</div>
          <div className='social'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
    </div>
  )
}

export default Nav