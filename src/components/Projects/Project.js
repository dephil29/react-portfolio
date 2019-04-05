import React, {useState} from 'react';
import LazyLoad from 'react-lazy-load';

function Project(props) {

  let loaded = useState(false);

  let loadImg = () => {
    loaded = true;
  };
  
  let classes = {
    loadingClassName: "img-loading project-container",
    loadedClassName: "img-loaded project-container",
    loadedBorder: '1px solid black'
  };

  return (
    <React.Fragment>
      {props.items.data.map((item, i) => (
        <LazyLoad 
          className={
            loaded ?
            classes.loadedClassName :
            classes.loadingClassName
          }
          debounce={false}
          key={i}
          throttle={250}
        >
          <a href={item.link} rel="noopener noreferrer" target="_blank">
          
            <img 
              src={item.imgSrc} 
              alt={item.title}
              onLoad={loadImg}
              style={
                loaded ?
                {border: classes.loadedBorder} :
                {border: 'none'}
              }
            />
            <h2>{item.title}</h2>
            {item.type ?
            <p>{item.type} site.</p> :
            null}              
            <p>{item.desc}</p>
          </a>
        </LazyLoad>
      ))}
    </React.Fragment>

  )
};

export default Project;