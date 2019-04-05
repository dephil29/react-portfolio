import React, {Component} from 'react';
import {professional, personal} from './info';
import Project from './Project';
 
class Projects extends Component {
  state = {
    loading: true
  };

  componentDidMount(){
    this.setState({
      loading: false
    })
  };

  onChildLoad = () => {
    this.setState({
      loading: false
    })
  }

  render(){
    const loading = this.state.loading;
    return (
      <section className="content projects-section">
        <h2 className="title">PROFESSIONAL</h2>
        <div className="projects-container">
          {loading ? <p>loading</p> :
            <Project items={professional} />
          }
        </div>
        <h2 className="title">PERSONAL</h2>
        <div className="projects-container">
          {loading ? <p>loading</p> :
            <Project items={personal} />
          }
        </div>
      </section>
    );  
  }
};

export default Projects;