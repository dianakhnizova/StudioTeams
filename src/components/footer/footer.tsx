import styles from './footer.module.css';

import { useMobileMenuToggle } from '@/utils/hooks/use-mobile-menu-toggle';
import { Wrapper } from '@/components/wrapper/wrapper';
import { Logo } from '@/components/logo/logo';
import { ContactMenu } from '@/components/footer/contact-menu/contact-menu';

export const Footer = () => {
  const { isMenuOpen, isMobile, toggleMenu, closeMenu } = useMobileMenuToggle();

  return (
    <footer
      className={`${styles.footer} ${isMobile ? styles.footerMobile : ''} ${isMenuOpen ? styles.open : ''}`}
    >
      <Wrapper>
        <ContactMenu
          isMobile={isMobile}
          isOpen={isMenuOpen}
          onItemClick={closeMenu}
        />

        <Logo isMobile={isMobile} toggleMenu={toggleMenu} />
      </Wrapper>
    </footer>
  );
};
