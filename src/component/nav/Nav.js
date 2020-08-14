import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className='navbar'>
          <h1 className='name'>T.Sriya</h1>
          <ul className='nav-list'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about-me'>About Me</Link>
            </li>
            <li>
              <Link to='/my-work'>My Work</Link>
            </li>

            <li>
              <Link to='/contact'>Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;

/* <nav>
  <div className='navbar'>
    <img className='logo' src={Logo} alt='logo'></img>
    <ul className='nav-list'>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/about-me'>About Me</a>
      </li>
      <li>
        <a href='/projects'>Projects</a>
      </li>

      <li>
        <a href='/contact'>Contact Me</a>
      </li>
    </ul>
  </div>
</nav>; */
