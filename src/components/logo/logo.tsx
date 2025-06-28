import styles from './logo.module.css';

type LogoProps = {
  isMobile: boolean;
  toggleMenu: () => void;
};

export const Logo = ({ isMobile, toggleMenu }: LogoProps) => (
  <div className={styles.container}>
    <button
      className={`${styles.logo} ${isMobile ? styles.logoMobile : ''}`}
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <span>ST</span>
    </button>
  </div>
);
