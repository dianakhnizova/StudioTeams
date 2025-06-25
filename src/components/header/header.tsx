import { useState } from 'react';
import { MOBILE_BREAKPOINT } from '@/constants';

import styles from './header.module.css';
import { Wrapper } from '@/components/wrapper/wrapper';
import { Logo } from './logo';
import { Menu } from './menu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

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
    <header className={`${styles.header} ${isMenuOpen ? styles.open : ''}`}>
      <Wrapper>
        <Logo toggleMenu={toggleMenu} />
        <Menu isOpen={isMenuOpen} onItemClick={closeMenu} />
      </Wrapper>
    </header>
  );
};
