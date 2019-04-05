import React, { Component } from 'react';
 
class Contact extends Component {

  componentWillMount() {
    document.title = 'ericphillips.xyz - contact'
  }

  render() {
    return (
      <div className="content contact">
        <h2>dephil29@hotmail.com</h2>
        <h2>
          <a href="https://www.github.com/dephil29" rel="noopener noreferrer" target="_blank">github</a>
        </h2>
        <h2>
          <a href="https://www.linkedin.com/in/eric-phillips-19a287bb/" rel="noopener noreferrer" target="_blank">linkedin</a>
        </h2>
      </div>
    );
  }
}

export default Contact;