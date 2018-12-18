import React, { Component } from 'react';
 
class Info extends Component {

  componentWillMount() {
    document.title = 'thewizbang.com'
  }

  render() {
    return (
      <div className="content">
        <h2 className="content-text">Hello. I am a web developer looking to put experience into action. 
        Most of my experience so far has been customizing Shopify websites using CSS, Javascript, Jquery, and 
        Shopify's own language, Liquid. As you may have seen elsewhere on the site this site was built 
        with React, so I do have some experience with that as well.</h2>
      </div>
    );
  }
}

export default Info;