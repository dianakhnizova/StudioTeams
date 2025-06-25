import styles from './header.module.css';
import { Wrapper } from '@/components/wrapper/wrapper';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <label htmlFor="menu-toggle" className={styles.menuLabel}>
          <h2>ST</h2>
        </label>

        <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />

        <ul className={styles.menu}>
          <li>menu-1</li>
          <li>menu-2</li>
          <li>menu-3</li>
          <li>menu-4</li>
          <li>menu-5</li>
        </ul>

      </Wrapper>
    </header>
  );
};
