import React, { Component } from 'react';
 
class Contact extends Component {

  componentWillMount() {
    document.title = 'thewizbang.com - contact'
  }

  render() {
    return (
      <div className="content contact">
        <h2>eric@thewizbang.com</h2>
        <h2>
          <a href="https://www.linkedin.com/in/eric-phillips-19a287bb/" rel="noopener noreferrer" target="_blank">My linkedin account</a>
        </h2>
      </div>
    );
  }
}

export default Contact;