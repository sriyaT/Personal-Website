import React, { Component } from 'react';
import './style.css';
import emailLogo from '../../img/email-logo-01.png';
import phoneLogo from '../../img/mobile-logo.png';
import twitterLogo from '../../img/twitter-logo-01.png';
import linkedinLogo from '../../img/linkedin-icon-19.png';
import githubLogo from '../../img/github-logo.png';
import netlifyLogo from '../../img/netlify-logo.png';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <div className='socials'>
          <a href='tel:+918088728655' target='blank'>
            <img src={phoneLogo} alt='phone'></img>
          </a>
          <a
            href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=tsriya6@gmail.com'
            target='blank'
          >
            <img src={emailLogo} alt='email'></img>
          </a>
          <a
            href='https://www.linkedin.com/in/t-sriya-b4234510a'
            target='blank'
          >
            <img src={linkedinLogo} alt='linkedin'></img>
          </a>

          <a href='https://app.netlify.com/teams/sriyat/sites' target='blank'>
            <img src={netlifyLogo} alt='netlify'></img>
          </a>

          <a href='https://github.com/sriyaT' target='blank'>
            <img src={githubLogo} alt='github'></img>
          </a>
          <a href='https://twitter.com/t_sriya94' target='blank'>
            <img src={twitterLogo} alt='twitter'></img>
          </a>
        </div>
      </div>
    );
  }
}
