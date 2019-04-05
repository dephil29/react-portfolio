// dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Contact from './Contact/Contact';
import LandingPage from './LandingPage/LandingPage';
import Projects from './Projects/Projects';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
  </Switch>
)

export default Main;