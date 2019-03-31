import React, { Component } from 'react';
import info from './info';

class Professional extends Component {

  // render(){
  //   let divs = info.map(info => {
  //     return (
  //       <div key={Math.random()} className="project-container">
  //         <a href={info.link} rel="noopener noreferrer" target="_blank">
  //         <img src={info.imgSrc} 
          // onLoad={this.handleImageLoaded.bind(this)} alt={info.title} />
  //         <h2></h2>
  //         <p>{info.type} site.<br/>{info.desc}</p>
  //         </a>
  //       </div>
  //     )
  //   })
  //   return divs;
  // }

  state = { imageStatus: false };
  

  handleImageLoaded() {
    this.setState({ imageStatus: true });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }

  // render() {
  //   let imgState = this.state.imageStatus;
  //   return (
  //     <div>
  //       <img
  //         src={Meattown}
  //         style={{
  //           maxWidth: '100%', 
  //           transition: 'opacity 1s',
  //           opacity: !imgState ? '0' : '1'
  //         }}
  //         onLoad={this.handleImageLoaded.bind(this)}
  //         onError={this.handleImageErrored.bind(this)}
  //       />
  //       <p>{!this.state.imageStatus ? '' : 'loaded'}</p>
  //     </div>
  //   );
  // }

  render(){
    let divs = info.map(info => {
      return (
        <div key={Math.random()} className="project-container">
          <a href={info.link} rel="noopener noreferrer" target="_blank">
          <img 
            src={info.imgSrc} 
            // onLoad={this.handleImageLoaded.bind(this)} 
            alt={info.title} 
          />
          <h2>{info.title}</h2>
          <p>{info.type} site.<br/>{info.desc}</p>
          </a>
        </div>
      )
    })
    return divs;
  }
  
}


export default Professional;