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
    <div className='App'>
      <Nav></Nav>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-me' exact component={AboutMe} />
        <Route path='/my-work' exact component={Projects} />
        <Route path='/contact' exact component={ContactMe} />
      </Switch>
      {pathname !== '/contact' && pathname !== '/' ? <Footer></Footer> : null}
    </div>
  );
}

export default withRouter(App);
