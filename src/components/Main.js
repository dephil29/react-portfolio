import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Contact from './Contact/Contact';
import LandingPage from './LandingPage/LandingPage';
import Projects from './Projects/Projects';


const Main = () => (
  <Switch>
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/" component={LandingPage} />
  </Switch>
)

export default Main;