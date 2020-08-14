import React from 'react';
import myImg from '../../img/my-pic.JPG';
import './style.css';

const AboutMe = () => {
  return (
    <div className='about-container'>
      <div className='left-container'>
        <span>Hi Folks,</span>
        <p>
          I'm self-taught Front-End Web Developer, I got a strong motivation to
          change my career. I picked up ... Web Development, it's easy to learn,
          creative platform to express my skills through building applications
          or websites, got high popularity on market, hmmm...seems suitable for
          me.
        </p>
        <p>
          then I spend time , learning Web Development(HTML5, CSS3, Js) day and
          night, taking courses from udemy to youtube channels, then I find out
          there’s a Library called "React" that can be used to build web
          Applications, does emphasize on component approach, which is amazing!
        </p>
        <p>
          I didn't stop here ofCourse, This is just the beginning of my journey
          to become a front-end developer and it's been a year i'm into this and
          Learned as many skills came on my way like "React router", "Redux",
          "Firebase" and Deploying all that..., And Now I have build some of
          projects right there on "My Work" section.
        </p>
        <h3>Thanks For Spending your valuable time to know about me.</h3>
      </div>
      <div className='right-container'>
        <div className='image'>
          <img src={myImg} alt='myImg' />
        </div>
        <div className='name'>
          <h4>T Sriya</h4>
          <h2>Front-End Web Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
