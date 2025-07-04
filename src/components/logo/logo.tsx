import styles from './logo.module.css';

import SnakeLogo from './snake.svg';

type LogoProps = {
  isMobile?: boolean;
  toggleMenu?: () => void;
  className?: string;
};

export const Logo = ({ isMobile, toggleMenu, className }: LogoProps) => (
  <div className={`${styles.container} ${className || ''}`}>
    <button
      className={`${styles.logo} ${isMobile ? styles.logoMobile : ''}`}
      onClick={toggleMenu && toggleMenu}
      aria-label="Toggle menu"
    >
      {/* <span>ST</span> */}
      <img src={SnakeLogo} alt="Logo StudioTeams" />
    </button>
  </div>
);
