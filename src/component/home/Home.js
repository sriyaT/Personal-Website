import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        {/* <div className='left-container'>
          <img src={profileImg} alt='profile-img' />
        </div> */}
        <div className='left-container'></div>
        <div className='right-container'>
          <h1 className='sriya-text'>T Sriya</h1>
          <h1>
            I'm a Front-End&nbsp;
            <br />
            <span>Developer</span>
          </h1>
          <p>
            Always code as if the guy who ends up maintaining your code will be
            a violent psychopath who knows where you live.
          </p>
          <span className='span-ele'>CSS - JavaScript - React</span>

          <Link className='contact-btn' to='/contact'>
            Contact Me
          </Link>

          <a
            className='contact-btn'
            href='https://drive.google.com/file/d/1OflJpD6acV7kKSG44F5DfAWNvbNH7dWK/view?usp=sharing'
            download='sriyaResume_T'
            target='blank'
          >
            Download CV
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
