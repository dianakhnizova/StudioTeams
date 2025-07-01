import styles from './contact-page.module.css';
import { messages } from '../../pages/contact-page/messages';
import { Wrapper } from '@/components/wrapper/wrapper';

export const ContactPage = () => {
  return (
    <Wrapper>
      <div className={styles.container}>
        <p className={styles.mainTitle}>{messages.mainTitle}</p>
      </div>
    </Wrapper>
  );
};
