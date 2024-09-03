import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from '@tanstack/react-router';

export const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled === false && location.hash !== '') {
      nav({ to: '/' });
    }
  }, [location.hash, nav, scrolled]);

  return { scrolled, activeHash: location.hash };
};
