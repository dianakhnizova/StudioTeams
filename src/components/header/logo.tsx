import styles from './logo.module.css';

type LogoProps = {
  toggleMenu: () => void;
};

export const Logo = ({ toggleMenu }: LogoProps) => (
  <button className={styles.logo} onClick={toggleMenu} aria-label="Toggle menu">
    <span>ST</span>
  </button>
);
