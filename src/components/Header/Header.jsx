import React, { useState } from 'react'
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo';


function Header() {
    
    
  return (
      <header className="w-full flex flex-wrap bg-gradient-to-b from-white to-primary-200 shadow-lg sticky top-0 z-20 mx-auto items-center justify-between ">
          <Logo />
          <Navbar />
    </header>
  )
}

export default Header