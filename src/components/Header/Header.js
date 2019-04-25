import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [view, changeView] = useState(false);

  const toggle = () => {
    changeView((view === true) ? false: true);
  }

  let navToggle;

  if(!view){
    navToggle = 'nav'
  }else{
    navToggle = 'nav show'
  }

  return (
    <header>
      <button 
        className={
          view
          ? 'hamburger hamburger--collapse is-active'
          : 'hamburger hamburger--collapse'
        } 
        onClick={toggle} >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div 
        className={navToggle}
      >
        <NavLink 
          activeClassName='active'
          exact
          onClick={toggle}
          to="/">INTRO</NavLink><br/>
        <NavLink 
          activeClassName='active'
          exact
          onClick={toggle}
          to="/projects">
          PROJECTS</NavLink><br/>
        <NavLink 
          activeClassName='active'
          exact
          onClick={toggle}
          to="/contact">
          CONTACT</NavLink>
      </div>
      <h1 
        style={{
          position: 'fixed',
          top: '0',
          right: '0'
        }}
      >ericphillips.xyz</h1>
    </header>
  )
}

export default Header;