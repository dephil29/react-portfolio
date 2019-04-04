import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

import Meattown from '../../images/meattown.jpg';
import Ary from '../../images/ary.jpg';
import Little from '../../images/little.jpg';
import Ned from '../../images/ned.jpg';
import Forum from '../../images/forum.jpg';
import Hacker from '../../images/hacker.jpg';
import Burger from '../../images/burger.png';
import Atlar from '../../images/atlar.png';
import Smartgurlz from '../../images/smartgurlz.jpg';
 
class Projects extends Component {
  state = { imageStatus: false };
  

  handleImageLoaded() {
    this.setState({ imageStatus: true });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }

  componentWillMount() {
    document.title = 'ericphillips.xyz - projects'
  }

  render() {
    let imgState = this.state.imageStatus;
    return (
      <section className="content projects-section">
        <h1 className="title">PROFESSIONAL</h1>
        <div className="projects-container">
          <LazyLoad 
            className="project-container"
            debounce={false}
            throttle={250}
          >
            <a href="https://meattown.com/" rel="noopener noreferrer" target="_blank">
              <img 
                src={Meattown} 
                onLoad={this.handleImageLoaded.bind(this)} 
                alt="meattown"
                style={{
                  transition: 'opacity 0.5s',
                  opacity: !imgState ? '0' : '1'
                }}
              />
              <h2>MeatTown</h2>
              <p>Shopify site.<br/>Custom sections for the home page and customization of the product pages in accordance with clients wishes.</p>
            </a>
          </LazyLoad>
          <LazyLoad 
            className="project-container"
            debounce={false}
            throttle={250}
          >
            <a href="http://aryconcept.com/" rel="noopener noreferrer" target="_blank">
              <img 
                src={Ary} 
                onLoad={this.handleImageLoaded.bind(this)} 
                alt="Ary Concept"
                style={{
                  transition: 'opacity 0.5s',
                  opacity: !imgState ? '0' : '1'
                }}
              />
              <h2>Ary Concept</h2>
              <p>Wordpress site.<br/>Built on Divi. Contents of homepage between header and footer is totally customized, as well as the modal and slider on the "services" pages. Individual pages also highly customized including modal and slider.</p>
            </a>
          </LazyLoad>
          <LazyLoad 
            className="project-container"
            debounce={false}
            throttle={250}
          >
            <a href="https://mylittleandi.com/" rel="noopener noreferrer" target="_blank">
              <img 
                src={Little} 
                alt="My Little and I" 
                onLoad={this.handleImageLoaded.bind(this)} 
                style={{
                  transition: 'opacity 0.5s',
                  opacity: !imgState ? '0' : '1'
                }}
              />
              <h2>My Little and I</h2>
              <p>Shopify site.<br/>Original Instagram display section, and collection pages designed specifically for multiple product orders.</p>
            </a>
          </LazyLoad>
          <LazyLoad 
            className="project-container"
            debounce={false}
            throttle={250}
          >
            <a href="https://helloned.com/" rel="noopener noreferrer" target="_blank">
              <img 
                src={Ned} 
                alt="Ned" 
                onLoad={this.handleImageLoaded.bind(this)} 
                style={{
                  transition: 'opacity 0.5s',
                  opacity: !imgState ? '0' : '1'
                }}
              />
              <h2>Ned</h2>
              <p>Shopify site.<br/>Custom home page sections for product information display. Several custom product page templates for unique pages for each product. Heavily redesigned header and mega menu.</p>
            </a>
          </LazyLoad>
          <LazyLoad 
            className="project-container"
            debounce={false}
            throttle={250}
          >
            <a href="https://theatlar.com/" rel="noopener noreferrer" target="_blank">
              <img 
                src={Atlar} 
                alt="The Atlar" 
                onLoad={this.handleImageLoaded.bind(this)} 
                style={{
                  transition: 'opacity 0.5s',
                  opacity: !imgState ? '0' : '1'
                }}
              />
              <h2>The Atlar</h2>
              <p>Shopify site.<br/>This was more of a triumph of creative inventory management to make sure that the correct products showed up in their proper collections than anything to do with web design.</p>
            </a>
          </LazyLoad>
          <LazyLoad 
            className="project-container"
            debounce={false}
            throttle={250}
          >
            <a href="https://smartgurlz.com/" rel="noopener noreferrer" target="_blank">
              <img 
                src={Smartgurlz} 
                alt="Smartgurlz" 
                onLoad={this.handleImageLoaded.bind(this)} 
                style={{
                  transition: 'opacity 0.5s',
                  opacity: !imgState ? '0' : '1'
                }}
              />
              <h2>Smartgurlz</h2>
              <p>Shopify site.<br/>Several custom features on the home page and product pages are completely hand coded according to the clients wishes.</p>
            </a>
          </LazyLoad>
        </div>
        <h1 className="title">PERSONAL</h1>
        <div className="projects-container">
          <LazyLoad 
            className="project-container"
            debounce={false}
            throttle={250}
          >
            <a href="https://jabandaja.com/generic_forum" rel="noopener noreferrer" target="_blank">
              <img 
                src={Forum} 
                alt="generic forum" 
                onLoad={this.handleImageLoaded.bind(this)} 
                style={{
                  transition: 'opacity 0.5s',
                  opacity: !imgState ? '0' : '1'
                }}
              />
              <h2>Generic Forum</h2>
              <p>A forum built with PHP/CodeIgniter.</p>
            </a>
          </LazyLoad>
          <LazyLoad 
            className="project-container"
            debounce={false}
            throttle={250}
          >
            <a href="https://ericphillips.xyz/hacker-news" rel="noopener noreferrer" target="_blank">
              <img 
                src={Hacker} 
                alt="fake hacker news" 
                onLoad={this.handleImageLoaded.bind(this)} 
                style={{
                  transition: 'opacity 0.5s',
                  opacity: !imgState ? '0' : '1'
                }}
              />
              <h2>Hacker News</h2>
              <p>React, API and search functionality practice.</p>
            </a>
          </LazyLoad>
          <LazyLoad 
            className="project-container"
            debounce={false}
            throttle={250}
          >
            <a href="https://ericphillips.xyz/burger-builder" rel="noopener noreferrer" target="_blank">
              <img 
                src={Burger} 
                alt="burger builder" 
                onLoad={this.handleImageLoaded.bind(this)} 
                style={{
                  transition: 'opacity 0.5s',
                  opacity: !imgState ? '0' : '1'
                }}
              />
              <h2>Burger Builder</h2>
              <p>React/Redux/Firebase burger ordering machine.</p>
            </a>
          </LazyLoad>
        </div>
      </section>
    );
  }
}

export default Projects;