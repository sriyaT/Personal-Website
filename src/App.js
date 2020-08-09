import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Nav from './component/nav/Nav';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import AboutMe from './component/AboutMe/AboutMe';
import Projects from './component/projects/Projects';
import ContactMe from './component/contact/ContactMe';

function App(props) {
  const { pathname } = props.location;
  console.log('--->', pathname);
  return (
    <>
      <div className='App'>
        <Nav></Nav>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about-me' component={AboutMe} />

          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={ContactMe} />
        </Switch>
      </div>
      {pathname !== '/contact' ? <Footer></Footer> : null}
    </>
  );
}

export default withRouter(App);
