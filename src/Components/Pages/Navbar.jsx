import React from 'react';
import './Navbar.css';
import { Link

 } from 'react-router-dom';
function Navbar() {
  return (
    <header className='header'>
      <div className='logo'>
        <img src="https://img.myloview.com/stickers/nature-landscape-logo-design-vector-illustration-creative-nature-landscape-logo-design-concept-template-symbols-icons-700-252929763.jpg" alt='' />
        <h1>Eco-Hub</h1>
      </div>
      <nav className='navbar'>
        <ul>
          <li><Link to = '/'>Home</Link></li>
          <li><Link to = '/About'>About</Link></li>
          <li><Link to = '/SDGs'>SDGs</Link></li>
          <button><Link to = '/Signup'>Signup</Link></button>
          <li>
           
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
