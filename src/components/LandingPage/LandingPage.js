// dependencies
import React, { Component } from 'react';
// styles
import './LandingPage.css';

const styles = {
  landing: {
    height: '100vh',
    padding: '0'
  },
  link: {
    textDecoration: 'underline'
  }
};
 
class Info extends Component {

  componentWillMount() {
    document.title = 'ericphillips.xyz'
  }

  render() {
    return (
      <div 
        className="content"
        style={styles.landing}
      >
          <h2 className="content-text">Hello. I am a web developer always ready to put my long and varied work experience into action. 
          Most of my professional development life so far has been customizing Shopify websites using CSS, Javascript, Jquery, and 
          Shopify's own language, Liquid. I have also worked with React, CodeIgniter, and various Node technologies
          on personal projects, which can be seen on my <a style={styles.link} href="https://www.github.com/dephil29" rel="noopener noreferrer" target="_blank">github</a> account.</h2>
      </div>
    );
  }
}

export default Info;