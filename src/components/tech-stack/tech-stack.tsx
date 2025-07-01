import { messages } from './messages';
import styles from './tech-stack.module.css';
import JS from '@/assets/stack/js.webp';
import TS from '@/assets/stack/ts.png';
import React from '@/assets/stack/react.png';
import HTML from '@/assets/stack/html.png';
import CSS from '@/assets/stack/css.png';

export const TechStack = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{messages.mainTitle}</p>
      <div className={styles.stackContainer}>
        <img src={JS} alt="JS" className={styles.image} />
        <img src={TS} alt="TS" className={styles.image} />
        <img src={React} alt="React" className={styles.image} />
        <img src={HTML} alt="HTML" className={styles.image} />
        <img src={CSS} alt="CSS" className={styles.image} />
      </div>
    </div>
  );
};
