import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'


const NavHeader = () => {
  const handleClick = () => {
    localStorage.clear();
  }
  const usuario = localStorage.getItem("usuario")

  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/" replace onClick={handleClick}>Boa noite: {usuario}</Link></li>
      </ul>
    </nav>
  )
}
export default NavHeader;
