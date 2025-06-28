import { Wrapper } from '@/components/wrapper/wrapper';
import { messages } from '@/sources/messages';
import styles from './home-page.module.css';

import { BlockSection } from './demo-block/block';
import { MainTitle } from './components/main-title/main-title';
import { Preview } from './components/preview/preview';
import { Contacts } from './components/contacts/contacts';

export const HomePage = () => {
  return (
    <Wrapper>
      <section className={styles.container}>
        {messages.titles.homePageTitle}
        <BlockSection />
        <BlockSection />
        <BlockSection />
        <BlockSection />
      </section>
      <div className={styles.container}>
        <MainTitle />
        <Preview />
        <Contacts />
      </div>
    </Wrapper>
  );
};
