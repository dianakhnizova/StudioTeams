import styles from './logo.module.css';

import SnakeLogo from './snake.svg';

type LogoProps = {
  isMobile?: boolean;
  toggleMenu?: () => void;
  className?: string;
};

export const Logo = ({ isMobile, toggleMenu, className }: LogoProps) => (
  <div
    className={`${className || ''} ${styles.logo} ${isMobile ? styles.logoMobile : ''}`}
    onClick={toggleMenu && toggleMenu}
    aria-label="Toggle menu"
  >
    <img src={SnakeLogo} alt="Logo StudioTeams" />
  </div>
);
