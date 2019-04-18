import {useEffect} from 'react';

const scrollToTop = () => {
  useEffect(() => {
    return () => {  
      try {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      } catch (error) {
        window.scrollTo(0, 0);
      }
    }
  }, []);
}

export default scrollToTop;
