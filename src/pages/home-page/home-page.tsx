import { Wrapper } from '@/components/wrapper/wrapper';
import { messages } from '@/sources/messages';
import styles from './home-page.module.css';

import { BlockSection } from './demo-block/block';

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
    </Wrapper>
  );
};
