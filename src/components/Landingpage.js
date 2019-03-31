import React, { Component } from 'react';

  const link = {
    textDecoration: 'underline'
  };
 
class Info extends Component {

  componentWillMount() {
    document.title = 'ericphillips.xyz'
  }

  render() {
    return (
      <div className="content">
        <h2 className="content-text">Hello. I am a web developer always ready to put my long and varied work experience into action. 
        Most of my professional development life so far has been customizing Shopify websites using CSS, Javascript, Jquery, and 
        Shopify's own language, Liquid. I have also worked with React, CodeIgniter, and various Node technologies
        on personal projects, which can be seen on my <a style={link} href="https://www.github.com/dephil29" rel="noopener noreferrer" target="_blank">github</a> account.</h2>
      </div>
    );
  }
}

export default Info;