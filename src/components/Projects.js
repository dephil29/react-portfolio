import React, { Component } from 'react';
import Meattown from '../images/meattown.jpg';
import Ary from '../images/ary.jpg';
import Gurlz from '../images/smartgurlz.jpg';
import Little from '../images/little.jpg';
import Vogue from '../images/vogue.jpg';
import Ned from '../images/ned.jpg';
import Forum from '../images/forum.jpg';
import Hacker from '../images/hacker.jpg';
import Burger from '../images/burger.png';
 
class Projects extends Component {

  componentWillMount() {
    document.title = 'ericphillips.xyz - projects'
  }

  render() {
    return (
      <section className="content projects-section">
      <h1 class="title">PROFESSIONAL</h1>
      <div class="projects-container">
        <div className="project-container">
          <a href="https://meattown.com/" rel="noopener noreferrer" target="_blank">
            <img src={Meattown} alt="meattown" />
            <h2>MeatTown</h2>
            <p>Shopify site.<br/>Custom sections for the home page and customization of the product pages in accordance with clients wishes.</p>
          </a>
        </div>
        <div className="project-container">
          <a href="http://aryconcept.com/" rel="noopener noreferrer" target="_blank">
            <img src={Ary} alt="Ary Concept" />
            <h2>Ary Concept</h2>
            <p>Wordpress site.<br/>Built on Divi. Contents of homepage between header and footer is totally customized, as well as the modal and slider on the "services" pages. Individual pages also highly customized including modal and slider.</p>
          </a>
        </div>
        <div className="project-container">
          <a href="https://smartgurlz.com/" rel="noopener noreferrer" target="_blank">
            <img src={Gurlz} alt="Smartgurlz" />
            <h2>SmartGurlz</h2>
            <p>Shopify site.<br/>Several custom sections, including two YouTube modals and homepage product display. Heavily customized product page.</p>
          </a>
        </div>
        <div className="project-container">
          <a href="https://mylittleandi.com/" rel="noopener noreferrer" target="_blank">
            <img src={Little} alt="My Little and I" />
            <h2>My Little and I</h2>
            <p>Shopify site.<br/>Original Instagram display section, and collection pages designed specifically for multiple product orders.</p>
          </a>
        </div>
        <div className="project-container">
          <a href="https://thevoguewear.com/" rel="noopener noreferrer" target="_blank">
            <img src={Vogue} alt="Vogue Wear" />
            <h2>The Vogue Wear</h2>
            <p>Shopify site.<br/>Heavily customized site based on mockup provided by the client. Configuration of collections to auto-assign large amounts of inventory to their proper places with minimal interaction on the part of the client.</p>
          </a>
        </div>
        <div className="project-container">
          <a href="https://helloned.com/" rel="noopener noreferrer" target="_blank">
            <img src={Ned} alt="Ned" />
            <h2>Ned</h2>
            <p>Shopify site.<br/>Custom home page sections for product information display. Several custom product page templates for unique pages for each product. Heavily redesigned header and mega menu.</p>
          </a>
        </div>
      </div>
      <h1 class="title">PERSONAL</h1>
      <div class="projects-container">
        <div className="project-container">
          <a href="http://jabandaja.com/generic_forum" rel="noopener noreferrer" target="_blank">
            <img src={Forum} alt="generic forum" />
            <h2>Generic Forum</h2>
            <p>A forum built with PHP/CodeIgniter.</p>
          </a>
        </div>
        <div className="project-container">
          <a href="http://ericphillips.xyz/hacker-news" rel="noopener noreferrer" target="_blank">
            <img src={Hacker} alt="fake hacker news" />
            <h2>Hacker News</h2>
            <p>React, API and search functionality practice.</p>
          </a>
        </div>
        <div className="project-container">
          <a href="http://ericphillips.xyz/burger-builder" rel="noopener noreferrer" target="_blank">
            <img src={Burger} alt="burger builder" />
            <h2>Burger Builder</h2>
            <p>React/Redux/Firebase burger ordering machine.</p>
          </a>
        </div>
      </div>
      </section>
    );
  }
}

export default Projects;