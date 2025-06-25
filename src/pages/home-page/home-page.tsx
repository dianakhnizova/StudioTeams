import { Wrapper } from '@/components/wrapper/wrapper';
import { messages } from '@/sources/messages';
import styles from './home-page.module.css';

export const HomePage = () => {
  return (
    <Wrapper>
      <div className={styles.container}>{messages.titles.homePageTitle}</div>
    </Wrapper>
  );
};
