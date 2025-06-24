import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import styles from './Layout.module.css';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header className={styles.header} />
      <Main className={styles.main}>{children}</Main>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Layout;