import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for scrolling to top
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Optional: adds a smooth scrolling effect
    });
  }, [pathname]); // This effect runs whenever the pathname changes

  return null;
};

export default ScrollToTop;