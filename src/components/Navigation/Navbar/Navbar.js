import React from 'react'
import ItemsNav from '../ItemsNav/ItemsNav'
import "./Navbar.css"

const Navbar = () => {
  return (
    <header className="navbar">
        <nav>
          <ItemsNav />
        </nav>
    </header>
  )
}

export default Navbar