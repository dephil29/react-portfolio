// dependencies
import React, {useEffect} from 'react';

// data
import {professional, personal} from './info';

// component
import Project from './Project';
 
const Projects = () => {

  useEffect(() => {
    document.title = 'ericphillips.xyz - projects'
  });

  return (
    <section className="content projects-section">
      <h2 className="title">PROFESSIONAL</h2>
      <div className="projects-container">
        <Project items={professional} />
      </div>
      <h2 className="title">PERSONAL</h2>
      <div className="projects-container">
        <Project items={personal} />
      </div>
    </section>
  );  
};

export default Projects;