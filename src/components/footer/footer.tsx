import styles from './footer.module.css';

import { useMobileMenuToggle } from '@/utils/hooks/use-mobile-menu-toggle';
import { Wrapper } from '@/components/wrapper/wrapper';
import { Logo } from '@/components/logo/logo';
import { ContactMenu } from '@/components/footer/contact-menu/contact-menu';
import classNames from 'classnames';

export const Footer = () => {
  const { isMenuOpen, isMobile, toggleMenu, closeMenu } = useMobileMenuToggle();

  return (
    <footer
      className={`${styles.footer} ${isMobile ? styles.footerMobile : ''} ${isMenuOpen ? styles.open : ''}`}
    >
      <Wrapper className={styles.footerWrapper}>
        <ContactMenu
          isMobile={isMobile}
          isOpen={isMenuOpen}
          onItemClick={closeMenu}
        />

        <div
          className={classNames(
            styles.logoContainer,
            isMobile && styles.footerLogoMobile
          )}
        >
          <Logo isMobile={isMobile} toggleMenu={toggleMenu} />
        </div>
      </Wrapper>
    </footer>
  );
};
