import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { MOBILE_BREAKPOINT } from '@/constants';

import styles from './header.module.css';
import { Wrapper } from '@/components/wrapper/wrapper';
import { Logo } from './logo/logo';
import { Menu } from './menu/menu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { width } = useWindowSize();
  const isMobile = width <= MOBILE_BREAKPOINT;

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

  return (
    <header
      className={`${styles.header} ${isMobile ? styles.headerMobile : ''} ${isMenuOpen ? styles.open : ''}`}
    >
      <Wrapper>
        <Logo isMobile={isMobile} toggleMenu={toggleMenu} />
        <Menu isMobile={isMobile} isOpen={isMenuOpen} onItemClick={closeMenu} />
      </Wrapper>
    </header>
  );
};
