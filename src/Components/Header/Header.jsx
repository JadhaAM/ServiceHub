import React, { useState } from 'react';
import { FaRegMoon } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import './header.css'

import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
     <header>
      <div className="logo">
        <div className="LogoImg"></div>
        <h1>Sushi</h1>
      </div>
    
      <nav>
        <Link to="/" onClick={closeSidebar}>Home</Link>
        <Link to="/about" onClick={closeSidebar}>About Us</Link>
        <Link to="/popular" onClick={closeSidebar}>Popular</Link>
        <Link to="/recently" onClick={closeSidebar}>Recently</Link>
        <Link to="/subscribe" onClick={closeSidebar}>< FaRegMoon/></Link>
        <Link to="/login" onClick={closeSidebar}>Login</Link>
      </nav> 
      {isOpen && (
        <div className='subNavBar'>
          <Link to="/" onClick={closeSidebar}>Home</Link>
          <Link to="/about" onClick={closeSidebar}>About Us</Link>
          <Link to="/popular" onClick={closeSidebar}>Popular</Link>
          <Link to="/recently" onClick={closeSidebar}>Recently</Link>
          <Link to="/subscribe" onClick={closeSidebar}>< FaRegMoon/></Link>
          <Link to="/login" onClick={closeSidebar}>Login</Link>
        </div> 
      )}
      < IoMenu onClick={toggleNavbar} />
     </header>
    </>
  )
}

export default Header;
