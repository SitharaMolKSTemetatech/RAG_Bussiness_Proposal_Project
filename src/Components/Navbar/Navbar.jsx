import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos.png';
const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>Gen(I)</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu('home')}>
          <Link to='/' className={menu === 'home' ? 'active' : ''}>Home</Link>
          {menu === 'home' && <hr />}
        </li>
        <li onClick={() => setMenu('generator')}>
          <Link to='/generator' className={menu === 'generator' ? 'active' : ''}>Generator</Link>
          {menu === 'generator' && <hr />}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/loginsignup'>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
