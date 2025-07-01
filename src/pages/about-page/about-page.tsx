import { Wrapper } from '@/components/wrapper/wrapper';
import styles from './about-page.module.css';
import { messages } from './messages';

export const AboutPage = () => {
  return (
    <Wrapper>
      <div className={styles.container}>
        <p>{messages.mainTitle}</p>
      </div>
    </Wrapper>
  );
};
