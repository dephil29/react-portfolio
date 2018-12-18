import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="title">
          <Link to="/">ERIC PHILLIPS</Link>
        </h1>
        <div className="nav">
          <div className="header-content-links-container"> 
            <div className="header-content-links">
              <Link to="/projects">PROJECTS</Link>
            </div>
            <div className="header-content-links">
              <Link to="/contact">CONTACT</Link>
            </div>
          </div>
          <div className="nav-border"></div>
        </div>
      </header>
    )
  }
}

export default Header;