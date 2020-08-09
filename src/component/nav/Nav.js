import React, { Component } from 'react';

import './style.css';
import Logo from '../../img/sriya-dev-logo.png';

class Nav extends Component {
  render() {
    return (
      <nav>
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
      </nav>
    );
  }
}

export default Nav;
