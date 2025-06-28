import { Wrapper } from '@/components/wrapper/wrapper';
import styles from './home-page.module.css';
import { MainTitle } from './components/main-title/main-title';
import { Preview } from './components/preview/preview';
import { Contacts } from './components/contacts/contacts';

export const HomePage = () => {
  return (
    <Wrapper>
      <div className={styles.container}>
        <MainTitle />
        <Preview />
        <Contacts />
      </div>
    </Wrapper>
  );
};
