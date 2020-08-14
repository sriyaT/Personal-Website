import React, { Component } from 'react';

import './style.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className='navbar'>
          <h1 className='name'>T.Sriya</h1>
          <ul className='nav-list'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about-me'>About Me</a>
            </li>
            <li>
              <a href='/my-work'>My Work</a>
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
