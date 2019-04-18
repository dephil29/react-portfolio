import React, {useState, useEffect} from 'react';

import {data} from './info';
import scrollToTop from '../scrollToTop/scrollToTop';

const Projects = () => {

  const [counter, setCounter] = useState(0);
  
  const left = () => {
    if(counter === 0){
      setCounter(8)
    }else{
      setCounter(counter - 1)
    }
  }

  const right = () => {
    if(counter === 8){
      setCounter(0)
    }else{
      setCounter(counter + 1)
    }    
  }

  const [width, setWidth] = useState(window.innerWidth < 745 ? window.innerWidth * 0.75 : 600);
  const [margin, setMargin] = useState(window.innerHeight < 720 ? 0 : 300);
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth < 745 ? window.innerWidth * 0.75 : 600);
      setMargin(window.innerHeight < 720 ? 0 : 300);
      console.log('oman')
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  useEffect(() => {
    document.title = 'projects - ericphillips.xyz';
  });

  // useEffect(() => {
  //   return () => {  
  //     try {
  //       window.scroll({
  //         top: 0,
  //         left: 0,
  //         behavior: 'smooth',
  //       });
  //     } catch (error) {
  //       window.scrollTo(0, 0);
  //     }
  //   }
  // }, []);
  scrollToTop();

  const styles ={
    button: {
      position: 'absolute',
      bottom: '50%',
      fontSize: '50px',
      cursor: 'pointer',
      color: 'white',
      zIndex: '100'
    },
    leftButton: {
      left: '-35px'
    },
    rightButton: {
      right: '-40px'
    }
  }

  return (
    <section className="content projects-page">
      <div className="projects-container">
      {data.map((item, i) => (
        <div 
          key={i}  
          className={
            (i === counter) 
            ? 'project-container shown' 
            :'project-container'
          }
          style={{        
            width: width,
            height: width,
            marginTop: `-${margin}px`,
            marginLeft: `-${width / 2}px`
          }}
        >
        <h1 style={{textAlign: 'center', marginBottom: '20px', textTransform: 'uppercase'}}>{item.projectType}{' '}projects</h1>
        <b 
          onClick={left}
          style={{
            ...styles.button, 
            ...styles.leftButton
          }}
          title="previous slide"
        >&#60;</b>
        <b 
          onClick={right}
          style={{
            ...styles.button, 
            ...styles.rightButton
          }}
          title="next slide"
        >&#62;</b>
          <a 
            href={item.link} 
            rel="noopener noreferrer" 
            style={{
              textDecoration: 'none'
            }}
            target="_blank"
            title={item.title}
          >
            <img 
              src={item.imgSrc} 
              alt={item.title}
            />
            <h2>{item.title}</h2>
            {item.type ?
            <p>{item.type}</p> :
            null}              
            <p>{item.desc}</p>
          </a>
        </div>
      ))}
      </div>
    </section>
  );  
};

export default Projects;