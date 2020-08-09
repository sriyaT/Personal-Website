import React from 'react';
import emailLogo from '../../img/email-logo-01.png';
import phoneLogo from '../../img/mobile-logo.png';
import twitterLogo from '../../img/twitter-logo-01.png';
import linkedinLogo from '../../img/social-linkedin.png';
import githubLogo from '../../img/github-logo.png';
import netlifyLogo from '../../img/netlify-logo.png';

import './style.css';

const ContactMe = () => {
  return (
    <div className='contact-container'>
      <div className='main'>
        <div className='socials'>
          <a className='socialLink' href='tel:+918088728655' target='blank'>
            <img src={phoneLogo} alt='phone'></img>
            phone
          </a>

          <a
            className='socialLink'
            href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=tsriya6@gmail.com'
            target='blank'
          >
            <img src={emailLogo} alt='email'></img>
            Gmail
          </a>
          <a
            className='socialLink'
            href='https://www.linkedin.com/in/t-sriya-b4234510a'
            target='blank'
          >
            <img src={linkedinLogo} alt='linkedin'></img>
            LinkedIn
          </a>

          <a
            className='socialLink'
            href='https://app.netlify.com/teams/sriyat/sites'
            target='blank'
          >
            <img src={netlifyLogo} alt='netlify'></img>
            Netlify
          </a>

          <a
            className='socialLink'
            href='https://github.com/sriyaT'
            target='blank'
          >
            <img src={githubLogo} alt='github'></img>
            Github
          </a>
          <a
            className='socialLink'
            href='https://twitter.com/t_sriya94'
            target='blank'
          >
            <img src={twitterLogo} alt='twitter'></img>
            Twitter
          </a>
        </div>
        <h1>
          “Active participation on Social Media is the best way to say ‘Look at
          me!’ without saying ‘Look at me!’”
        </h1>
      </div>
    </div>
  );
};

export default ContactMe;
