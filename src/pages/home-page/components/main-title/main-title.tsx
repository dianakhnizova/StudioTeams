import styles from './main-title.module.css';
import { messages } from './messages';
import ImageBackground from '@/assets/main-title.png';

export const MainTitle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.titleProf}>{messages.titleProfession}</p>
        <p className={styles.titleName}>{messages.titleName}</p>
        <p className={styles.titleDescription}>{messages.titleDescription}</p>
      </div>
      <img src={ImageBackground} alt="main-title" className={styles.image} />
    </div>
  );
};
