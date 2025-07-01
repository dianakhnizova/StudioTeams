import { useMobileMenuToggle } from '@/utils/hooks/use-mobile-menu-toggle';

import styles from './header.module.css';
import { Wrapper } from '@/components/wrapper/wrapper';
import { Logo } from '@/components/logo/logo';
import { NavMenu } from './nav-menu/nav-menu';

export const Header = () => {
  const { isMenuOpen, isMobile, toggleMenu, closeMenu } = useMobileMenuToggle();

  return (
    <header
      className={`${styles.header} ${isMobile ? styles.headerMobile : ''} ${isMenuOpen ? styles.open : ''}`}
    >
      <Wrapper className={styles.headerWrapper}>
        <Logo isMobile={isMobile} toggleMenu={toggleMenu} />
        <NavMenu
          isMobile={isMobile}
          isOpen={isMenuOpen}
          onItemClick={closeMenu}
        />
      </Wrapper>
    </header>
  );
};
