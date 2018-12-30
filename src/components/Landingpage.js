import React, { Component } from 'react';
 
class Info extends Component {

  componentWillMount() {
    document.title = 'ericphillips.xyz'
  }

  render() {
    return (
      <div className="content">
        <h2 className="content-text">Hello. I am a web developer looking to put experience into action. 
        Most of my professional experience so far has been customizing Shopify websites using CSS, Javascript, Jquery, and 
        Shopify's own language, Liquid. I have also worked with React(this site), CodeIgniter, and various Node technologies
        on personal projects, which can be seen on my 
        <a href="https://www.github.com/dephil29" rel="noopener noreferrer" target="_blank">github</a> account.</h2>
      </div>
    );
  }
}

export default Info;