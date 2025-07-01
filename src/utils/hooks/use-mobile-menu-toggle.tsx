import { MOBILE_BREAKPOINT_W, MOBILE_BREAKPOINT_H } from '@/sources/constants';
import { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';

export const useMobileMenuToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width, height } = useWindowSize();
  const isMobile =
    width <= MOBILE_BREAKPOINT_W || height <= MOBILE_BREAKPOINT_H;

  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [width]);

  const toggleMenu = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return { isMenuOpen, isMobile, toggleMenu, closeMenu };
};
