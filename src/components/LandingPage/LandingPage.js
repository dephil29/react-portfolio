import React, { useEffect } from 'react';
 
import scrollToTop from '../scrollToTop/scrollToTop';

const LandingPage = () => {

  useEffect(() => {
    document.title = 'ericphillips.xyz';
  });
  
  scrollToTop();
  
  return (
    <div 
      className="content landing-page"
    >
      <h2 className="content-text">Hello. I am a web developer always ready to put my long and varied work experience into action. Most of my professional development life so far has been customizing Shopify websites using CSS, Javascript, Jquery, and Shopify's own language, Liquid. I have also worked with React (this site was written with hooks/ functional components) and Node on various projects, which can be seen on my <a href="https://www.github.com/dephil29" rel="noopener noreferrer" target="_blank">github</a> account.</h2>
    </div>
  );
};

export default LandingPage;